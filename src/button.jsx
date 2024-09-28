import { useState } from "react";
function Button(){
    
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
                    <button>Save</button>
                </div>
                <div className="todo-list">
                    <table>
                        <tr>
                            <th className="no-th">
                                No.
                            </th>
                            <th className="Todo-item-th">
                                Todo item
                            </th>
                            <th className="Status-th">
                                Status
                            </th>
                            <th colSpan={2} className="Actions-th">
                                Actions
                            </th>
                        </tr>
                        <tr className="data">
                            <td className="no-data">
                                1
                            </td>
                            <td className="Todo-item-data">
                                my name is surafel meles 2lqhdioh qwejdhioqs qio
                            </td>
                            <td className="Status-data">
                                <p>in progres</p>
                            </td>
                            <td className="Actions-data">
                                <button className="delete">Delete</button>
                                <br />
                                <button className="done">Done!</button>
                            </td>
                        </tr>
                        <tr className="data">
                            <td className="no-data">
                                2
                            </td>
                            <td className="Todo-item-data">
                                my name is surafel meles 
                            </td>
                            <td className="Status-data">
                                <p>in progres</p>
                            </td>
                            <td className="Actions-data">
                                <button className="delete">Delete</button>
                                <br />
                                <button className="done">Done!</button>
                            </td>
                        </tr>
                        <tr className="data">
                            <td className="no-data">
                                3
                            </td>
                            <td className="Todo-item-th">
                                my name is surafel meles 
                            </td>
                            <td className="Status-data">
                                <p>in progres</p>
                            </td>
                            <td className="Actions-data">
                                <button className="delete">Delete</button>
                                <br />
                                <button className="done">Done!</button>
                            </td>
                        </tr>
                    </table>
                    
                </div>
            </div>
        </>
    )
}
export default Button;