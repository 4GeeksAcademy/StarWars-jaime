import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


export const ContacList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate ();
    const handleAlert = () => {
        const dataToSend = {
            visible: true,
            back: "info",
            text: "what do you do whit the people!!"
        };
        actions.setAlert(dataToSend);
    }

    const handleEye = (person) => {
        console.log(person);
        //necesito guardar los datos de person en una variable global
        //parap oder leerlos en el componente ContactDetail
        actions.setCurrentContact(person);
        //tengo qué navegar al path "/pages/ContactDetails"
        navigate("/pages/ContactDetails");
    };
    

    return (
        <div className="container text-start">
            <h1 className="text-center text-success">Consumiendo Apis con fetch {store.tech}</h1>
            <button className="btn btn-warning" onClick={handleAlert}>Alert</button>
            <ul className="list-group">
                {store.contacts.map((item) =>
                    <li key={"item.id"} className="list-group-item d-flex justify-content-between">
                        {item.name}
                        <div>
                            <span className="text-primary me-2" onClick={() =>handleEye(item)}><i className="far fa-eye"></i></span>
                            <span className="text-success me-2"><i className="far fa-edit"></i></span>
                            <span className="text-danger"><i className="fas fa-trash"></i></span>
                        </div>
                    </li>
                )}
            </ul>
        </div>

    )

}