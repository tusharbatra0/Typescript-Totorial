import React, { FC } from "react";
import Todo from "./Todo";

const TodoContainer: FC = () => {
 return (
    <>
    <div>
        <ol>
        <Todo />
        </ol> 
    </div>
    </>
 )
};

export default TodoContainer;