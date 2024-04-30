
const  holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log(holidays)

// for文

let n

for ( n = 0; n < 16; n++) {
    console.log(holidays[n])
    
}

// while文


let i = 0;
while (holidays[i] != "勤労感謝の日") {
    if (holidays[i] != "文化の日") {
        console.log(holidays[i])
        i++
    }
    else{
        console.log(holidays[i])
        i++
        console.log(holidays[i])
    }
}







