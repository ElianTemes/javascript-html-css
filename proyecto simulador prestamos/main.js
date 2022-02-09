function calculateIncrease(monto, interes){
    let increase = (monto * interes) / 100;
    increase = monto + increase;
    return increase;
}

function check(monto, interes, meses, fee){
    if(isNaN(interes) || isNaN(meses) || isNaN(monto)){
        return 0;
    }
    else{
        return fee;
    }
}
class Data{
    constructor(nombre, monto, meses, interes){
        this.nombre = nombre;
        this.monto = monto;
        this.meses = meses;
        this.interes = interes;
        this.valorCuota = this.calculateFee(monto, meses, interes);
    }
    calculateFee(monto, meses, interes){
        interes = parseFloat(interes);
        meses = parseInt(meses);
        monto = parseFloat(monto);
        let fee = calculateIncrease(monto, interes) / meses;
        fee = check(monto, interes, meses, fee).toFixed(2);
        return fee;
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const loaderWait = async (ms) => {
    await delay(ms);
    let = loader = document.getElementById("loader");
    loader.style.display = "none";
  };

loaderWait(2000);


const btn = document.getElementById("enviar");
let arrayOfData = [];

btn.addEventListener('click', () => { 
                        let data = new Data( document.getElementById("nombre").value, parseFloat(document.getElementById("monto").value), 
                        parseInt(document.getElementById("meses").value), parseFloat(document.getElementById("interes").value) );
                        arrayOfData.push(data);
                        alert(JSON.stringify(data, null, 4));
                        let prestamo = document.getElementById("prestamo");
                        prestamo.innerText = JSON.stringify(data, null, 4);
                    } )