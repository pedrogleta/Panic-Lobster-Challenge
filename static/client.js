//Sets max date to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
$('#inputBirthdate')[0].setAttribute("max", today);

//Gibberish that makes cpf field work for unknown reason
var cpf = $('#inputCPF')[0];

cpf.onpaste = e => {e.preventDefault(); return false};

cpf.addEventListener("keydown", function(event) {
  if (event.keyCode == 8){
    if (cpf.value.length == 4){
      cpf.value = cpf.value.substring(0,cpf.value.length - 1);
    } else if (cpf.value.length == 8){
      cpf.value = cpf.value.substring(0,cpf.value.length - 1);
    } else if (cpf.value.length == 12){
      cpf.value = cpf.value.substring(0,cpf.value.length - 1);
    }
    } else {
    if (cpf.value.length == 3){
      cpf.value = cpf.value + '.';
    } else if (cpf.value.length == 7){
      cpf.value = cpf.value + '.';
    } else if (cpf.value.length == 11){
      cpf.value = cpf.value + '-';
    } 
  }
});

//Sets city options according to selected state
function changeCities(){
    var Estado = $('#state')[0].value;
    var state = states.filter(state => state.Estado == Estado);
    var uf = state[0].UF;
    var citySel = $('#city')[0];
    while(citySel.firstChild){
        citySel.removeChild(citySel.firstChild);
    };
    cities.forEach(function(city){
        if (city.UF == uf){
            var opt = document.createElement('option');
            opt.appendChild(document.createTextNode(city.Município));
            citySel.appendChild(opt);
        };
    })
};

changeCities();

