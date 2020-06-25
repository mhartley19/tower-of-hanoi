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




// function tower(event){

//   let selectedTower = event.currentTarget

//   console.log(selectedTower)
//   if (mode === "pickup"){
//     let disc = selectedTower.lastElementChild
//     selectedPiece.append(disc)
//     mode = "dropped"
    
    
//   }
//   else if(mode==="dropped"){
    
//     let disc = selectedPiece.firstElementChild
//     selectedTower.append(disc)
//     console.log(selectedTower)
//     mode = "pickup"

//   }
//     else if(mode === "dropped"){
  
//      let newTower = selectedPiece.firstElementChild
//       selectedTower.append(newTower)
//       console.log(selectedTower)
//       mode = "pickup"
//     }

  
    
//   }



  



  


button.addEventListener("click", winorlose)

function winorlose(){
  if (endTower.childElementCount === 4){
      alert("Yes, you are a winner!")
    }
  
    else {
      alert("No Keep Trying")
    }
  }


 function tower(event){
   let selectedTower = event.currentTarget
   if(mode === 'pickup'){
     let disc = selectedTower.lastElementChild
     if(disc){
      selectedPiece = disc
      document.getElementById('selectedPiece').append(selectedPiece)
      mode = "dropped"
     } else {
       console.log("empty") //Without this gaurd clause I kept running into issues so I am guessing its going to be required
     }

   } else if(mode === "dropped"){
    if(event.currentTarget.childElementCount === 0){
      selectedTower.append(selectedPiece)
      mode = "pickup" //if the tower is empty the disc is dropped and swithces to "pickup"
    } else if (selectedPiece.dataset.width < event.currentTarget.lastElementChild.dataset.width){
      selectedTower.append(selectedPiece)
      mode = "pickup" //if the first if statement fails it going to this else if and if disc is smaller is appends disc and mode become "pickup"
    } else {
      alert('wrong-move') //or can be a simple console.log so that if none of the above conditions work than theres no appending of disc
      
    }
   }
 }
      