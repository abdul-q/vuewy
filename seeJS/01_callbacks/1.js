function add(x, y) {
    return x + y;
}

console.log(add(5, 10))

function add_1(z, callback) {
    return callback(z, 10)
}

console.log("Callback")
console.log(add_1(10, add))

let spock = [2, 4, 6, 8]

function squared(y) {
    return y * y;
}
const res = spock.map((nums) => squared(nums))
console.log(spock + " is squared to : " + res)

const res_1 = spock.filter((num => num >= 6))
console.log(res_1 + " are/is greater than or equal to six")

/* The conditional(ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark(?), 
then an expression to execute if the condition is truthy followed by a colon(: ), 
and finally the expression to execute if the condition is falsy.
 */
const res_2 = res.map((num) => num < 20 ? spock.pop(num) : spock.push(num))
console.log(res_2)
