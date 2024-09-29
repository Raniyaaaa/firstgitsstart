
const mainheading=document.querySelector('#main-heading')
mainheading.style.textAlign='right'

const basketheading =document.querySelector('h2')
basketheading.style.color='brown'
basketheading.style.margin='30px'

const fruitsitem=document.querySelector('.fruits')
fruitsitem.style.backgroundColor='grey'
fruitsitem.style.margin='30px'
fruitsitem.style.padding='20px'
fruitsitem.style.borderRadius='5px'
fruitsitem.style.listStyleType='none'

const fruitlist=document.querySelectorAll('.fruit')
for(let i=0;i<fruitlist.length;i++){
  fruitlist[i].style.backgroundColor='white'
  fruitlist[i].style.margin='5px'
  fruitlist[i].style.padding='10px'
  fruitlist[i].style.borderRadius='5px'
}

const oddfruits=document.querySelectorAll('.fruit:nth-child(even)')
for(let i=0;i<oddfruits.length;i++){
  oddfruits[i].style.backgroundColor='brown'
  oddfruits[i].style.color='white'
  }