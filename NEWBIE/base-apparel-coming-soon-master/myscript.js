
var data = ["guidosalazar@gmail.com"];

var form = document.getElementById("myForm");
console.log(form)

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    // Obtener los valores de los campos del formulario
    var email = document.getElementById("correo").value;
    verificar(email);  
});

function verificar(email) {
    var i;
    var element = document.getElementsByClassName("not_visible");
    if(data.includes(email)){
        for(i = 0; i < element.length; ++i){
            console.log(element[i])
            element[i].style.display = "none";
        }        
    } else {
        for(i = 0; i < element.length; ++i){
            console.log(element[i])
            element[i].style.display = "block";
        }
    }
}