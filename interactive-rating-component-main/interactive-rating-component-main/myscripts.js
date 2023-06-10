var index = 0;

function choose_number(n) {
    var i;
    var buttons = document.getElementsByClassName("button centering");
    for(i = 0; i < buttons.length; ++i){
        buttons[i].className = buttons[i].className.replace(" active", " inactive");
    }

    buttons[n-1].className = buttons[n-1].className.replace(" inactive", "");
    buttons[n-1].className += " active";
    index = n;
  }

function submit(){
    var layout;
    var div;
    if(index != 0){
        let my_text = `You selected ${index} out of 5`
        console.log(my_text)
        layout = document.getElementsByClassName("container");
        layout[1].className = layout[1].className.replace(" no_visible", "");
        layout[0].className += " no_visible";
        div = document.getElementById("my_text");
        div.innerHTML = my_text;
    }
}