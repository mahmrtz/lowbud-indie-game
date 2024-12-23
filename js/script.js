
var top_co = 460
var left_co = 80

var gameStarted = false




onkeydown = (e) => {
    var person = document.getElementById("person");


    console.log(e.key)

    if(e.key == "Enter"){
        document.getElementById("mapGame").style.display = "block";
        document.getElementById("person").style.display = "block";
        gameStarted = true
    }

    if((e.key == "w") && (gameStarted == true)){
        top_co -= 25
        person.style.top = top_co+"px"
        
        console.log(person.style.top)
    }

    if((e.key == "a")  && (gameStarted == true)){
        left_co -= 25
        person.style.left = left_co+"px"

        console.log(person.style.left)
    }

    if((e.key == "s")  && (gameStarted == true)){
        top_co += 25
        person.style.top = top_co+"px"
        
        console.log(person.style.top)
    }

    if((e.key == "d")  && (gameStarted == true)){
        left_co += 25
        person.style.left = left_co+"px"

        console.log(person.style.left)
    }


    if(left_co > 505){
        left_co = 495
        person.style.left = left_co+"px"
    }


    if(left_co < -80){
        left_co = -75
        person.style.left = left_co+"px"
    }

    if(top_co > 480){
        top_co = 475
        person.style.top = top_co+"px"
    }

    if(top_co < -80){
        top_co = -75
        person.style.top = top_co+"px"
    }

    console.log(top_co)
    console.log(left_co)

    var infoMap = document.getElementById("mapDetails");
    if((left_co < 140) && (top_co > 80) && (left_co > -20) && (top_co < 115)){

        infoMap.textContent ="Bridge";
        console.log(infoMap)
    }
    

    if((top_co < 80) || (top_co > 115)){

        infoMap.textContent ="not Bridge";
        console.log(infoMap)
    }
}


function mapDetails(){
    
   
}




