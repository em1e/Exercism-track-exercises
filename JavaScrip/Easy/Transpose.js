
export function transpose(input) {

    if (input.length === 0) {return []}
    let transposedResult = [];
    let rows = Math.max(...input.map(elem => elem.length));

    for(let col=0; col<rows; col++){
        let nString = '';
        input.forEach((elem) => {
            elem[col] ? nString += elem[col] : nString += " ";
        });
        transposedResult.push(nString);
    }
    for (let elem=rows-1; elem>=0; elem--){
        transposedResult[elem] = transposedResult[elem].trimRight();
        if (transposedResult[elem].length === input.length) break;
    }
    return transposedResult;
}
