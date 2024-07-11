import React, { useContext } from "react";
import { Context } from "../store/appContext.js";



export const ContactDetails = () => {
    const {store, actions} = useContext(Context)
    const contact = store.currentContact
    const handleImgError = (e) => {
		console.log(e.target.src);
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}

    return(
        <div className="container">
            <h1 className="text-center">Details</h1>
            <div className="container">
                <div className="card" >
                    {!store.currentContact ? "No data"
                    :
                    <>
                    <div className="card-img" width="40px" height="60px">
                    <img src={`https://randomuser.me/api/portraits/lego/${store.currentContact.id}.jpg`} 
                    alt="profile picture" className="card-img-top"   
                        onError={handleImgError}
                    />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{ store.currentContact.name }</h5>
                        <p className="card-text">Email: { store.currentContact.email }</p>
                        <p className="card-text">Username: { store.currentContact.username }</p>
                        <p className="card-text">Website { store.currentContact.website }</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                        <p className="card-text">Some quick example</p>
                    </div>
                    </>
                        }
                </div>
            </div>
        </div>
    );
};