

function tipclick(){

    let fbill = document.querySelector('input#bill')
    let fpeople = document.querySelector('input#people')
    

    const click1 = document.getElementById('five')
    const click2 = document.getElementById('ten')
    const click3 = document.getElementById('fifteen')
    const click4 = document.getElementById('twentyfive')
    const click5 = document.getElementById('fifty')
    const click6 = document.querySelector('input#custom')
    


click1.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople.value == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click1.style.backgroundColor = 'var(--select-color)';
        tip =  Number(bill * (5/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "$  " + tip.toFixed(2);
resT.innerHTML = "$  " + res1.toFixed(2);




}
}
)

click2.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click2.style.backgroundColor = 'var(--select-color)';
        tip =  Number(bill * (10/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "$  " + tip.toFixed(2);
resT.innerHTML = "$  " + res1.toFixed(2);
}
})

click3.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click3.style.backgroundColor = 'var(--select-color)';
        tip =  Number(bill * (15/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "$  " + tip.toFixed(2);
resT.innerHTML = "$  " + res1.toFixed(2);
}
})


click4.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click4.style.backgroundColor = 'var(--select-color)';
        tip =  Number(bill * (25/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "$  " + tip.toFixed(2);
resT.innerHTML = "$  " + res1.toFixed(2);
}
})

click5.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click5.style.backgroundColor = 'var(--select-color)';
        tip =  Number(bill * (50/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "$  " + tip.toFixed(2);
resT.innerHTML = "$  " + res1.toFixed(2);
}
})


custom.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        tip =  Number(bill * (Number(custom.value)/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "$  " + tip.toFixed(2);
resT.innerHTML = "$  " + res1.toFixed(2);
}
})



}


/*reset button*/

function reset(){
    document.getElementById('bill').value = ''
    document.getElementById('people').value = ''
    document.getElementById('custom').value = ''
    document.getElementById('tip-amount').innerHTML = '$ 0.00'
    document.getElementById('total-person').innerHTML = '$ 0.00'
}


/*changing color theme*/

function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'second-color'){
       setColor('original-color');
   } else {
       setColor('second-color');
   }
}

(function () {
   if (localStorage.getItem('theme') === 'second-color') {
       setColor('second-color');
   } else {
       setColor('original-color');
   }
})();



/* changing only the color of the clicked button */
var currentColor = undefined;

document.querySelectorAll('.select-tip')
    .forEach(s => s.addEventListener('click', function(event) {
        if (s == currentColor) return; 
        if (currentColor) currentColor.style.backgroundColor = 'var(--button-color)';
        s.style.backgroundColor = 'var(--select-color)';
        currentColor = s;
    })
);
