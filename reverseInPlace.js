function reverseInPlace (input){
    for (let i = 0 ; i < input.length / 2; i++){
        let tempChar = input [i];
        input[i]=input[input.length - 1 - i];
        input[input.length - 1 - i]=tempChar;
    }
    console.log(input.join(' '));
}

reverseInPlace(['33', '123', '0', 'dd']);