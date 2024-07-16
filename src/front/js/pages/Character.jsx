import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Character = () => {
    const { store, actions } = useContext(Context)
    const [characterInfo, setCharacterInfo] = useState(store.Currentcharacter)
    const navigate = useNavigate()

    useEffect(() => {
        setCharacterInfo(store.Currentcharacter);
    }, [store.Currentcharacter]);
    
    const handleOnClick = async () => {

      await  navigate("/pages/Home");
    }

    return (
        <div className="container">
                <div className="card" style={{ width: "18rem" }}>    
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${characterInfo.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{characterInfo.properties.name}</h5>
                    </div>
                </div>
                        <button onClick={handleOnClick()} className="btn btn-primary"> somewhere</button>
        </div>
    );
};

/*


const handleOnClick = () => {
    navigate("/pages/Home");
};

if (!characterInfo) {
    return <div>Loading...</div>;
}
 */

