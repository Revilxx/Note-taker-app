const note = document.querySelector('#Note')
const checking = document.querySelector('#checkdelete')
const yesBtn = document.querySelector('#yes')
const noBtn = document.querySelector('#no')
const notePad = document.querySelector('#NotePad')
const viewNote = document.querySelector('#view-tab')
const viewNotes = document.querySelector('#view-note')
const closeNote = document.querySelector('#close')
const body = document.querySelector('body')


const icons = {
  trashKane:'<i id="trash" class="fa-solid fa-trash"></i>',
  edit:'<i class="fa-regular fa-pen-to-square">',
  view:'<i class="fa-solid fa-eye-slash"></i>'
}
//Animation

const animations = 'dropdown'

/*const randomAnimation = Math.floor(Math.random() * animations.length)
console.log(randomAnimation)
*/
const noteHandling = () => {
  if( note.value === '') {
    alert('Your Note address is Empty')
  } else {
    //create Elements 
    
    const diaries = document.createElement('div') 
    const notess = document.createElement('p')
    const option = document.createElement('div')
    const info = document.createElement('div')
    const time = document.createElement('p')
   
    const date = new Date 
    
    time.textContent =  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}`
    
    diaries.classList.add('diaries')
    notess.classList.add('notess')
    diaries.innerHTML = "<h6>Note </h6>"
    notess.textContent = note.value
    diaries.setAttribute('id','node')
 
  const removeBtn = document.createElement('span')
  const viewBtn = document.createElement('span')
  const edit = document.createElement('span')
  
  removeBtn.classList.add('rm-icon')
  viewBtn.classList.add('view-icon')
  edit.classList.add('edit-icon')
  
  removeBtn.innerHTML = icons.trashKane
  viewBtn.innerHTML = icons.view
  edit.innerHTML = icons.edit
  
  option.appendChild(removeBtn)
  option.appendChild(viewBtn)
  option.appendChild(edit)
  
  option.classList.add('option')
  time.classList.add('time')
   info.appendChild(time)
   info.appendChild(option)
      
  info.classList.add('info')
  
  edit.addEventListener('click',() => {
    window.location.href = 'edit.html'
  })
  
  //Appending child Elements 
  diaries.appendChild(notess) 
  diaries.appendChild(info)
  notePad.appendChild(diaries)
  //remove Single Note
  
  removeBtn.setAttribute('id','rmnote')
  
  removeBtn.addEventListener('click', (e) => {
    if (e.target.id === 'rmnote') {
      checking.style.display = 'block'
      checking.style.animationName = animations
    }
    yesBtn.addEventListener('click', (event) => {
      try {
        if (notePad.contains(e.target.parentElement)) {
          
           notePad.removeChild(e.target.parentElement.parentElement.parentElement)
           
          checking.style.display = 'none'
        } else {
          
          checking.style.display = 'none'
        }
      }
      catch (err) {
        console.log(err)
      }
    })
    
    noBtn.addEventListener('click',( )=> {
      checking.style.display = 'none'
    })
    
  })
  //**************************//
  //view-Notes
  viewBtn.addEventListener('click',(e) => {
    
    viewNote.style.display = 'block'
    viewNotes.textContent = notess.textContent
    
  })
  
  closeNote.addEventListener('click', () => {
        viewNote.style.display = 'none'
  })
  
  note.value = ''
  }
}

const clearingNote = () => {
  note.value = ''
}
