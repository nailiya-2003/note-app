const notesContainer = document.querySelector(".notes-container");
const notesButton = document.querySelector(".btn");
let notesInput = document.querySelector(".input-box")

notesButton.addEventListener("click", () => {
   let notesP = document.createElement("p");
   let notesImg = document.createElement("img");
   notesP.className = "input-box";
   notesP.setAttribute("contenteditable", "true");
   notesImg.src = "images/delete.png";
   notesContainer.appendChild(notesP).appendChild(notesImg);
});
function updateData() {
   localStorage.setItem("notes", notesContainer.innerHTML);
};

// function showStorage() {
//     notesContainer.innerHTML = localStorage.getItem("notes");
// };
showStorage();
notesContainer.addEventListener("click", function(e) {
   if(e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      updateData();
   }
   else if (
      e.target.tagName === "P"
   ) {
    let notes = document.querySelectorAll(".input-box");
     notes.forEach(nt => {
      nt.onkeyup = function() {
         updateData();
      }
     }
     )}
     document.addEventListener("keydown", event =>{
      if (event.key === "Enter") {
         document.execCommand("insertLineBreak");
         event.preventDefault()
      }
     })
})




