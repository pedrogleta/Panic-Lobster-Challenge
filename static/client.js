function changeCities(){
    var Estado = $('select')[0].value;
    var state = states.filter(state => state.Estado == Estado);
    var uf = state[0].UF;
    console.log(uf);
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
}