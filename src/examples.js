const _bash = [
{code: 
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
`,
explanation: '',
credit: 'jakkals',
runLink: '',
},
];


const _c = [
{code: 
`#include <stdio.h>

#define SIX 1+5
#define NINE 8+1

int main() {
    printf("SIX * NINE = %d", SIX * NINE);
}
// output: SIX * NINE = 42
`,
explanation: '',
credit: 'hobovsky',
runLink: '',
},
];


const _cpp = [
{code: 
`#include <string>
#include <iostream>

using namespace std;

int main() {
    string s = "The best language ever is.. Brainfuck";
    cout << s + '!' << endl;
    
    cout << "The best language ever is.. Brainfuck" + '!' << endl;
}
// output: 
// The best language ever is.. Brainfuck!
// fuck
`,
explanation: 
<>
In the second case, <code>"The best language ever is.. Brainfuck"</code> is a string literal,
 which is a character array. Using <code>+</code> with a character array results in pointer 
 arithmetic. The ASCII value of <code>!</code> is <code>33</code>, so we add <code>33</code> to 
 the pointer that points to the start of the string literal. <code>33</code> characters later 
 gets us to the result <code>"fuck"</code>.
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp1#main.cpp',
},

{code: 
`#include <string>
#include <iostream>

using namespace std;

int main() {
    string str = "abcd";
    
    // print the string in reverse
    for(auto idx = str.length() - 1; idx >= 0; --idx)
        cout << str[idx];
}

/*
output:
dcba�Q�hh@\`�Q�hM\`�L��Q�W�Q�M\`��i    �j��Q�WF��Q�M\`�M\`�M\`�A��@Ml�i  �h�Q�X(}X6d\s�(}X6d\s�(}X6d\s���!��8i    �i�i�u��Q�i �i  �Ni �4@�Q�W�?|wn]@��0��)�g@ �ͩAi �Z�i    �i  �i  �2�Q�Xi �i  ��i �*��Q�i �*�i   ��Q�i    �Pi �i  ��i �li �#i ���Q�i  �+Xi    ��Q�i   �Pi �>Pi    ���Q��=��i  ��Q�@�Q�0i  �0i �   i   ��i �Qi �i  �i  �i  ���Q�Xg�_i  �P�i�0�Q�x�Q�0�Q�@�Q�t�ii   ��g�_i  ��Q�t�Q�xi  �Pi �&@&i   �i  �&@i   �Pi  �
�i  �i  ��Q�i   �i  �i  �&@i    �Pi �&@��Q�\`�Q��Q� i    ��Q��Q��Q�\`i�i  �G4�Q�@i    �ii �G4�Q� i    �ii �G4�Q�i �Pii    �G4i    �ii �M�Q
[Truncated]
*/
`,
explanation: '',
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp2',
},

{code:
`#include <iostream>
#include <stdexcept>
#include <vector>

int main() {
  try {
    throw std::runtime_error("throwing a proper exception object");
  } catch (std::runtime_error &e) {
    std::cout << e.what() << std::endl;
  }

  try {
    throw "But we can throw anything at all! For example, this is a stirng.";
  } catch (const char *str) {
    std::cout << str << std::endl;
  }

  try {
    throw std::vector<int>({1, 2, 3});
  } catch (std::vector<int> &v) {
    std::cout << "We just threw a vector" << std::endl;
  }

  try {
    throw 17;
  } catch (int num) {
    std::cout << "We just threw an integer" << std::endl;
  }

  return 0;
}
`,
explanation: '',
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp3#',
},
];


const _csharp = [
{code:
`using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var actions = new List<Action>();
        for (int i = 0; i < 5; ++i)
        {
            actions.Add(() => Console.WriteLine($"i = {i}"));
        }

        foreach (var action in actions)
        {
            action();
        }
    }
}
// output:
// i = 5
// i = 5
// i = 5
// i = 5
// i = 5
`,
explanation: '',
credit: 'hobovsky',
runLink: '',
},
];


const _fsharp = [
{code:
`module Example

let () =
  let array = [| 1, 2, 3 |]
  let len = array.Length
  printfn "Length of array is: %A" len // Length of array is: 1
`,
explanation:
<>Elements of an array are separated by <code>;</code> in F#.<br/>
<code>,</code> separates elements of a tuple and parentheses are optional for tuples. 
</>,

credit: 'monadius',
runLink: 'https://replit.com/@EloiseRosen/WTFSfsharp1#main.fs',
},
];


const _haskell = [
{code:
`module Main where

main :: IO ()
main = do
  print (minimum (3, 5)) -- 5

  print (length (3, 5)) -- 1. wait what

  print (minimum ("huh?", 5)) -- 5
`,
explanation:
<>
In Haskell, there's an instance of <code>Foldable</code> for the partially applied tuple type <code>(,) a</code>.  In other words, for the purposes of <code>maximum</code>, <code>length</code>, etc., a tuple <code>(a, b)</code> is considered a container with only one element <code>b</code>. The <code>a</code> is unused in this case.
<br />
The correct code is <code>min 3 5</code> using the two-parameter <code>min</code> function, or <code>minimum [3, 5]</code> using a list.
</>,
credit: 'dram',
runLink: 'https://replit.com/@EloiseRosen/WTFSHaskell1#Main.hs',
},
];


const _java = [
{code:
`public class Main {
    public static void main(String[] args) { 
        printEq(100, 100);
        printEq(200, 200);
    }
    public static void printEq(Integer a, Integer b) {
        if (a == b) {
            System.out.printf("%d == %d%n", a, b);
        } else {
            System.out.printf("%d != %d%n", a, b);
        }
    }
}
// output:
// 100 == 100
// 200 != 200
`,
explanation: '',
credit: 'hobovsky',
runLink: '',
},

{code:
`public class Main {
    public static void main(String[] args) {
        
        String[] strings = new String[] {"A", "B", "C"};
        printLen(strings);
        printLen("A", "B", "C");
        
        int[] ints = new int[] {1, 2, 3};
        printLen(ints);
        printLen(1, 2, 3);
    }
    
    public static <T> void printLen(T... args) {
        System.out.printf("Number of args is %d%n", args.length);
    }
}
// output:
// Number of args is 3
// Number of args is 3
// Number of args is 1
// Number of args is 3
`,
explanation: '',
credit: 'hobovsky',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`public class Main {
    public static void main(String[] args) {
        char c = 'c';
        System.out.printf("++c is %s%n", ++c);
        System.out.printf("c+1 is %s%n", c+1);
    }
}
// output is: 
// ++c is d
// c+1 is 101
`,
explanation: '',
credit: 'hobovsky',
runLink: '',
},

{code:
`class TopBase {}

class DerivedA extends TopBase { }

class DerivedB extends TopBase { }

class Main {
  private static void overloadedMethod(TopBase t) {}
  
  // The current state is ok! 
  // but if you uncomment the method below you get a compilation error.
  // private static void overloadedMethod(DerivedA a) {}
  private static void overloadedMethod(DerivedB b) {}
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    overloadedMethod(null);
  }
}
`,
explanation:
<>
Java compiler always takes the most specific method if possible. Since <code>null</code> can be 
assigned to any class and <code>DerivedB</code> is a subclass of <code>TopBase</code>, the 
<code>DerivedB</code> overload is chosen.<br/>
If you uncomment the <code>DerivedA</code> overload you end up with two overloads on the same 
class hierarchy level so the call is ambiguous.<br/>
To solve this, you explicitly have to cast the <code>null</code> to the type of the desired overload.
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava5#',
},
];


const _javaScript = [
{code:
`let arr = [1, 2, 3, 100];
arr.sort();
console.log(arr); // [1, 100, 2, 3]
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`console.log(parseInt(.000003)); // 0
console.log(parseInt(.0000003)); // 3
`,
explanation:
<>
<code>parseInt</code> expects a string. If you pass something that's not a string, it will attempt to convert your argument to a string for you. In the case of the second example, the result is <code>"3e-7"</code>. Then <code>parseInt</code> goes from the start of the string and collects characters which can be interpreted as integer, which gives the number <code>3</code>.
</>,

credit: 'Madjosz',
runLink: '',
},

{code:
`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1 + arr2;
console.log(arr3, typeof arr3); // 1,2,34,5,6 string
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`throw new Error('I am throwing an error like a proper language.');

throw 'I am throwing not an error but a STRING. There will be no stack trace.';

throw {'in fact': 'I can', 'throw': 'anything at all'};
throw true;
throw new RegExp('ahhhhh', 'i');
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`let arr = [];
const thing = arr.pop(); // no error D:
console.log(thing); // undefined
console.log(arr); // []
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`// Doesn't follow transitive law (if a is equal to b and b is equal to c, then
// a is equal to c):
console.log('0' == 0); // true
console.log(0 == []); // true
console.log('0' == []); // false


// See also:
console.log('2' < 12) // true
console.log(12 < '13') // true
console.log('2' < '13') // false
`,
explanation:
<>
First example:
<br/>
In <code>'0' == 0</code>, the <code>'0'</code> gets converted to a number, and <code>0</code> does equal <code>0</code>, so this gives <code>true</code>. 
In <code>0 == []</code>, the <code>[]</code> first gets converted to a string, <code>''</code>, which gets converted to a number, <code>0</code>. <code>0</code> does equal <code>0</code>, so this gives <code>true</code>. 
In <code>'0' == []</code>, the <code>[]</code> first gets converted to a string, <code>''</code>, as before. We then compare the string <code>'0'</code> with the string <code>''</code>, which are not the same value, so this gives <code>false</code>. 
<br/><br/>
Second example:
<br/>
When comparing a string and a number, the string first gets converted to a number. <code>2 &lt; 12</code> is <code>true</code> and <code>12 &lt; 13</code> is <code>true</code>.
However, when 2 strings are compared, the comparison is done lexicographically, in which case <code>'2'</code> comes after <code>'13'</code>.
</>,
credit: 'dram',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`let arr = [undefined, undefined, undefined];
console.log(arr[10]); // undefined, no error
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`let string = 'bob';
string[1] = 'X'; // no error, just silently ignored
console.log(string); // bob
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`function printLetter(letter) {
    arguments[0] = 'b'; // you can do this
    console.log(letter);
}
printLetter('a'); // b
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`let obj = {name: 'bob', age: 42};
console.log(obj.thisDoesNotExist); // no error, undefined
delete obj.thisAlsoDoesNotExist; // no error, just silently ignored








`,
explanation: '',
credit: '',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`const date = new Date(2020, 1, 1);
console.log(date.toString()); // Sat Feb 01 2020...
// year is 1-indexed, day is 1-indexed, month is ZERO-indexed
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`function test(firstName='Bob', age=42) {
    console.log('first name is ' + firstName);
    console.log('age is ' + age);
}

test(age=12, firstName='Jimothy');
// first name is 12
// age is Jimothy
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`console.log(Array(-3)); // RangeError: Invalid array length
console.log(Array.from({length: -3})); // []
`,
explanation: '',
credit: 'Kacarott',
runLink: '',
},

];


const _prolog = [
{code:
`is_three(3).

?- is_three(3) % true
?- X is 1 + 2; is_three(X) % true
?- is_three(1 + 2) % false !?!
`,
explanation:
<>
<code>+</code> (and other mathematical operations) do not have any special meaning by themselves. 
They merely build a term (eg. <code>1 + 2</code> -&gt; <code>+(1, 2)</code>). This term can be 
evaluated by <code>is</code> or <code>=:=</code>. But alone, <code>+(1, 2)</code> is not the same as <code>3</code> and 
so does not match the predicate <code>is_three</code>.
</>,
credit: 'Kacarott',
runLink: 'https://replit.com/@EloiseRosen/WTFSProlog1#main.sh',
},
];


const _python = [
{code:
`def add_item_to_list(item, lst=[]):
    lst.append(item)
    return lst

print(add_item_to_list(1))  # [1]
print(add_item_to_list(1))  # [1, 1]
`,
explanation:
<>
Mutable default arguments don't get re-initialized with each function call. Rather, the same <code>lst</code> is used each time the function is called without a second argument.
</>,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython1',
},

{code:
`lst = ['a', 'b', 'c']
for i in range(0, len(lst)):
    lst[i] = lst[i].upper()
print(lst)  # ['A', 'B', 'C']
print(i)  # 2, leaks out of loop
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`arr = [lambda: print(i) for i in range(2)]
print(arr)  # [<function <listcomp>.<lambda> at [address]>, <function <listcomp>.<lambda> at [different address]>]
arr[0]()  # prints 1
arr[1]()  # prints 1
`,
explanation: '',
credit: 'Madjosz',
runLink: '',
},

{code:
`list1 = [1, 2, 3, 4]
list2 = ['a', 'b', 'c']

for pair in zip(list1, list2):
    print(pair)
# (1, 'a')
# (2, 'b')
# (3, 'c')
# when there's a mismatch in length, zip silently truncates with no error or warning
`,
explanation: '',
credit: '',
runLink: '',
},
];


const _r = [
{code:
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
explanation: '',
credit: '',
runLink: '',
},

{code:
`print(all.equal(1, 1)) # returns the boolean TRUE 
print(all.equal(1, 2)) # does not return FALSE! Instead returns a string, "Mean relative difference: 1"
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`nums <- c(1:5)
print(nums) # 1 2 3 4 5

keep <- c(TRUE, FALSE, FALSE, FALSE) # note mistake in length (4 instead of 5)
print(keep) # TRUE FALSE FALSE FALSE

final <- nums[keep]
print(final)  # 1 5
# if there's a mismatch in vector length, we just silently cycle back through with 
# no error or warning
`,
explanation: '',
credit: '',
runLink: '',
},

{code:
`vector <- c(NA, NA, NA)
print(vector[10])  # NA, no error`
,
explanation: '',
credit: '',
runLink: '',
},

{code:
`func <- function(allegedly, takes, four, params) {
    print('la la la everything is fine')
    return(allegedly + takes + four)
}
print(func(1, 2, 3))  # 6
# no errors or warnings about arg number
`,
explanation: '',
credit: '',
runLink: '',
},
];


const _ruby = [
{code:
`puts("abc".gsub!("a", "x") == "xbc") # true
puts("abc".gsub!("z", "x") == "abc") # false
`,
explanation: '',
credit: 'hobovsky',
runLink: '',
},
];


const _sql = [
{code:
`-- person table:
-- id   name       gender
-- ---- ---------- -------
-- 1    Bob        M
-- 2    Lucy       F
-- 3    Jimothy    NULL

SELECT * FROM person WHERE gender NOT IN ('M', 'F');  -- returns 0 rows
`,
explanation: '',
credit: '',
runLink: '',
},
];


const examples = { 'Bash': _bash, 'C': _c, 'cpp': _cpp, 'csharp': _csharp, 'fsharp': _fsharp,
  'Haskell': _haskell, 'Java': _java, 'JavaScript': _javaScript, 'Prolog': _prolog, 
   'Python': _python,'R': _r, 'Ruby': _ruby, 'SQL': _sql}
export { examples };
