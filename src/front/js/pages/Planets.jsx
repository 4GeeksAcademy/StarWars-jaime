import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context)
    const [planetsList, setPlanetsList] = useState([])
    const navigate = useNavigate()


    const dataControl = async() => { 
        await actions.getPlanets()
        setPlanetsList(store.planets)
    }

    useEffect(() => {
        dataControl()
    }, [])

    const handleOnClick = async (id) => {
        await actions.getPlanet(id)
        navigate("/pages/Planet");
    }

    return (
        <div className="container-fluid text-center">
           {planetsList && planetsList.map((item, index) => (
                <div className="card" style={{ width: "18rem" }}>    
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
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