const heading=document.createElement('h3')
const headtext=document.createTextNode("Buy high quality organic fruits online")
heading.appendChild(headtext)
const divs=document.getElementsByTagName('div')
divs[0].appendChild(heading)
heading.style.fontStyle='italic'

const para=document.createElement('p')
const paratext=document.createTextNode("Total fruits: 4")
para.appendChild(paratext)
divs[1].appendChild(para)
para.id='fruits-total'