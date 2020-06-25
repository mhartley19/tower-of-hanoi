let piece4 = document.querySelector("#piece4")
let piece3 = document.querySelector("#piece3")
let piece2 = document.querySelector("#piece2")
let piece1 = document.querySelector("#piece1")
let allPieces = document.querySelectorAll(".pieces")
let allTowers = document.getElementsByClassName("tower")
let firstTower= document.querySelector("#firstTower")
let middleTower = document.querySelector("#middleTower")
let endTower = document.querySelector("#endTower")
let selectedPiece = document.querySelector("#selectedPiece")
let button = document.querySelector("#didIWin")
//// WORKS, MOVES DISC TO TOP AND THEN DOWN TO A TOWER//


let mode = "pickup"


firstTower.addEventListener("click", tower)
middleTower.addEventListener("click", tower)
endTower.addEventListener("click", tower)



function tower(event){

  let selectedTower = event.currentTarget

  if (mode === "pickup"){
    let disc = selectedTower.lastElementChild
    console.log(disc)
    selectedPiece.append(disc)
    mode = "dropped"
    
  }
  // if(mode === "dropped" && 
    // selectedPiece.lastElementChild.clientWidth < 400
    // || selectedPiece.lastElementChild < selectedTower.lastElementChild.clientWidth)
    // {alert ("Wrong Move")}

    else{mode === "dropped"
     
     let newTower = selectedPiece.firstElementChild
      selectedTower.append(newTower)
      console.log(selectedTower)
      mode = "pickup"
    }

  
}


  



button.addEventListener("click", winorlose)

function winorlose(){
  if (endTower.childElementCount === 4){
      alert("Yes, you are a winner!")
    }
  
    else {
      alert("No Keep Trying")
    }
  }


