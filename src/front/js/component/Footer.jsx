import React, { useContext } from "react";
import { Context } from "../store/appContext.js";



export const Footer = () => {
	const { store, actions } = useContext(Context);
	
	const handleAlert = () => {
        const dataToSend = {
            visible: true,
            back: "warning",
            text: "Stop it!!"
        };
        actions.setAlert(dataToSend);
    }


	return(
	<footer className="footer mt-auto py-3 text-center">
		<button className="btn btn-info" onClick={handleAlert}>msg</button>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://www.linkedin.com/in/jaime-body-footer/" target="_blank">Go for it</a>
		</p>
	</footer>
	)
};
