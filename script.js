let $ = document
let userWeight = $.querySelector('#weight')
let userHeight = $.querySelector('#height')
let weightSpan = $.querySelector('#weight-val')
let heightSpan = $.querySelector('#height-val')
let bmiResult = $.querySelector('#result')
let catagoryEl = $.querySelector('#category')

function bmiCale(){
    
}

userWeight.addEventListener('input', bmiCale)
userHeight.addEventListener('input', bmiCale)