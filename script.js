// console.log("Hi Rabbit 🐰")

const height = prompt("Enter the height:");
const hiinm = height / 100;
const wight = prompt("Enter the wight:");

const bmi = wight / (hiinm * hiinm).toFixed(3);

if (bmi && bmi > 0) {
    if (bmi < 18.5) console.log('Underweight');
    else if (bmi >= 18.5 && bmi <= 24.9) console.log('Normal Weight');
    else if (bmi > 25 && bmi <= 29.9) console.log('Overweight');
    else if (bmi > 30 && bmi <= 34.9) console.log('Obesity Level I');
    else if (bmi > 35 && bmi <= 39.9) console.log('Obesity Level II');
    else if (bmi >= 40) console.log('Obesity Level III');
}

