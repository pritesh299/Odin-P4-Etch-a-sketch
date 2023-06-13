
const apply=document.getElementById('apply')
const clear=document.getElementById('clear')
const range=document.getElementById('range')
const sizeDisplay=document.getElementById('size')
const conatiner=document.getElementById("container")

function createDiv(height,width){
    const div=document.createElement('div')
      div.classList.add('box')
     div.style.height=`${height}px`;
     div.style.width=`${width}px`;
     div.style.background=`red`;
     div.style.border=`1px solid black`;
     return (div)
}
function createGrid(gridSize){
     deleteGrid();
    let boxSize=500/gridSize-2;
for(let i=0;i<gridSize;i++){
    let rowDiv=createDiv(boxSize,500)
    rowDiv.style.display="flex";
   for(let j=0;j<gridSize;j++){
        rowDiv.appendChild(createDiv(boxSize, boxSize));
   }
   conatiner.appendChild(rowDiv)
}
}

function deleteGrid(){
    while(conatiner.firstElementChild){
    conatiner.removeChild(conatiner.lastElementChild)
        
    }
}
createGrid(16)

apply.addEventListener('click',()=>{
   createGrid(range.value)
   
})
range.addEventListener('input',()=>{
    sizeDisplay.innerText=`${range.value}X${range.value}`
})