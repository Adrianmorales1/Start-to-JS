console.log("connected to js");


var img = document.querySelector('img')


function sendMessage () {
    //what you want to do
    alert("you clicked the box");
}

function changeBox(element) {
    console.log(element);
    element.style.backgroundColor = "purple";
}

function changePic() {
    img.src = "balto.jpeg"
}

