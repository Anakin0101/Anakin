import React  from "react";
import "./Ninjas.css"

const Ninjas = ({ninjas , deleteNinja}) => {

        const ninjasList = ninjas.map((ninja) => {
            if(ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                <div>Name : {ninja.name} </div>
                <div>Age : {ninja.age} </div>
                <div>Skills : {ninja.skills}</div>
                <button onClick={() =>{deleteNinja(ninja.id)}}>Delete</button>
                 </div>
            )
            } else {
                return null;
            }
        })
        return(
            <div>
            {ninjasList}
            </div>
        )
}


export default Ninjas;