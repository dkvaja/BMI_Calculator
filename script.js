// console.log("Hi Rabbit 🐰")

const setter = (Text, bmi, colorCode) => {
    document.getElementById('result').style.backgroundColor = colorCode;
    document.getElementById('result_Text').innerText = ` - ${Text}`;
    document.getElementById('bmi_num').innerHTML = `${bmi} &nbsp;`;
}
const calculateBmi = (event) => {
    event.preventDefault(); //avoid form submission

    const height = document.getElementById('height');
    const weight = document.getElementById('weight');

    if (height.value == 0 || weight.value == 0) alert('Please Enter valid Values!');
    else {
        const heightInMeter = height.value / 100;
        const BMI = (weight.value / (heightInMeter * heightInMeter)).toFixed(3);

        if (BMI < 18.5) setter('Underweight', BMI, '#01b0f1');
        else if (BMI >= 18.5 && BMI <= 24.9) setter('Normal Weight', BMI, '#91d14f');
        else if (BMI > 25 && BMI <= 29.9) setter('Overweight', BMI, '#feff05');
        else if (BMI > 30 && BMI <= 34.9) setter('Obesity Level-I', BMI, "#f99301");
        else if (BMI > 35 && BMI <= 39.9) setter('Obesity Level-II', BMI, '#ff6767');
        else if (BMI >= 40) setter('Obesity Level-III', BMI, 'red');

        // clean up code
        height.value = weight.value = '';
    }
}




