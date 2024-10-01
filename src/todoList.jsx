import { useState } from "react";
function TodoList(){
    let [toDoItem,setToDoItem] = useState([])
    function handleSaveBtn(){
        let input = document.querySelector(".input>input").value
        document.querySelector(".input>input").value = ""
        if(input !== ""){
            setToDoItem([...toDoItem,input])
        }
    }
    function mapToDoItem(){
        return(toDoItem.map((item,index) => <tr className="data">
                                    <td className="no-data">
                                        {index + 1}
                                    </td>
                                    <td className="Todo-item-data">
                                        {item}
                                    </td>
                                    <td className="Status-data">
                                        <p>in progres</p>
                                    </td>
                                    <td className="Actions-data">
                                        <button className="delete" onClick={() => handleDeleteBtn(index)}>Delete</button>
                                        <br />
                                        <button className="done" id={index} onClick={ handleDoneBtn}>Done!</button>
                                    </td>
                                </tr>
                            )
                        )
    }
    function handelToDoItemHeading(){
        if(toDoItem.length > 0){
            return(
                <table>
                    <tr className="heading">
                        <th className="no-th">
                            No.
                        </th>
                        <th className="Todo-item-th">
                            Todo item
                        </th>
                        <th className="Status-th">
                            
                        </th>
                        <th colSpan={2} className="Actions-th">
                            Actions
                        </th>
                    </tr>
                    { mapToDoItem() }
                </table>
            )
        }else{
            return null
        }
    }
    function handleDoneBtn(e){
        let num = e.target.id;
        console.log(num)
        let x = document.querySelectorAll(".Status-data>p")
        x[num].innerText = "Done!"
        x[num].style.color = "rgb(15, 190, 15)"
        e.target.style.display = "none"
    }
    function handleDeleteBtn(index){
        let x = toDoItem.filter((_,i) => i !== index)
        setToDoItem(x)
    }

    
    return(
        <>
            <div className="todo-list-app">
                <div className="heading">
                    <h1>
                        To Do App
                    </h1>
                </div>
                <div className="input">
                    <input type="text" placeholder="Enter a task here"/>
                    <button onClick={ handleSaveBtn }>Save</button>
                </div>
                <div className="todo-list">
                    {handelToDoItemHeading()}
                </div>
            </div>
        </>
    )
}
export default TodoList;