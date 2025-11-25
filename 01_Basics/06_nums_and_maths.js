// Maths and Numbers - examples in JavaScript

const score = 200;

// Avoid using Number object unless you specifically need an object wrapper
const balance = new Number(100);
console.log('balance (Number object):', balance);

console.log('balance value (primitive):', balance.valueOf());

// Basic arithmetic
const a = 10;
const b = 3;
console.log('a + b =', a + b);
console.log('a - b =', a - b);
console.log('a * b =', a * b);
console.log('a / b =', a / b);
console.log('a % b =', a % b);
console.log('a ** b =', a ** b); // exponentiation

// Floating point precision quirk
console.log('0.1 + 0.2 === 0.3 ->', 0.1 + 0.2 === 0.3);
console.log('0.1 + 0.2 =', 0.1 + 0.2);

// Rounding and formatting
console.log('Math.round(4.6) =', Math.round(4.6));
console.log('Math.floor(4.6) =', Math.floor(4.6));
console.log('Math.ceil(4.1) =', Math.ceil(4.1));
console.log('(1/3).toFixed(4) =', (1 / 3).toFixed(4));

// Math constants and functions
console.log('Math.PI =', Math.PI);
console.log('Math.E =', Math.E);
console.log('Math.sqrt(16) =', Math.sqrt(16));
console.log('Math.pow(2, 8) =', Math.pow(2, 8));
console.log('Math.max(1,5,2) =', Math.max(1, 5, 2));
console.log('Math.min(1,5,2) =', Math.min(1, 5, 2));
console.log('Math.random() =', Math.random());

// Parsing and checks
console.log("Number('42') =", Number('42'));
console.log("parseInt('42px') =", parseInt('42px', 10));
console.log("parseFloat('3.14abc') =", parseFloat('3.14abc'));
console.log('Number.isNaN(NaN) =', Number.isNaN(NaN));
console.log('isFinite(Infinity) =', isFinite(Infinity));

// BigInt for very large integers
const big = 123456789012345678901234567890n;
console.log('BigInt example:', big);

// Conversions
console.log('String(123) =', String(123));
console.log('( +"123" ) =', +"123");

// Type notes
console.log('typeof new Number(100) =', typeof new Number(100));
console.log('typeof Number(100) =', typeof Number(100));

// Use the `score` variable from earlier
console.log('score =', score);
