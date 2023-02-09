
/*function pay() {
  
    
 

   
}
}*/

function tipclick(){

    var fbill = document.querySelector('input#bill')
    var fpeople = document.querySelector('input#people')
    if(fbill.value.length <= 0 ){
        alert('[ERRO] Valor deve ser maior que 0')
    }  else{
        var bill = Number(fbill.value)
    
    }

    var click1 = document.getElementById('five')
    click1.style.backgroundColor = '#26C0AB'
    var ftip = document.querySelector('select-tip')
        var tip = ''
    if(click1.onclick){
        tip =  Number(bill * (5/100))
    }
    var resA = document.querySelector('div#tip-amount')
    var resT = document.querySelector('div#total-person')
    var res1 = (bill + tip)
    resA.innerHTML = tip
    resT.innerHTML = res1
    
}