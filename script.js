function buttonA(){
    var getNumber = document.getElementById("InputNumber").value;
    if (getNumber>0){
        alert("Hey el número es mayor a cero");
    } else if (getNumber<0) {
        alert("Hey el número es menor a cero");
    } else {
        alert("Intente otra vez");
    }
    return;
}
