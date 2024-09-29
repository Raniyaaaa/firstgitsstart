// Add the Edit Button:
const fruitlist=document.querySelectorAll(".fruit")
for(let i=0;i<fruitlist.length;i++){
const editbtn=document.createElement('botton')
const editbtntext=document.createTextNode("Edit")
editbtn.appendChild(editbtntext)
editbtn.className="edit-btn"
editbtn.style.fontStyle=" Arial"
fruitlist[i].appendChild(editbtn)
}
// Implement the code as in video but with one extra 'Edit' button in 'li'
const form=document.querySelector('form')
const fruits=document.querySelector(".fruits")

form.addEventListener("submit",function(event){

  event.preventDefault();

  const fruittoadd=document.getElementById('fruit-to-add')
  
  const newli=document.createElement("li")
  const newlitext=document.createTextNode(fruittoadd.value)
  newli.appendChild(newlitext)
  newli.className="fruit"

  
  const deletebtn=document.createElement("button")
  const dltbtntext=document.createTextNode('x')
   deletebtn.appendChild(dltbtntext)
  deletebtn.className="delete-btn"

  newli.appendChild(deletebtn)

  const editbtn=document.createElement("button")
  const editbtntext=document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
  editbtn.className="edit-btn"

  newli.appendChild(editbtn)

  fruits.appendChild(newli)
  
})

 fruits.addEventListener("click",function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruittodelete = event.target.parentElement
  fruits.removeChild(fruittodelete)}
})