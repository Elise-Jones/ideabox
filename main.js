//GLOBAL VARIABLES 
var savedIdeas = [];
var ideaTitle = document.querySelector("#ftitle");
var ideaBody = document.querySelector("#fbody");
var cardTitle = document.querySelector('.card-title');
var cardBody = document.querySelector('.card-body');
var ideaCards = document.querySelector('.parent3');
var savedIdeasButton = document.querySelector('.save-button');
var currentIdea
//EVENT LISTENERS 
savedIdeasButton.addEventListener('click', generateIdea);
ideaTitle.addEventListener('input', saveButtonDisable);
ideaBody.addEventListener('input', saveButtonDisable);
savedIdeasButton.addEventListener('click', clearInput);
ideaCards.addEventListener('click', deleteIdea);

//FUNCTIONS
function generateIdea(event){
  event.preventDefault();
  currentIdea = new Idea(ideaTitle.value, ideaBody.value);
    ideaTitle.innerText = currentIdea.ideaTitle;
    ideaBody.innerText = currentIdea.ideaBody;
    savedIdeas.push(currentIdea); 
    ideaCards.innerHTML +=
`<div class="idea-cards">
    <p class="card-header">
    <button class = "favoriteCardButton"></button> <br>
    <button class="deleteIdeaButton"></button> <br>
    </p>
    <p class="card-title" >
      <strong>${ideaTitle.value}</strong>
    </p>
    <p class="card-body">
      <strong>${ideaBody.value}</strong>
    </p>
<div class ="card-footer">
    <img class="+" src="assets/comment.svg" alt="plus sign">
<div class="comment">Comment</div> 
</div>`  
};
   
//clears form input
function clearInput(event) {
  event.preventDefault(event);
  if (ideaTitle.value = '') {}
  if (ideaBody.value = '') {}
   saveButtonDisable();
};

//deletes idea card from DOM and Data Model
function deleteIdea(event){
  if (event.target.classList.contains('deleteIdeaButton')) {
    event.target.closest('.idea-cards').remove()
  } 
  for (var i = 0; i < ideaCards.length; i++) {
    if (ideaCards[i].id === event.target.closest.id)
      ideaCards.splice(i, 1)
      event.target.closest.remove(event.target)
  }
};

//disabling save ideas button when blank
savedIdeasButton.disabled = true;
function saveButtonDisable(){
  if (ideaTitle.value !== '' && ideaBody.value !== '') {
     savedIdeasButton.disabled = false;
  } else {
     savedIdeasButton.disabled = true;
  }
};


    
       

 