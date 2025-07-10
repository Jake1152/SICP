// with assign
// balance가 클로저가 되어서 동작
make_simplified_withdraw = (balance) => {
    return amount => {
        balance = balance - amount;
        return balance;
    }
}

const W = make_simplified_withdraw(25);

console.log(W(20));
console.log(W(10));


// without assign
make_decrementer = (balance) => {
    return amount => balance - amount;
}

const D = make_decrementer(25)
console.log(D(20));
console.log(D(10));
