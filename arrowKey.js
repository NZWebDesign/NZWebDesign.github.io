window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

document.onkeydown = checkKey;

function checkKey(event){
    
    if (event.keyCode === 38){       
        changeMenu(1);
    }
    else if (event.keyCode === 40){      
        changeMenu(-1);
    }
    else if (event.keyCode == '37'){       
        cyclePhoto(-1);
    }
    else if (event.keyCode == '39'){           
        cyclePhoto(1);
    }
}

function changeMenu(shift){
    mainIndex += shift;
    
    if (mainIndex < 0){
        mainIndex = 2;        
    }
    if (mainIndex > 2){
        mainIndex = 0;        
    }     
    if(mainIndex == 0){
       photo.src =  "../ResizedPhotos/plane (1).png";
    }
    if(mainIndex == 1){
        photo.src =  "../ResizedPhotos/scene (1).png";
     }
     if(mainIndex == 2){
        photo.src =  "../ResizedPhotos/seagull (1).png";
     }

}

let index = 1;
let mainIndex = 0;

function cyclePhoto(shift){
    let photo = document.getElementById("photo");
    let mainIndexString = ['plane', 'scene', 'seagull'];
    
    if(mainIndex == 0){
        index += shift;
        if(index < 1){
            index = 68;
        }
        if(index >68){
            index = 1;
        }
    
        photo.src = "../ResizedPhotos/" + mainIndexString[0] + " (" +index+ ").png";
        index = index;
    }

    if(mainIndex == 1){
        index += shift;
        if(index < 1){
            index = 14;
        }
        if(index >14){
            index = 1;
        }
    
        photo.src = "../ResizedPhotos/" + mainIndexString[1] + " (" +index+ ").png";
        index = index;
    }

    if(mainIndex == 2){
        index += shift;
        if(index < 1){
            index = 21;
        }
        if(index >21){
            index = 1;
        }
    
        photo.src = "../ResizedPhotos/" + mainIndexString[2] + " (" +index+ ").png";
        index = index;
    }
  
}

