export class TranslationService {
  // Creates a new service
  constructor(api) {
    this.api = api;
  }
  // Attempts to retrieve the translation for the given text.
  free(text) {
    return this.api.fetch(text)
      .then(res => res.translation)
      .catch(err => { throw err; });
  }
  // Batch translates the given texts using the free service.
  batch(texts) {
    if (!texts.length) return Promise.reject(new BatchIsEmpty());
    return Promise.all(texts.map(text => this.free(text)));
  }
  // Requests the service for some text to be translated.
  // Note: the request service is flaky, and it may take up to three times for it to accept the request.
  request(text) {
    const promiseRequest = text => new Promise((resolve, reject) => {
      this.api.request(text, err => {
        if (err) reject(err);
        resolve();
      });
    });
    return new Promise((resolve, reject) => {
      this.api.request(text, err => {
        if (err) reject(err);
        resolve();
      })
    })
    .then(success => Promise.resolve(), failure => promiseRequest(text))
    .then(success => Promise.resolve(), failure => promiseRequest(text))
    .then(success => Promise.resolve(), failure => Promise.reject(failure))
  }
  // Retrieves the translation for the given text
    // - Rejects with an error if the quality can not be met
    // - Requests a translation if the translation is not available, then retries
  premium(text, minimumQuality) {
    return this.api.fetch(text)
      .then(result => new Promise((resolve, reject) => {
        if (result.quality >= minimumQuality)
          resolve(result.translation);
        else
          reject( new QualityThresholdNotMet() );
      }))
      .catch(err => {
        if (err.constructor.name === 'Untranslatable')
          return Promise.reject(err);
        if (err instanceof QualityThresholdNotMet)
          throw err;
        if (err.constructor.name === 'NotAvailable')
          return this.request(text)
                  .then(_ => this.premium(text, minimumQuality));
      })
  }
}
// This error is used to indicate a translation was found, but its quality does not meet a certain threshold. Do not change the name of this error.
export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

// This error is used to indicate the batch service was called without any texts to translate (it was empty). Do not change the name of this error.
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
