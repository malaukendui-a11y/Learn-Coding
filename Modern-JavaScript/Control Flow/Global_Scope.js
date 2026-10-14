// variables & block scope
const umur = 30;


if(true){
    const umur = 40;
    const nama = "kenny";
    console.log("inside 1st code block: ", umur, nama);

    if(true){
        const umur = 50;
        console.log("inside 2nd code block ", umur);
        var test = "hello";
    }
}

console.log("outside code block: ", umur, nama, test);  