// 1. import hook useContent
import React, { useContext }  from "react";
// 2. import context from appContext.js
import { Context } from "../store/appContext.js";

export const User = () => {
// 3. desestructurar store, actions desde context
        const {store, actions} = useContext(Context)
        return(
            <div className="container">
                {/*Utulizar los datos del store */}
                <h1>Tech:{store.tech}</h1>
                <h2>path: <span className="text-warning">{store.path}</span> </h2>
            </div>
    );
};