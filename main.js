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
ideaCards.addEventListener('click', deleteIdea)
//add event listener when create card, use event.target to navigate the DOM to what the parent is. 
function generateIdea(event){
   event.preventDefault()
   currentIdea = new Idea(ideaTitle.value, ideaBody.value)
       ideaTitle.innerText = currentIdea.ideaTitle
       ideaBody.innerText = currentIdea.ideaBody
       savedIdeas.push(currentIdea)


   ideaCards.innerHTML +=
//create, update and append and in order to append we'll have to target the p-tag
//.createElement 

   `<div class="idea-cards">
   <p class="card-header">
    <button class = "favoriteCardButton"></button>
      <button class="deleteIdeaButton"></button> <br>
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

function deleteIdea(event){
    console.log("hello")
    if (event.target.classList.contains('deleteIdeaButton')) {
        event.target.closest('.idea-cards').remove()
    } 
    console.log(event.target.closest('.idea-cards'))
    for (var i = 0; i < ideaCards.length; i++) {
        if(ideaCards[i].id == event.target.closest.id)
          ideaCards.splice(i, 1)
          event.target.closest.remove(event.target)
          }
     }
 

// function favoriteIdea (event){
// if (event.target.classList.contains('favoriteIdea')) {
//         event.target.closest('.idea-cards').remove()
//     } 
//     console.log(event.target.closest('.idea-cards'))
// for (var i = 0; i < ideaCards.length; i++) {
//     if(ideaCards[i].id == event.target.closest.id)
//         ideaCards.splice(i, 1)
//         event.target.closest.remove(event.target)
//         }
//      }


savedIdeasButton.disabled = true;
function saveButtonDisable(){
if (ideaTitle.value !== "" && ideaBody.value !== ""){
   savedIdeasButton.disabled = false;
} else {
   savedIdeasButton.disabled = true;
}
}


    
       

    //  var element = event.target
    // if (event.target.classList.contains('.deleteIdeaButton')) {
    //     for(var i=0; i<savedIdeas.length; i++){
    //         if(element.parentNode.id || element.id === savedIdeas[i].id)
    //         savedIdeas.splice(i, 1)
    //     }
    // } 
    // event.target.parentElement.remove()
    //  }