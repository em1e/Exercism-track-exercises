const isSilence = (msg: string): boolean => /^\s*$/.test(msg)
const isYelling = (msg: string): boolean => /^[^A-Za-z]*[A-Z]+(?:[^a-z]*)$/.test(msg)
const isQuestion = (msg: string): boolean => /\?\s*$/.test(msg)

export function hey(msg: string): string {
    return isYelling(msg) && isQuestion(msg) ? 'Calm down, I know what I\'m doing!' :
        isYelling(msg) ? 'Whoa, chill out!' :
        isQuestion(msg) ? 'Sure.' :
        isSilence(msg) ? 'Fine. Be that way!' :
        'Whatever.'
}
