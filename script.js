function binary2hex(){
    var box1 = parseFloat(document.getElementById("box1").value)// setting input box1
    var box2 = parseFloat(document.getElementById("box2").value)// setting input box2
    var box3 = parseFloat(document.getElementById("box3").value)// setting input box3

var box = parseInt(box1, 2).toString(16)// Math for Binary to Hex

document.getElementById('box2').value = box // putting the Hex into the input box2
 // (n = 0; n < hex.length; n += 2)

 


}



