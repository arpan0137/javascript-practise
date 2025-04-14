function checkPrime(no){
    let i = 2;
    let is_prime = true;
    if(no < i){ // if number less than 2 than not prime
        is_prime = false
    }
    else{
        while(i < no){
            if( (no%i) === 0  ){ //if number is divisible by any other numbers except one and itself than not prime
                is_prime = false
                break
            }
            i++;
        }
    }
    return is_prime
}

let number = 13
console.log( checkPrime(number) ? `${number} is Prime!` : `${number} is not Prime!` )