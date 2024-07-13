import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Characters = () => {
    const { store, actions } = useContext(Context)
    const [characterList, setCharacterList] = useEffect()


    useEffect(() => {
         actions.getCharacters()
         setCharacterList(store.characters)
    }, [])


    return (
        <div>
           {characterList && characterList.map(() => (
                <div class="card" style={{ width: "18rem" }}>    
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))} 
        </div>
    );
};

{/*El stilo tiene qué ser declarado dentro de llaves por ser de javascript como objeto, para qué se renderice correctamente en un componente */}