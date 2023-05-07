const _bash = [
`#!/bin/bash

# "set -x" and "set +x" toggle tracing
# to ENABLE tracing you use MINUS
# to REMOVE tracing you use PLUS
set -x
x=1
set +x
y=2
result=$((x + y))

# output:
# + x=1
# + set +x

# credit: jakkals
`,
]


const _java = [
`import java.util.Calendar;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(2020, 1, 1);
        Date date = calendar.getTime();
        System.out.println(date.toString()); // Feb 01 2020...
        // year is 1-indexed, day is 1-indexed, month is ZERO-indexed
    }
}
`,
]


const _javaScript = [
`let arr = [1, 2, 3, 100];
arr.sort();
console.log(arr); // [1, 100, 2, 3]
`,


`console.log(parseInt(.000003)); // 0
console.log(parseInt(.0000003)); // 3
// explanation: parseInt expects a string. If you pass something that's not a
// string, it will attempt to convert your argument to a string for you. In the
// case of the second example, the result is '3e-7'. Then parseInt goes from the
// start of the string and collects characters which can be interpreted as int,
// which gives the number 3.

// credit: Madjosz
`,


`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1 + arr2;
console.log(arr3, typeof arr3); // 1,2,34,5,6 string
`,


`throw new Error('I am throwing an error like a proper language.');

throw 'I am throwing not an error but a STRING. There will be no stack trace.';

throw {'in fact': 'I can', 'throw': 'anything at all'};
throw true;
throw new RegExp('ahhhhh', 'i');
`,


`let arr = [];
const thing = arr.pop(); // no error D:
console.log(thing); // undefined
console.log(arr); // []
`,


`// doesn't follow transitive law (if a is equal to b and b is equal to c, then
// a is equal to c)
console.log("0" == 0); // true
console.log(0 == []); // true
console.log("0" == []); // false
`,


`let arr = ['you can change', 'the array', 'via', 'the length property'];
arr.length = 1;
console.log(arr); // [ 'you can change']
arr.length = 10;
console.log(arr); // [ 'you can change', <9 empty items> ]
delete arr.length; // no error, just silently ignored
console.log(arr); // [ 'you can change', <9 empty items> ]
arr.length = null; // no error
console.log(arr); // []
`,


`let arr = [
  'It is fun to',
  'silently ignore stuff',
  'without giving a warning or error'
];
Object.freeze(arr);
arr[0] = 'bob'; // no warning or error, just silently ignored
console.log(arr);
// [ 'It is fun to',
//   'silently ignore stuff',
//   'without giving a warning or error' ]
`,


`let arr = [undefined, undefined, undefined];
console.log(arr[10]); // undefined, no error
`,


`function demoAdditionalParameters() {
    console.log('la la la everything is fine');
    console.log(arguments);
}
demoAdditionalParameters('random', 'parameters', 'that', 'should', 'not', 'exist');
// la la la everything is fine
// [Arguments] {
//  '0': 'random',
//  '1': 'parameters',
//  '2': 'that',
//  '3': 'should',
//  '4': 'not',
//  '5': 'exist' }

function demoMissingParameters(func, uses, four, parameters) {
    console.log('la la la everything is still fine');
    console.log(func, uses, four, parameters);
}
demoMissingParameters();
// la la la everything is still fine
// undefined undefined undefined undefined
`,


`let string = 'bob';
string[1] = 'X'; // no error, just silently ignored
console.log(string); // bob
`,


`let arr = [0, 1, 2];
arr[3] = undefined;
arr[42] = 4;

// undefined items are distinct from "empty" items
console.log(arr); // [ 0, 1, 2, undefined, <38 empty items>, 4 ]

// or are they?
console.log(arr[20]); // undefined
console.log(arr[20] === undefined); // true
console.log(arr[20] === arr[3]); // true

// hee hee they are
console.log(arr.filter(el => el === undefined).length); // 1
`,


`function printLetter(letter) {
    arguments[0] = 'b'; // you can do this
    console.log(letter);
}
printLetter('a'); // b
`,


`let obj = {name: 'bob', age: 42};
console.log(obj.thisDoesNotExist); // no error, undefined
delete obj.thisAlsoDoesNotExist; // no error, just silently ignored








`,


`let thing = true + {};
console.log(thing, typeof thing); // 'true[object Object]' string

thing = true + [[]];
console.log(thing, typeof thing); // 'true' string

thing = 0 + [ 0 ];
console.log(thing, typeof thing); // '00' string

thing = true + null;
console.log(thing, typeof thing); // 1 number

thing = true + undefined;
console.log(thing, typeof thing); // NaN number

thing = 'true' + -Infinity;
console.log(thing, typeof thing); // 'true-Infinity' string

thing = [] + [];
console.log(thing, typeof thing); // '' string

thing = true + '-1';
console.log(thing, typeof thing); // 'true-1' string

thing = 'bob' + null;
console.log(thing, typeof thing); // 'bobnull' string
`,


`const date = new Date(2020, 1, 1);
console.log(date.toString()); // Sat Feb 01 2020...
// year is 1-indexed, day is 1-indexed, month is ZERO-indexed
`,


`function test(firstName='Bob', age=42) {
    console.log('first name is ' + firstName);
    console.log('age is ' + age);
}

test(age=12, firstName='Jimothy');
// first name is 12
// age is Jimothy
`,


`console.log(test()); // 0
console.log(num1); // undefined
console.log(num2); // ReferenceError: num2 is not defined
console.log(num3); // ReferenceError: num3 is not defined
var num1 = 1;
let num2 = 2;
num3 = 3;
function test() {
    let num0 = 0;
    return num0;
}
`,
];


const _python = [
`def mutable_default_args_are_evil(item, lst=[]):
    lst.append(item)
    return lst

print(mutable_default_args_are_evil(1))  # [1]
print(mutable_default_args_are_evil(2))  # [1, 2]







`,


`lst = ['a', 'b', 'c']
for i in range(0, len(lst)):
    lst[i] = lst[i].upper()
print(lst)  # ['A', 'B', 'C']
print(i)  # 2, leaks out of loop
`,


`arr = [lambda: print(i) for i in range(2)]
print(arr)  # [<function <listcomp>.<lambda> at [address]>, <function <listcomp>.<lambda> at [different address]>]
arr[0]()  # prints 1
arr[1]()  # prints 1

# credit: Madjosz
`,


`list1 = [1, 2, 3, 4]
list2 = ['a', 'b', 'c']

for pair in zip(list1, list2):
    print(pair)
# (1, 'a')
# (2, 'b')
# (3, 'c')
# when there's a mismatch in length, zip silently truncates with no error or warning
`,


`print(round(0.5))  # rounds down to 0
print(round(1.5))  # rounds up to 2
`,
];


const _r = [
`# T is a predefined alias for TRUE
print(TRUE == T)  # TRUE
print(identical(T, TRUE))  # TRUE
print(T)  # TRUE

# you can overwrite T with something else
T = "bob"
print(T)  # "bob"
T = FALSE
print(T)  # FALSE
`,


`nums <- c(1:5)
print(nums) # 1 2 3 4 5

keep <- c(TRUE, FALSE, FALSE, FALSE) # note mistake in length (4 instead of 5)
print(keep) # TRUE FALSE FALSE FALSE

final <- nums[keep]
print(final)  # 1 5
# if there's a mismatch in vector length, we just silently cycle back through with 
# no error or warning
`,


`vector <- c(NA, NA, NA)
print(vector[10])  # NA, no error`
,


`print(all.equal(1, 1)) # returns the boolean TRUE 
print(all.equal(1, 2)) # does not return FALSE! Instead returns a string, "Mean relative difference: 1"
`,


`print(round(0.5))  # rounds down to 0
print(round(1.5))  # rounds up to 2
`,


`
func <- function(allegedly, takes, four, params) {
    print('la la la everything is fine')
    return(allegedly + takes + four)
}
print(func(1, 2, 3))  # 6
# no errors or warnings about arg number
`,
]

const _sql = [
`-- person table:
-- id   name       gender
-- ---- ---------- -------
-- 1    Bob        M
-- 2    Lucy       F
-- 3    Jimothy    NULL

SELECT * FROM person WHERE gender NOT IN ('M', 'F');  -- returns 0 rows
`,
]


const examples = { 'Bash': _bash, 'Java': _java, 'JavaScript': _javaScript, 'Python': _python,'R': _r, 'SQL': _sql}
export { examples };
