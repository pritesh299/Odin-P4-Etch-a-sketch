
const apply=document.getElementById('apply')
const clear=document.getElementById('clear')
const range=document.getElementById('range')
const sizeDisplay=document.getElementById('size')
const conatiner=document.getElementById("container")
const selectedColor=document.getElementById("color")
let mouseDown=false;
let color='black';

function createDiv(height,width){
     const div=document.createElement('div')
     if(height===width){
     div.classList.add('box');
     div.style.background=`white`;
     div.addEventListener('mousedown',()=>{
        div.style.background=color;
        mouseDown=true;

      })
     
      div.addEventListener('mouseover',()=>{
        if(mouseDown===true){
        div.style.background=color;
            
        }
      })
      div.addEventListener('mouseup',()=>{
            mouseDown=false;
      })

      div.addEventListener('dragstart',(event)=>{
        event.preventDefault();
      })
    }
    div.style.height=`${height}px`;
     div.style.width=`${width}px`;

     return (div)
}

  function createGrid(gridSize){
           deleteGrid();
       let boxSize=500/gridSize;
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

conatiner.addEventListener('mouseenter',()=>{ mouseDown=false; mouseUp=true})

range.addEventListener('input',()=>{
    sizeDisplay.innerText=`${range.value}X${range.value}`;
    createGrid(range.value)
})
clear.addEventListener('click',()=>{
    createGrid(range.value)
})
selectedColor.addEventListener('input',()=>{
    color=selectedColor.value
})