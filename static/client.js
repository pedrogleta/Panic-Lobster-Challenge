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

// (function($) {
//     $.fn.inputFilter = function(inputFilter) {
//       return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
//         if (inputFilter(this.value)) {
//           this.oldValue = this.value;
//           this.oldSelectionStart = this.selectionStart;
//           this.oldSelectionEnd = this.selectionEnd;
//         } else if (this.hasOwnProperty("oldValue")) {
//           this.value = this.oldValue;
//           this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
//         } else {
//           this.value = "";
//         }
//       });
//     };
//   }(jQuery));

//   $(document).ready(function() {
//     $("#cpf").inputFilter(function(value) {
//       return /^\d{11}$/g.test(value);    // Allow digits only, using a RegExp
//     });
//   });

$('#cpf').keyup(function(e)
                                {
  if (!(/\d/.test(this.value) || /-/.test(this.value) || /\./.test(this.value)))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});
