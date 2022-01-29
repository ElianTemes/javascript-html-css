function calculateInterest(monto, interes){
    let interest = (monto * interes) / 100;
    interest = monto + interest;
    return interest;
}
function calculateFee(){
    document.getElementById("value").innerHTML = "Valor Cuota: ";
    let interes = parseFloat(document.getElementById("interes").value);
    let meses = parseInt(document.getElementById("meses").value);
    let monto = parseFloat(document.getElementById("monto").value);
    let fee = calculateInterest(monto, interes) / meses;
    document.getElementById("value").innerHTML += fee;
    console.log(interes);
    console.log(meses);
    console.log(monto);
    return fee;
}

document.getElementById("enviar").onclick = calculateFee;
