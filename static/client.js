//Sets city options according to selected state
function changeCities(){
    var Estado = $('select')[0].value;
    var state = states.filter(state => state.Estado == Estado);
    var uf = state[0].UF;
    var citySel = $('select')[1];
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

//Blocks out of CPF format characters
$('#cpf').keyup(function(e){
  if (!(/\d/.test(this.value) || /-/.test(this.value) || /\./.test(this.value)))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});
