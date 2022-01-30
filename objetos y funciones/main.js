function calculateInterest(monto, interes){
    let interest = (monto * interes) / 100;
    interest = monto + interest;
    return interest;
}
function check(monto, interes, meses, fee){
    if(isNaN(interes) || isNaN(meses) || isNaN(monto)){
        return 0;
    }
    else{
        return fee;
    }
}
function calculateFee(){
    document.getElementById("value").innerHTML = 0;
    let interes = parseFloat(document.getElementById("interes").value);
    let meses = parseInt(document.getElementById("meses").value);
    let monto = parseFloat(document.getElementById("monto").value);
    let fee = calculateInterest(monto, interes) / meses;
    fee = check(monto, interes, meses, fee);
    fee = fee.toFixed(2);
    document.getElementById("value").innerHTML = fee;
    return fee;
}
const btn = document.getElementById("enviar");
btn.addEventListener('click', calculateFee);
