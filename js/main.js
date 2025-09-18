// creamos las constantes para los elementos principales


const input = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const ToDoList = document.getElementById('cont-to-do-list');
const completeList = document.getElementById('cont-complete-list');

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

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ='X';

    // enzamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    // utilizamos el return para retornar o para dar respuesta al elemento creado ya que lo utilizaremos
    return item;
// esta funcion solo crea la estructura del html y la deja en el limbo

};

// Detectamos el evento click sobre el bottom agregar con un evento de escucha o de listen
// para que a partir de este evento se agregue la tarea dentro del contenedor cont-to-do-list

addBtn.addEventListener('click',()=>{
    const textoItem = input.value.trim();
    if (textoItem =="") {
        alert('No se puede crear una tarea vacia');
    }

    else{
        const newItem = createToDoItem (textoItem);
        ToDoList.appendChild(newItem);
        eventsToItem(newItem);
        input.value ="";
    }
});

// La siguiente funcion nos permitira agregar el funcionamiento principal sobre las tareas es decir marcar la tarea como completada o en dado caso eliminarla 

function eventsToItem (item) {
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');
    // utilizamos querySelector para capturar el input y el button que estan dentro del item


    // completar la tarea

    checkbox.addEventListener('change',()=>{
        if (checkbox.checked) {
            completeList.appendChild(item);
            
        }
        else{
            ToDoList.appendChild(item);
        }
    });

    deleteBtn.addEventListener('click',()=>{
        item.remove();


    });


}
