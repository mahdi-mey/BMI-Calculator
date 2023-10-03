let $ = document
let userWeight = $.querySelector('#weight')
let userHeight = $.querySelector('#height')
let weightSpan = $.querySelector('#weight-val')
let heightSpan = $.querySelector('#height-val')
let bmiResult = $.querySelector('#result')
let catagoryEl = $.querySelector('#category')

function bmiCale(){
    let weightValue = userWeight.value;
    let heightValue = userHeight.value;

    weightSpan.innerHTML = weightValue + ` kg`
    heightSpan.innerHTML = heightValue +  ` cm`

    let bmiValue = (weightValue / (Math.pow(heightValue/100, 2))).toFixed(1)
    bmiResult.innerHTML = bmiValue

    if(bmiValue < 18.5){
        catagoryEl.innerHTML = 'Under Weight'
        bmiResult.style.color = '#ffc44d'
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        catagoryEl.innerHTML = 'Normal Weight'
        bmiResult.style.color = '#0be881'
    }
    else if(bmiValue >= 25 && bmiValue < 24.9){
        catagoryEl.innerHTML = 'Over Weight'
        bmiResult.style.color = '#ff884d'
    }
    else{
        catagoryEl.innerHTML = 'Obese'
        bmiResult.style.color = '#ff5e4d'
    }

}

userWeight.addEventListener('input', bmiCale)
userHeight.addEventListener('input', bmiCale)