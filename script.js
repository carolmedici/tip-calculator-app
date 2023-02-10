

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
        click1.style.backgroundColor = '#26C0AB';
        tip =  Number(bill * (5/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "R$  " + tip
resT.innerHTML = "R$  " + res1

/*resA.toFixed(2)
resA.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})
resT.toFixed(2)
resT.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})*/
}
})


click2.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click2.style.backgroundColor = '#26C0AB';
        tip =  Number(bill * (10/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "R$  " + tip
resT.innerHTML = "R$  " + res1
}
})

click3.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click3.style.backgroundColor = '#26C0AB';
        tip =  Number(bill * (15/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "R$  " + tip
resT.innerHTML = "R$  " + res1
}
})


click4.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click4.style.backgroundColor = '#26C0AB';
        tip =  Number(bill * (25/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "R$  " + tip
resT.innerHTML = "R$  " + res1
}
})

click5.addEventListener("click", function(){

    if(fbill.value.length <= 0 || fpeople == 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        let bill = Number(fbill.value)
        let people = Number(fpeople.value)
        click5.style.backgroundColor = '#26C0AB';
        tip =  Number(bill * (50/100))
    
let resA = document.querySelector('div#tip-amount')
let resT = document.querySelector('div#total-person')
let res1 = (bill + tip)/people
resA.innerHTML = "R$  " + tip
resT.innerHTML = "R$  " + res1
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
resA.innerHTML = "R$  " + tip
resT.innerHTML = "R$  " + res1
}
})


}


