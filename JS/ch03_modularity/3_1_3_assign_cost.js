// with assign
// balance가 클로저가 되어서 동작
make_simplified_withdraw = (balance) => {
    return amount => {
        balance = balance - amount;
        return balance;
    }
}

const W = make_simplified_withdraw(25);

console.log(W(20)); // 5
console.log(W(10)); // -5

// without assign
make_decrementer = (balance) => {
    // return amount => balance - amount;
    return (amount) => balance - amount;
}

// 맨 처음 25는 make_decrementer함수를 이용해서 balance애 저장하는 것에 사용됨
const D = make_decrementer(25)

//  D객체의 20, 10의 경우  return amount => balance - amount;에서 amount에 사용됨
// amount라는 인자로 쓰이게 됨, 또한 balance값을 갱신하지 않으므로 
// 처음에 make_decrementer() 함수를 이용해서 D객체를 생성할 떄 쓰인 25라는 값이 계속해서 메모리에 남아있게됨
console.log(D(20)); // 5
console.log(D(10)); // 15

make_decrementer_other = (balance) => {
    return function (amount) {
        return balance - amount;
    }
}

const E = make_decrementer_other(25)
console.log(E(20)); // 5
console.log(E(10)); // 15
/**
 * make_decrementer에서는 잔액이 누적되는 효과가 없다.
 * 처음에 balance
 */