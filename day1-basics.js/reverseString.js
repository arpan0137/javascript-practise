
function rev_string(str){
    // let rev_str = "";
    // for(let i = (str.length - 1); i >= 0; i-- ){ // custom logic to reverse a string
    //     rev_str += str[i];
    // }
    // return rev_str;
    return [...str].reverse().join(""); // reverse a string using built-in functions
}

string = "Positive";
console.log( `Reverse of ${string} is ${ rev_string(string) } `);