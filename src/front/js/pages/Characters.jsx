import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Characters = () => {
    const { store, actions } = useContext(Context)
    const [characterList, setCharacterList] = useState([])
    const navigate = useNavigate()


    const dataControl = async() => { 
        await actions.getCharacters()
        setCharacterList(store.characters)
    }

    useEffect(() => {
        dataControl()
    }, [])

    const handleOnClick = async (id) => {
        await actions.getCharacter(id)
        navigate("/pages/Character");
    }

    return (
        <div className="container-fluid ">
           {characterList && characterList.map((item, index) => (
                <div key={index} className="card text-center ms-lg-5 ms-md-4 me-sm-2" style={{ width: "18rem" }}>    
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <button onClick={()=>handleOnClick(item.uid)} className="btn btn-primary">Go somewhere</button>
                        
                    </div>
                </div>
            ))} 
        </div>
    );
};

{/*En la linea 18: El estilo tiene qué ser declarado dentro de llaves por ser de javascript como objeto, para qué se renderice correctamente en un componente */}