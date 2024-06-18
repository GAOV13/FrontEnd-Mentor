var data = ["a123@gmail.com"];

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
    var element = document.getElementsByClassName("error-message");
    var card = document.getElementsByClassName("container");
    var box = document.getElementsByClassName("caja_correo");
    var text = document.getElementById("my_text");
    if(data.includes(email)){
        for(i = 0; i < element.length; ++i){
            console.log(element[i])
            element[i].style.display = "none";
        }
        card[1].className = card[1].className.replace(" no-visible", "");
        card[0].className += " no-visible";
        text.innerHTML = `A confirmation email has been sent to ${email}. 
        Please open it and click the button inside to confirm your subscription.`;
    } else {
        for(i = 0; i < element.length; ++i){
            console.log(element[i])
            element[i].style.display = "flex";
        }
        box[0].style.backgroundColor = "rgb(255, 98, 87, 0.2)"
    }
}