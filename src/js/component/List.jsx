import React, { useState } from "react";

const List = () => {

    const [todolist, setTodoList] = useState([]);

    const handleChange = (event) => {
        if (event.key === "Enter") {
            const NewList = [...todolist, event.target.value];
            setTodoList(NewList);
            event.target.value = "";
            //console.log(todolist);
        }
    }

    const deleteList = (key) => {
        const NewTodoList = todolist.filter((element, index) => index !== key);
        setTodoList(NewTodoList);
        //console.log(NewTodoList);
    }

    return (
        <>
            <div className="input-group mb-3">
                <input type="text" name="lista" onKeyDown={handleChange} className="form-control" />
            </div>
            <ul className="list-group">

                {todolist.map((element, index) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={index} >
                            {element}
                            <button type="button" onClick={() => deleteList(index)} className="btn-close" aria-label="Close"></button></li>
                    );
                })
                }

            </ul>

        </>
    );
}
export default List;