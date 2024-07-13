import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


export const ContacList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate ();
   {/* const handleAlert = () => {
        const dataToSend = {
            visible: true,
            back: "info",
            text: "what do you do whit the people!!"
        };
        actions.setAlert(dataToSend);
    }*/}

    const handleEye = (person) => {
        console.log(person);
        //necesito guardar los datos de person en una variable global
        //parap oder leerlos en el componente ContactDetail
        actions.setCurrentContact(person);
        //tengo qué navegar al path "/pages/ContactDetails"
        navigate("/pages/ContactDetails");
    };

    const handleEdit = (addperson) => {
        console.log(addperson);
        //necesito guardar los datos de person en una variable global
        //parap oder leerlos en el componente ContactDetail
        actions.setCurrentContact(person);
        //tengo qué navegar al path "/pages/ContactDetails"
        navigate("/pages/ContactDetails");   

    };

    const handleDelete = () => {

    }

    return (
        <div className="container text-start">
            <h1 className="text-center text-success">Consumiendo Apis con fetch {store.tech}</h1>
            {/*<button className="btn btn-warning" onClick={handleAlert}>Alert</button>*/}
            <ul className="list-group-item">
                {store.contacts.map((item) =>
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        {item.name}
                        <div>
                            <button  className="btn btn-secondary btn-sm" onClick={() =>handleEye(item)}>
                                <i className="far fa-eye"></i>
                                </button>
                            <button className="btn btn-success btn-sm" onClick={() =>handleEdit(item)}>
                                <i className="far fa-edit"></i>
                                </button>
                            <button className="btn btn-danger btn-sm" onClick={() =>handleDelete(item)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </div>

    )

}