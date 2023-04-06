//never
function raiseError(message: string): never {
    throw new Error(message);
}

function reject() {
    return raiseError('Rejected');
}

let loop = function () {
    while (true) {
        console.log('Hi');
    }
};

//Example

function fn(a: string | number): boolean {
    if (typeof a === 'string') {
        return true;
    } else if (typeof a === 'number') {
        return false;
    }
    return neverOccur();
}
let neverOccur = () => {
    throw new Error('Never');
};
