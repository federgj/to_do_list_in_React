import { useState } from "react";

export default function Todo({item, onUpdate, onDelete}){
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleOnChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(e){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input className="todoInput" onChange={handleOnChange} type="text" value={newValue}/>
                <button className="button" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        );
    }

    function TodoElement() {
        return (
            <div className="todoInfo" key={item.id}>
                <span className="todoTitle">{item.title}</span>
                <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
                <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
            </div>
        )
    }

    return (
        <div className="todo">
            {isEdit ? <FormEdit /> : <TodoElement/>}
        </div>
    );
    
}