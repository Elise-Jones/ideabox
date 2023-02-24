var savedIdeas = []
var currentIdea

var ideaTitle = document.querySelector("#ftitle")
var ideaBody = document.querySelector("#fbody")

var savedPosterButton = document.querySelector('.save-button')


savedPosterButton.addEventListener('click', generateIdea)


function generateIdea(event){
    
    event.preventDefault()
    currentIdea = new Idea(ideaTitle.value, ideaBody.value)
        ideaTitle.innerText = currentIdea.ideaTitle
        ideaBody.innerText = currentIdea.Body
        savedIdeas.push(currentIdea)
    }
    


    
