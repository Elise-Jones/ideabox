var savedIdeas = []
var currentIdea
var ideaTitle = document.querySelector("#ftitle")
var ideaBody = document.querySelector("#fbody")
var cardTitle = document.querySelector('.card-title')
var cardBody = document.querySelector('.card-body')
var ideaCards = document.querySelector('.parent3')
var savedIdeasButton = document.querySelector('.save-button')


savedIdeasButton.addEventListener('click', generateIdea)
ideaTitle.addEventListener('input', saveButtonDisable)
ideaBody.addEventListener('input', saveButtonDisable)
savedIdeasButton.addEventListener('click', clearInput)


function generateIdea(event){
   event.preventDefault()
   currentIdea = new Idea(ideaTitle.value, ideaBody.value)
       ideaTitle.innerText = currentIdea.ideaTitle
       ideaBody.innerText = currentIdea.ideaBody
       savedIdeas.push(currentIdea)


   ideaCards.innerHTML +=


   `<div class="idea-cards">
           <p class="card-header">
                   <img class="star" src="assets/red-star.svg">
                   <img class="X" src="assets/delete.svg">
               </p>
               <p class="card-title" >
                   <strong>${ideaTitle.value}</strong>
               </p>
               <p class="card-body">
                   <strong>${ideaBody.value}</strong>
               </p>
               <div class ="card-footer">
                   <img class="+" src="assets/comment.svg">
                   <div class="comment">Comment</div>
                   </div>
                   <div>
    `
   }
function clearInput(event) {
   event.preventDefault(event)
    if(ideaTitle.value = ''){
   } if (ideaBody.value = ''){
   }
   saveButtonDisable()
   }


savedIdeasButton.disabled = true;


function saveButtonDisable(){
if (ideaTitle.value !== "" && ideaBody.value !== ""){
   savedIdeasButton.disabled = false;
} else {
   savedIdeasButton.disabled = true;
}
}
