function binary2hex(){
    var box1 = parseFloat(document.getElementById("box1").value)// setting input box1
    var box2 = parseFloat(document.getElementById("box2").value)// setting input box2
    var box3 = parseFloat(document.getElementById("box3").value)// setting input box3

var box = parseInt(box1, 2).toString(16)// Math for Binary to Hex

document.getElementById('box2').value = box // putting the Hex into the input box2

}

function a2hex(str) {
    var arr = [];
    for (var i = 0, l = str.length; i < l; i ++) {
      var hex = Number(str.charCodeAt(i)).toString(16);
      arr.push(hex);
    }
    return arr.join('box3');
  }
  
  function hex2a(hexx) {
      var hex = hexx.toString();//force conversion
      var str = '';
      for (var i = 0; i < hex.length; i += 2)
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      return str;
  }