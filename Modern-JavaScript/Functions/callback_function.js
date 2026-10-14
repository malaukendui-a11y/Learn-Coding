// callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc (value => {
    // do something
    console.log(value);
});

// let people = ["kenny", "rangga", "fadlan", "rafi", "akmalbon"];