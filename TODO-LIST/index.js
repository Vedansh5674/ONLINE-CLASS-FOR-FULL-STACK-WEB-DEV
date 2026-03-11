const input = document.querySelector('#todo-input');
document.querySelector('submit').addEventListener('click', ()=>{
    const inputData = input.value;
    input.value = "";

    const todo_el = document.createElement('div');
    todo_el.classList.add('todo-item');

    const todo_content_el = document.createElement('div');
    todo_el.classList.add('todo_content');
    todo_content_el.textContent = inputData;
    todo_el.appendChild(todo_content_el);

    const todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text');
    todo_input_el.type = 'text';
    todo_input_el.value = inputData;
    todo_input_el.setAttribute('readonly', 'readonly');
    todo_content_el.appendChild(todo_input_el);
    
    const todo_actions_el = document.createElement('div');
    todo_actions_el.classList.add('actions-items');
    const todo_done_el = document.createElement('i');
    todo_done_el.classList.add('fa-solid', 'fa-check');


    const todo_edit_el = document.createElement('i');
    todo_edit_el.classList.add('fa-solid', 'fa-pen-to-square', 'edit');


    const_todo_delete_el=document.createElement('i');
      todo_delete_el.classList.add('fa-solid',  'fa-trash');



      todo_actions_el.appendChild(todo_done_el);
      todo_actions_el.appendChild(todo_actions_el);
      todo_actions_el.appendChild(todo_delete_el);
      todo_actions_el.appendChild(todo_actions_el);
      


      document.querySelector('.todo-list').appendChild(todo_el);



      todo_done_el.addEventListener('click', ()=>{
        todo_input_el.classList.add('done');
        todo_el.removeChild(todo_actions_el);


      }
    )
    todo_edit_el.addEventListener('click', (e) =>{
      if(todo_edit_el.classList.contains("edit")){
        todo_edit_el.classList.remove("edit");
        todo_edit_el.classList.remove("fa-pen-to-square");
        todo_edit_el.classList.add("fa-x");
        todo_edit_el.classList.add("save");
        todo_edit_el.removeAttribute("readonly");
        todo_edit_el.focus();
      } else{
        todo_edit_el.classList.remove("save");
         todo_edit_el.classList.remove("fa-x");
        todo_edit_el.classList.remove("fa-pen-to-square");
        todo_edit_el.classList.remove("edit");
        todo_edit_el.classList.setAttribute("readonly", "readonly");

      }
          todo_delete_el.addEventListener("click", (e)=>{
            console.log(todo_el);
            document.querySelector('.todo-list').removeChild(todo_el);
            
            
          }
          )
        
    }
)




});
