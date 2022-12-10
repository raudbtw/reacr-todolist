function ToDo({todo,toggleTask,removeTask}){
    return(
        <div key={todo.id} className='item-todo'>
            <div className={todo.isDone ? 'item-text strike':'item-text'} onClick={()=>toggleTask(todo.id)}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={()=> removeTask(todo.id)}>
            <i class="ri-delete-bin-line"></i>
            </div>
        </div>
    )
}

export default ToDo 



