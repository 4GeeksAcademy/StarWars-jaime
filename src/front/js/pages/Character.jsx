import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Character = () => {
    const { store, actions } = useContext(Context)
    const [characterInfo, setCharacterInfo] = useState(store.Currentcharacter)
    const navigate = useNavigate()


    const handleOnClick = async () => {

        navigate("/");
    }

    return (
        <div className="container">
                <div class="card" style={{ width: "18rem" }}>    
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${characterInfo.uid}.jpg`} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{characterInfo.properties.name}</h5>
                        <button onClick={handleOnClick()} class="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
        </div>
    );
};