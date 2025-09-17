// creamos las constantes para los elementos principales


const input = document.getElementById('to-do-input');
const addBtn = document.getElementById('item-to-do');
const ToDoList = document.getElementById('cont-to-do-list');
const completeList = document.getElementById('complete-list');

// creamos la funcion que nos permite crear una nueva tarea a partir del formulario

// toda etiqueta que vamos a crear es a partir de la etiqueta html pre existente

function createToDoItem (textoItem) {
    // creamos el nodo o elemento padre
    const item = document.createElement('div');
    item.classList.add('item-to-do');
    const checkbox = document.createElement('input');
// creamos el nodo hijo del input y agregamos el type checkbox
    checkbox.type = 'checkbox';
// creamos el siguiente nodo hijo parrafo 
    const p = document.createElement('p');
    p.textContent = textoItem
    // a este parrafo le asigno el valor del argumento de la función es decir lo que escribe el usuario en el campo

    // creamos el ultimo nodo hijo, el bottom de eliminar

    const deleteBtn = document.createElement('buttom');
    deleteBtn.textContent ='X';

    // enzamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    // utilizamos el return para retornar o para dar respuesta al elemento creado ya que lo utilizaremos
    return item;
    



};

