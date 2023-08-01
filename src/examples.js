// The explanation property is JSX or null, the other properties are string
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
explanation: null,
credit: 'jakkals',
runLink: 'https://replit.com/@EloiseRosen/WTFSBash1#main.sh',
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
explanation:
<>
This is equivalent to <code>1+5*8+1</code>. Multiplication is performed before addition, giving <code>42</code>. <br/> <br/>
If we had instead used <code>#define SIX (1+5)</code> and <code>#define NINE (8+1)</code> (note the parentheses), the output would be <code>54</code> as expected.
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSC1#main.c',
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
dcba�Q�hh@\`�Q�hM\`�L��Q�W�Q�M\`��i    �j��Q�WF��Q�M\`�M\`�M\`�A��@Ml�i  �h�Q�X(}X6ds�(}X6ds�(}X6ds���!��8i    �i�i�u��Q�i �i  �Ni �4@�Q�W�?|wn]@��0��)�g@ �ͩAi �Z�i    �i  �i  �2�Q�Xi �i  ��i �*��Q�i �*�i   ��Q�i    �Pi �i  ��i �li �#i ���Q�i  �+Xi    ��Q�i   �Pi �>Pi    ���Q��=��i  ��Q�@�Q�0i  �0i �   i   ��i �Qi �i  �i  �i  ���Q�Xg�_i  �P�i�0�Q�x�Q�0�Q�@�Q�t�ii   ��g�_i  ��Q�t�Q�xi  �Pi �&@&i   �i  �&@i   �Pi  �
�i  �i  ��Q�i   �i  �i  �&@i    �Pi �&@��Q�\`�Q��Q� i    ��Q��Q��Q�\`i�i  �G4�Q�@i    �ii �G4�Q� i    �ii �G4�Q�i �Pii    �G4i    �ii �M�Q
[Truncated]
*/
`,
explanation: 
<>
<code>str.length()</code> has type <code>std::string::size_type</code>, which is usually an unsigned integer. This means that the loop counter overflows back to a large positive value without ever going negative, looping forever and reading bytes from who-knows-where. But if you turn on compiler warnings it'll usually tell you <code>idx &gt;= 0</code> is always <code>true</code>, pointing at this issue.
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp2#main.cpp',
},

{code:
`#include <map>
#include <string>
#include <iostream>

using namespace std;


int main() {

    map<string, int> cache { { "A", 42 }, { "B", 13 }, { "Z", 7 }, { "D", 0 } };
    cout << "Cache size is " << cache.size() << '\\n';

    cout << "A = " << cache["A"] << ", ";
    cout << "B = " << cache["B"] << ", ";
    cout << "C = " << cache["C"] << ", ";
    cout << "D = " << cache["D"] << '\\n';

    cout << "Cache size is " << cache.size() << '\\n';
    
}
// output:
// Cache size is 4
// A = 42, B = 13, C = 0, D = 0
// Cache size is 5
`,
explanation:
<>
Reading with the <code>[]</code> operator inserts a new element if the key doesn't exist.
</>
,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp3#',
},

{code:
`#include <iostream>
#include <stdexcept>
#include <vector>

int main() {
  try {
    throw std::runtime_error("We are throwing a proper exception object.");
  } catch (std::runtime_error &e) {
    std::cout << e.what() << std::endl;
  }

  try {
    throw "But we can throw anything at all! For example, this is a string.";
  } catch (const char *str) {
    std::cout << str << std::endl;
  }

  try {
    throw std::vector<int>({1, 2, 3});
  } catch (std::vector<int> &v) {
    std::cout << "We just threw a vector." << std::endl;
  }

  try {
    throw 17;
  } catch (int num) {
    std::cout << "We just threw an integer." << std::endl;
  }

  return 0;
}

// output:
// We are throwing a proper exception object.
// But we can throw anything at all! For example, this is a string.
// We just threw a vector.
// We just threw an integer.
`,
explanation: null,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp4#main.cpp',
},

{code:
`#include <map>
#include <string>
#include <iostream>

using namespace std;

const map<string, int> precomputed { { "A", 42 }, { "B", 13 }, { "Z", 7 } };

int main() {
  cout << precomputed["A"];
}

/* Result is confusing compilation error:
./src/main.cpp: In function ‘int main()’:
./src/main.cpp:10:26: error: passing ‘const std::map<std::__cxx11::basic_string<char>, int>’ as ‘this’ argument discards qualifiers [-fpermissive]
   10 |   cout << precomputed["A"];
      |                          ^
In file included from /nix/store/1gf2flfqnpqbr1b4p4qz2f72y42bs56r-gcc-11.3.0/include/c++/11.3.0/map:61,
                 from ./src/main.cpp:1:
/nix/store/1gf2flfqnpqbr1b4p4qz2f72y42bs56r-gcc-11.3.0/include/c++/11.3.0/bits/stl_map.h:512:7: note:   in call to ‘std::map<_Key, _Tp, _Compare, _Alloc>::mapped_type& std::map<_Key, _Tp, _Compare, _Alloc>::operator[](std::map<_Key, _Tp, _Compare, _Alloc>::key_type&&) [with _Key = std::__cxx11::basic_string<char>; _Tp = int; _Compare = std::less<std::__cxx11::basic_string<char> >; _Alloc = std::allocator<std::pair<const std::__cxx11::basic_string<char>, int> >; std::map<_Key, _Tp, _Compare, _Alloc>::mapped_type = int; std::map<_Key, _Tp, _Compare, _Alloc>::key_type = std::__cxx11::basic_string<char>]’
  512 |       operator[](key_type&& __k)
      |       ^~~~~~~~
*/
`,
explanation:
<>
(The actual issue here is that <code>precomputed</code> is <code>const</code>, so we can't use the <code>[]</code> operator as it will insert a new element if the key is not found.)
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScpp5#src/main.cpp',
},

{code:
`#include <iostream>

int main() {
    while (true) {}
    return 0;
}

void unreachable() {
    std::cout << "Hello, world!\\n";
}

// output: Hello, world!
`,
explanation:
<>
Infinite loops without side effects are Undefined Behavior in C++. Clang starting with version 13 optimizes the loop away with compiler optimizations activated.<br/>
Furthermore the <code>return 0;</code> is seen as unreachable because of the infinite loop, thus also not compiled into the binaries.<br/>
This leaves the <code>main()</code> function with a completely empty body in the assembly and a call to it will directly fall through to the assembly of the <code>unreachable() </code>function, printing <code>"Hello, world!\n"</code>.<br/>
(This does not happen with GCC compiler.)
</>,
credit: 'Madjosz',
runLink: 'https://godbolt.org/z/54ETMehT9',
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
explanation: 
<>
When <code>() =&gt; Console.WriteLine($"i = {"{"}i{"}"}")</code> is added to the <code>actions</code> list, it doesn't use the value of <code>i</code> at that moment, but rather creates a reference to <code>i</code>. By the time the <code>foreach</code> loop runs, <code>i</code> has been incremented to <code>5</code>. 
</>
,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFScsharp1#main.cs',
},
];


const _elixir = [
{code:
`defmodule Compare do
  def example() do
    fn -> :ok end
  end
end

# is 9917 less than the example function?
IO.puts 9917 < Compare.example # true! 

# I heard you like symbols
IO.puts :*<&(&1) # true
`,
explanation: 
<>
Elixir allows comparisons across data types, and uses the following ordering:<br/>
<code>number &lt; atom &lt; reference &lt; function &lt; port &lt; pid &lt; tuple &lt; map &lt; list &lt; bitstring</code>
<br/>
Since <code>number</code> is less than <code>function</code>, the first example is <code>true</code>.
<br/><br/>

In the second example, <code>:*</code> is an <code>atom</code>, and <code>&(&1)</code> is the identity function expressed as a lambda. (<code>&</code> creates an anonymous function, and <code>&1</code> represents its first argument, so <code>&(&1)</code> just returns its argument.) <code>Atoms</code> are <code>&lt;</code> <code>functions</code>, so this is <code>true</code>.
</>
,
credit: 'Bruno Parga',
runLink: 'https://replit.com/@EloiseRosen/WTFSElixir1#main.exs',
},
];


const _erlang = [
{code:
`-module(main).
-import(io,[fwrite/1]).
-export([start/0]).

start() ->
   fwrite(99999999999999 < "0"). % true
`,
explanation: 
<>
Erlang allows comparisons across data types, and uses the following ordering:<br/>
<code>number &lt; atom &lt; reference &lt; function &lt; port &lt; pid &lt; tuple &lt; map &lt; list &lt; bitstring</code>
</>
,
credit: 'Bruno Parga',
runLink: 'https://replit.com/@EloiseRosen/WTFSErlang1#main.erl',
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

{code:
`module Main where

main :: IO ()
main = do
  print ([0, 10 .. 29] :: [Integer]) -- [0,10,20]
  print ([0.0, 10.0 .. 29.0] :: [Double]) -- [0.0,10.0,20.0,30.0]
`,
explanation:
<>
When using floating point, the end point is bumped by half of the step size. The intention is that if you write something like <code>[0.1, 0.2 .. 1.0]</code>, the last element doesn't get missed due to rounding. 
</>,
credit: 'dram',
runLink: 'https://replit.com/@EloiseRosen/WTFSHaskell2#Main.hs',
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
explanation:
<>
Using <code>==</code> to compare <code>Integer</code> objects can lead to unexpected results because <code>==</code> will compare object references rather than the values themselves.
The <code>Integer</code> class keeps a cache of the <code>Integer</code> instances between <code>-128</code> and <code>127</code>.  <code>==</code> on the same numbers evaluates to <code>true</code> within this range and <code>false</code> otherwise.
Using <code>a.equals(b)</code> gives the expected result.
</>
,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava1#Main.java',
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
explanation: 
<>
You can call varargs methods with an array or separate arguments which will be packed into an array. Generics can only take reference types and no primitives. While this works with <code>String</code>, <code>T</code> cannot be inferred to <code>int</code> and <code>T</code> ends up being <code>int[]</code>. So the argument is an array with an array as first and only element. The fourth call instead autoboxes all <code>int</code>s to <code>Integer</code>, allowing generics.
</>
,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava2#Main.java',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava3#Main.java',
},

{code:
`public class Main {
    public static void main(String[] args) {
        char c = 'c';
        System.out.printf("++c is %s%n", ++c);
        System.out.printf("c+1 is %s%n", c+1);
    }
}
// output: 
// ++c is d
// c+1 is 101
`,
explanation:
<>
Doing an arithmetic operation such as <code>+1</code> on a <code>char</code> causes "type promotion" and the <code>char</code> will be promoted to <code>int</code>. Type promotion doesn't happen with the increment operator (<code>++</code>).
<br/>
The variable <code>c</code> has the value <code>'d'</code> after the <code>++</code>. Then <code>'d'</code> is converted to the <code>int 100</code> (its Unicode value) through type promotion. Then <code>1</code> is added, giving <code>101</code>.
</>
,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava4#Main.java',
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
assigned to any class and <code>DerivedB</code> is a subclass of <code>TopBase</code>, the <code>DerivedB</code> overload is chosen.<br/>
If you uncomment the <code>DerivedA</code> overload you end up with two overloads on the same 
class hierarchy level so the call is ambiguous.<br/>
To solve this, you explicitly have to cast the <code>null</code> to the type of the desired overload.
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava5#Main.java',
},

{code:
`class Main {
    public static void main(String[] args) {
      System.out.println("ABCD" == "ABCD");
      System.out.println("AB" + "CD" == "ABC" + "D");
      System.out.println("ABCD" == "abcd".toUpperCase());
      
      String string1 = new StringBuilder("AB").append("CD").toString();
      String string2 = new StringBuilder("ABC").append("D").toString();
      System.out.println(string1 == string2);
    }
  }

// output:
// true
// true
// false
// false
`,
explanation: 
<>
The <code>==</code> operator compares object references rather than the values themselves.
<br/><br/>
In <code>"AB" + "CD" == "ABC" + "D"</code>, concatenation happens at compile time and the results are interned.
<br/><br/>
<code>"ABCD" == "abcd".toUpperCase()</code> gives <code>false</code> because at runtime <code>"abcd".toUpperCase()</code> will create a new <code>String</code> object, and these two strings will be different instances.
<br/><br/>
Similarly, <code>string1 == string2</code> gives <code>false</code> because <code>new StringBuilder("AB").append("CD").toString()</code> and <code>new StringBuilder("ABC").append("D").toString()</code> create new <code>String</code> objects at runtime.
<br/><br/>
Using <code>a.equals(b)</code> rather than <code>a == b</code> gives the expected result.
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSJava6#Main.java',
},
];


const _javaScript = [
{code:
`let arr = [1, 2, 3, 100];
arr.sort();
console.log(arr); // [1, 100, 2, 3]
`,
explanation:
<>
If no function is passed to define the sort order, JavaScript converts each array element to <code>string</code> and sorts them lexicographically.
</>
,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript1#index.js',
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
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript2#index.js',
},

{code:
`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1 + arr2;
console.log(arr3, typeof arr3); // 1,2,34,5,6 string
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript3#index.js',
},

{code:
`try {
  throw new Error('I am throwing an error like a proper language.');
} catch (error) {
  console.error('Error message:', error.message); // Error message: I am throwing an error like a proper language.
  console.error('Stack trace:', error.stack); // Stack trace: Error:... at Object.<anonymous> (/home/runner/folder/file.js:2:9) ...
}

try {
  throw 'I am throwing not an error but a STRING. There will be no stack trace.';
} catch (error) {
  console.error(error); // I am throwing not an error but a STRING. There will be no stack trace.
  console.error(error.message); // undefined
  console.error(error.stack); // undefined
}

try {
  throw {'in fact': 'I can', 'throw': 'anything at all'};
} catch (error) {
  console.error(error); // { 'in fact': 'I can', throw: 'anything at all' }
}

try {
  throw new RegExp('ahhhhh', 'i');
} catch (error) {
  console.error(error); // /ahhhhh/i
}
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript4#index.js',
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
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript5#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript6#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript7#index.js',
},

{code:
`let arr = [undefined, undefined, undefined];
console.log(arr[10]); // undefined, no error
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript8#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript9#index.js',
},

{code:
`let string = 'bob';
string[1] = 'X'; // no error, just silently ignored
console.log(string); // bob
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript10#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript11#index.js',
},

{code:
`function printLetter(letter) {
    arguments[0] = 'b'; // you can do this
    console.log(letter);
}
printLetter('a'); // b
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript12#index.js',
},

{code:
`let obj = {name: 'bob', age: 42};
console.log(obj.thisDoesNotExist); // no error, undefined
delete obj.thisAlsoDoesNotExist; // no error, just silently ignored








`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript13#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript14#index.js',
},

{code:
`const date = new Date(2020, 1, 1);
console.log(date.toString()); // Sat Feb 01 2020...
// year is 1-indexed, day is 1-indexed, month is ZERO-indexed
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript15#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript16#index.js',
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
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript17#index.js',
},

{code:
`console.log(Array(-3)); // RangeError: Invalid array length
console.log(Array.from({length: -3})); // []
`,
explanation: null,
credit: 'Kacarott',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript18#index.js',
},

{code:
`console.log(['1', '2', '3', '4'].map(x => parseInt(x))); // [ 1, 2, 3, 4 ]
console.log(['1', '2', '3', '4'].map(parseInt)); // [ 1, NaN, NaN, NaN ]
`,
explanation:
<>
<code>map</code>'s callback is called with three arguments: the element, the index, and the array itself. In the first example, we use only one argument, the element, so the result is as expected. However, <code>parseInt</code> can actually take two arguments, the second being radix. In the second example, the element's index gets passed to <code>parseInt</code> as radix. (And the radix of <code>0</code> gets treated as a radix of <code>10</code>.)
</>,
credit: 'Lawrence Kesteloot',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript19#index.js',
},

{code:
`// array with 2 elements:
[
  [[[48,36,124],[201,23,247],[150,162,177]]],
  [[[69,69,69],[157,157,157],[163,163,163]]],
]

// array with 1 element (undefined):
[
  [[[48,36,124],[201,23,247],[150,162,177]]]
  [[[69,69,69],[157,157,157],[163,163,163]]]
]
`,
explanation: null,
credit: 'NunoOliveira',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript20#index.js',
},

{code:
`const doSomething = 2
["print", "string", "with its index"].forEach((s, i) => {
  console.log(s, i)
})
// TypeError: Cannot read properties of undefined (reading 'forEach')
`,
explanation: 
<>
Automatic Semicolon Insertion doesn't put a semicolon between the two statements. This code is interpreted as <code>const doSomething = 2["print", "string", "with its index"].forEach((s, i) =&gt; console.log(s, i))</code>.
</>,
credit: 'Blind4Basics',
runLink: 'https://replit.com/@EloiseRosen/WTFSJavaScript21#index.js',
},
];


const _php = [
{code:
`<?php
echo (true ? 'expected' : false ? 'actual' : 'x'); // actual
?>
`,
explanation: 
<>
In PHP, the ternary operator is left-associative.
</>,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP1#main.php',
},

{code:
`<?php
$date = new DateTime('now');
echo $date->format(DateTime::ISO8601); // DateTime::ISO8601 doesn't follow ISO8601
?>
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP2#main.php',
},

{code:
`<?php
var_dump(NULL == 0); // bool(true)
var_dump(NULL < -1); // bool(true)
var_dump(NULL < 0); // bool(false)
?>
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP3#main.php',
},

{code:
`<?php
function extraArgs() {
  echo 'PHP will simply ignore the extra arguments, no warning or error';
}
extraArgs('these', 'parameters', 'should', 'not', 'exist');
?>
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP4#main.php',
},

{code:
`<?php
$arr = [1, true];
echo 'example 1:' . PHP_EOL;
foreach ($arr as $el) {
    echo 'item: ' . $el . PHP_EOL;
}

$arr = ['', false, null];
echo 'example 2:' . PHP_EOL;
foreach ($arr as $el) {
    echo 'item: ' . $el . PHP_EOL;
}

// output:
// example 1:
// item: 1
// item: 1
// example 2:
// item: 
// item: 
// item:
?>
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP5#main.php',
},

{code:
`<?php
// Doesn't follow transitive law (if a is equal to b and b is equal to c, then
// a is equal to c):
var_dump(true == 'bob') . PHP_EOL; // bool(true)
var_dump('bob' == 0) . PHP_EOL; // bool(true)
var_dump(true == 0) . PHP_EOL; // bool(false)
?>
`,
explanation:
<>
1. When a boolean and string are compared, the string is converted to a boolean. Non-empty strings become <code>true</code>, so the first statement evaluates to <code>true</code>.
<br/>
2. When a string and number are compared, the string is converted to a number. The string becomes <code>0</code> if it doesn't have numbers in it, so the second statement evaluates to <code>true</code>.
<br/>
3. <code>0</code> becomes <code>false</code>, so <code>true == false</code> evaluates to <code>false</code>.
</>
,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP6#main.php',
},

{code:
`<?php
$arr = [1, 2, 3];
foreach ($arr as &$el) {
  echo $el;
} // 123

foreach ($arr as $el) {
  echo $el;
} // 122
?>
`,
explanation:
<>
The <code>&</code> symbol gives us a reference to each element (rather than a copy). When we start the second loop, <code>$el</code> is still a reference (to the last element in the array). If you do <code>print_r($arr);</code> in the second loop you'll see that each time we go through the loop the last array element gets changed along the way to the current element's value (1, then 2, until finally we print the last element, which is then 2). 
</>
,
credit: 'Madjosz',
runLink: 'https://replit.com/@EloiseRosen/WTFSPHP7#main.php',
},
]


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
runLink: 'https://swish.swi-prolog.org/p/Prolog_WTF%231.pl?q=is_three(1%20%2b%202)',
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
runLink: 'https://replit.com/@EloiseRosen/WTFSPython1#main.py',
},

{code:
`lst1 = []
lst2 = []
print(lst1 is lst2)  # False

lst1 = [1, 2]
lst2 = [1, 2]
print(lst1 is lst2)  # False

r = range(10)
lst1 = list(r)
lst2 = list(r)
print(lst1 is lst2) # False

t1 = tuple()
t2 = tuple()
print(t1 is t2)  # True

t1 = (1, 2)
t2 = (1, 2)
print(t1 is t2)  # True

r = range(10)
t1 = tuple(r)
t2 = tuple(r)
print(t1 is t2) # False
`,
explanation:
<>
<code>Tuple literals</code> are cached when running from a file. (This isn't true in REPL.)
</>,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython2#main.py',
},

{code:
`lst = ['a', 'b', 'c']
for i in range(0, len(lst)):
    lst[i] = lst[i].upper()
print(lst)  # ['A', 'B', 'C']
print(i)  # 2, leaks out of loop
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython3#main.py',
},

{code:
`arr = [lambda: print(i) for i in range(2)]
print(arr)  # [<function <listcomp>.<lambda> at [address]>, <function <listcomp>.<lambda> at [different address]>]
arr[0]()  # prints 1
arr[1]()  # prints 1
`,
explanation:
<>
The <code>lambda</code> function captures the variable <code>i</code> by reference, not by its value at the moment the <code>lambda</code> was defined. After the loop completes, <code>i</code> is <code>1</code>.
</>,
credit: 'Madjosz',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython4#main.py',
},

{code:
`>>> a = 256
>>> b = 256
>>> a is b
True
>>> a = 257
>>> b = 257
>>> a is b
False
>>> a = 257; b = 257
>>> a is b
True
`,
explanation:
<>
<code>Int</code> objects up to <code>256</code> are created and cached by Python. In the third example, the interpreter notices the same number being used and so creates only one object, while in the second example they are declared seperately so they are seperate objects.
(If you were to run this in a single file and execute all at once, the second example would actually be <code>True</code>.)
</>,
credit: 'Kacarott',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython5#main.py',
},

{code:
`print(all([]))  # True
print(all([[]]))  # False 
print(all([[[]]]))  # True
`,
explanation:
<>
The first statement is a vacuous truth.
<br/><br/>
<code>all([[]])</code> iterates over every element of the outer list, which has exactly one element, the empty list, which is falsy in Python.
<br/><br/>
<code>all([[[]]])</code> also iterates over every item in the outer list. The outer list is a one-element list. Since <code>[[]]</code> is not empty (it has one element), it's truthy in Python.
</>
,
credit: 'Jai Dhyani',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython6#main.py',
},

{code:
`print(1 < 3 in [3, 4, 5])  # True
print((1 < 3) in [3, 4, 5])  # False
print(1 < (3 in [3, 4, 5]))  # False
`,
explanation:
<>
The first statement is equivalent to <code>1 &lt; 3 and 3 in [3, 4, 5]</code>.
</>
,
credit: 'dram',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython7#main.py',
},

{code:
`xs = [0, 1, 2]
xs[-1] += xs.pop()
print(xs)  # [0, 4]
`,
explanation:
<>
Think of the second line as <code>xs[-1] = xs[-1] + xs.pop()</code>. <code>xs[-1] + xs.pop()</code> is <code>2 + 2</code>, and the <code>pop</code> makes the list be <code>[0, 1]</code>. So then we have <code>xs[-1] = 4</code> where <code>xs</code> is <code>[0, 1]</code>.
</>
,
credit: 'Unnamed',
runLink: 'https://replit.com/@EloiseRosen/WTFSPython8#main.py',
},
];


const _r = [
{code:
`# T is a predefined alias for TRUE
print(TRUE == T)  # TRUE
print(identical(T, TRUE))  # TRUE
print(T)  # TRUE

# you can overwrite T with something else
T <- "bob"
print(T)  # "bob"
T <- FALSE
print(T)  # FALSE
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSR1#main.r',
},

{code:
`print(all.equal(1, 1)) # returns the boolean TRUE 
print(all.equal(1, 2)) # does not return FALSE! Instead returns a string, "Mean relative difference: 1"
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSR2#main.r',
},

{code:
`vector <- c(NA, NA, NA)
print(vector[10])  # NA, no error`
,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSR3#main.r',
},

{code:
`func <- function(allegedly, takes, four, params) {
    print('la la la everything is fine')
    return(allegedly + takes + four)
}
print(func(1, 2, 3))  # 6
# no errors or warnings about arg number
`,
explanation: null,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSR4#main.r',
},

{code:
`f <- function(x=1, y=x+1) { 
  x <- 3
  print(paste("x:", x, "y:", y))
}

f()  # x: 3 y: 4
`,
explanation: null,
credit: 'Shaked Koplewitz',
runLink: 'https://replit.com/@EloiseRosen/WTFSR5#main.r',
},
];


const _ruby = [
{code:
`puts("abc".gsub!("a", "x") == "xbc") # true
puts("abc".gsub!("z", "x") == "abc") # false
`,
explanation:
<>
If the first argument isn't found, <code>gsub!</code> returns <code>nil</code>. (<code>gsub</code> with no exclamation mark would return a string.)
</>,
credit: 'hobovsky',
runLink: 'https://replit.com/@EloiseRosen/WTFSRuby1#main.rb',
},

{code:
`puts ['a', 'b', 'c'].size - 1 # 2
puts ['a', 'b', 'c'].size -1 # error: wrong number of arguments (given 1, expected 0)
`,
explanation:
<>
Ruby reads <code>-1</code> (no space) as a negative number, not as a subtraction operation followed by a number. In Ruby you can call a function without parentheses, so the <code>-1</code> gets interpreted as an argument to <code>size</code>, hence the error message that 1 argument was given but 0 were expected.
</>,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSRuby2#main.rb',
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
explanation:
<>
To include <code>NULL</code> results you'd have to do <code>SELECT * FROM person WHERE gender NOT IN ('M', 'F') OR gender IS NULL;</code> or similar.
</>,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSSQL1#main.sql',
},

{code:
`CREATE TABLE person (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE -- note the UNIQUE constraint
);
INSERT INTO person (id, name, email) VALUES (1, 'Bob', 'bob@gmail.com');
INSERT INTO person (id, name, email) VALUES (2, 'Lucy',  NULL);

-- no error, despite UNIQUE constraint on email column
INSERT INTO person (id, name, email) VALUES (3, 'Jimothy', NULL);
`,
explanation:
<>
Because <code>NULL</code> is "the absence of a value", <code>NULL</code>s aren't duplicates of one another.
</>,
credit: '',
runLink: 'https://replit.com/@EloiseRosen/WTFSSQL2#main.sql',
},
];


const examples = { 'Bash': _bash, 'C': _c, 'cpp': _cpp, 'csharp': _csharp, 'Elixir': _elixir, 'Erlang': _erlang, 
  'fsharp': _fsharp, 'Haskell': _haskell, 'Java': _java, 'JavaScript': _javaScript, 'PHP': _php, 'Prolog': _prolog, 
  'Python': _python,'R': _r, 'Ruby': _ruby, 'SQL': _sql}
export { examples };
