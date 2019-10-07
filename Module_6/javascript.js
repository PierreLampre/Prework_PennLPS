document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = ".3";

});

document.getElementById("button3_1").addEventListener("click", function(){

    document.getElementById("box").style.backgroundImage = "url('https://static.businessinsider.com/image/4ee7b29169bedd0f4300001b-750.jpg')";
    // document.getElementById("box").style.height = "1350px";
    // document.getElementById("box").style.width = "1050px";
    document.getElementById("box").style.opacity = "1";

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundImage = "none";

});


