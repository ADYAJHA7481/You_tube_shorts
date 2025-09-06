let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");

const list = [];

function renderList(arr) {
  listContainer.innerHTML='';
  list.map((obj) => {
    let divElem = document.createElement("div");
    divElem.classList.add("list");
    divElem.innerHTML = `
    <p>${obj.text}</p>
    `
    let buttonElement = document.createElement('button');
    buttonElement.innerText= '❌';
    divElem.appendChild(buttonElement);
    divElem.onclick = () => {
      handleRemoveList(obj.id)
    }
    listContainer.append(divElem);
  });
}

renderList(list);

function handleAddList(){
    let obj ={
        id : Date.now(),
        text : addInput.value,
    }
    list.unshift(obj);
    addInput.value='';
    renderList(list);
}


function handleRemoveList(id) {
  const filterList = list.filter(obj => obj.id !== id);
  list.length = 0;  
  list.push(...filterList); 
  renderList(list);
}


addBtn.addEventListener('click', handleAddList)


