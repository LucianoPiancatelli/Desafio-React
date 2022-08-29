import { useState } from "react";
import React from "react";
import ItemListContainer from "./Itemlist";

const Counter = () => {
    const [count, setCount] = useState(0)
    function add(){
        
        setCount(count+1)

    }
    function substract(){
        if (count >= 1)
        setCount(count-1)

    }
    function reset(){
        setCount(0)

    }

    return (
        <div>
            <div className="counterbox">
                <h1>Contador</h1>
                <p>Cantidad: {count} </p>


            </div>
            <button className="btn btn-primary" onClick={substract}> - </button>
            <button className="btn btn-primary"onClick={reset}> Reset </button>
            <button className="btn btn-primary"onClick={add}> + </button>

        </div>




    )

        
}

    export default Counter;