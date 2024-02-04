import Bar from "./Bar";
import './BarTables.css';
import { useState } from "react";

function BarTable({answers}){

    const [activeBars,setActiveBars] = useState([])

    function clickToOpen(id){
        // Check if the card is already selected
        if (activeBars.includes(id)){
            // If selected, remove it from the array
            setActiveBars(activeBars.filter((selectedId) => selectedId !== id));
        }else{
            // If not selected, add it to the array
            setActiveBars([...activeBars, id]);
        }
    }

    return (
        <div className="table">
            {answers.map((answer) =>
                <Bar key={answer.id} answer={answer} activeBars={activeBars}  onClick={() => clickToOpen(answer.id)}/>
            )}
        </div>
    )
}

export default BarTable