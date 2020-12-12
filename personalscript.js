function calculateSum(){
  let firstNum = parseInt(document.getElementById('inputOne').value);
  let secondNum = parseInt(document.getElementById('inputTwo').value);
  document.getElementById('outputNum').value = firstNum + secondNum;
}
function calcSquare(){
  x = parseInt(document.getElementById('inNum').value);
  if (Number.isInteger(x) != true){
    alert("This is invalid");
  }
  else {
    document.getElementById('outNum').value = x * x;
    document.getElementById('outNum').style.display = "block";
    document.getElementById('labelOutNum').style.display = "block";
  }
}
function myName() {
  var nameF = document.getElementById('inName').value;
  var nameSplit = nameF.split(' ');
  if (nameSplit.length == 2) {
    document.getElementById('outName').value = nameSplit[0].slice(0,1).toUpperCase()+". "+nameSplit[1].slice(0,1).toUpperCase()+nameSplit[1].slice(1).toLowerCase();
  }
  else {
    alert("Please enter the correct format FirstName LastName");
  }
}
function myFunction() {
  var nameF = document.getElementById('inputText').value.trim();

    document.getElementById('outputText').value = '';
    while (nameF.replace('  ',' ')!=nameF) {
      nameF=nameF.replace('  ',' ');
    }
    var nameSplit = nameF.split(' ');
    for (var i = nameSplit.length - 1; i >= 0; i--) {
      nameSplit[i] = nameSplit[i].slice(0, 1).toUpperCase() + nameSplit[i].slice(1).toLowerCase();
    }
    document.getElementById('outputText').value = nameSplit.join(', ');
}
