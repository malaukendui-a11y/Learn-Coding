// LOgical NOT (!)

// let user = false;

// if (!user){
//     console.log("you must be logged in to continue");
// }

// console.log(!true);
// console.log(!false);

// Break and Continue

const skor = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < skor.length; i++){

    if (skor[i] === 0){
        continue;
    }

    console.log("Skor anda : ", skor[i]);

    if (skor[i] === 100){
        console.log("Selamat, anda Top Skor Terbaik");
        break;
    }
}