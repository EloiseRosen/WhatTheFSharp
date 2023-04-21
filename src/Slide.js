import React from 'react';

function Slide(props) {
    const examples = [
        `
        console.log(parseInt(.000003)); // 0
        console.log(parseInt(.0000003)); // 3`,

        `
        // doesn't follow transitive law (if a is equal to b and b is equal to c, then a is equal to c)
        console.log("0" == 0); // true
        console.log(0 == []); // true
        console.log("0" == []); // false`,

        `
        let arr = ["It is fun to", 'silently ignore stuff', 'without giving a warning or error'];
        Object.freeze(arr);
        arr[0] = 'apple'; // no warning or error, just silently ignored
        console.log(arr);
        //[ 'It is fun to',
        //  'silently ignore stuff',
        //  'without giving a warning or error' ]`,


        `
        function demoAdditionalParameters() {
            console.log("let's pretend everything is fine");
            console.log(arguments);
        }
        demoAdditionalParameters('random', 'parameters', 'that', 'should', 'not', 'exist');
        // let's pretend everything is fine
        // [Arguments] {
        //  '0': 'random',
        //  '1': 'parameters',
        //  '2': 'that',
        //  '3': 'should',
        //  '4': 'not',
        //  '5': 'exist' }

        function demoMissingParameters(func, uses, four, parameters) {
            console.log('everything also fine here');
            console.log(func, uses, four, parameters)
        }
        demoMissingParameters();
        // everything also fine here
        // undefined undefined undefined undefined`,


        `
        const arr = ['a', 'b', 'c'];
        console.log(arr[10]); // no error, just undefined
        `,

        `
        function printLetter(letter) {
            arguments[0] = 'b';
            console.log(letter);
        }
        printLetter('a');
        `,

        `
        let arr = [];
        thing = arr.pop(); // no error
        console.log(thing); // undefined
        console.log(arr); // []
        `,


        `
        let arr = [1, 2, 3, 100];
        arr.sort();
        console.log(arr); // [1, 100, 2, 3]
        `,


        `
        throw new Error('I am throwing an error like a proper language');

        throw 'I am throwing not an error but a STRING. There will be no stack trace.';

        throw {'in fact': 'I can', 'throw': 'anything at all'};
        throw true;
        throw new RegExp('abc', 'i');
        `,


        `
        let arr = ['you can change', 'the array', 'via', 'the length property'];
        arr.length = 1;
        console.log(arr); // [ 'you can change']
        arr.length = 10;
        console.log(arr); // [ 'you can change', <9 empty items> ]
        delete arr.length; // no error, just silently ignored
        console.log(arr); // [ 'you can change', <9 empty items> ]
        arr.length = null; // no error
        console.log(arr); // []
        `

    ];



  return (
    <div className="slide-container">
        <p className="slide-num"># {props.slideNum}</p>
        <div className="example-container">
            <p><pre>{examples[props.slideNum-1]}</pre></p>
        </div>
        <ul className='nav-slides'>
            <li key='prev' onClick={() => props.onPrevClick(props.slideNum)}>prev</li>
            <li key='next' onClick={() => props.onNextClick(props.slideNum)}>next</li>
        </ul>
  </div>
  );
}

export default Slide;