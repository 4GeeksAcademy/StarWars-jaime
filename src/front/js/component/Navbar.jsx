import React, { useContext } from "react"; // 1. importar el hook useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // 2. importar el Context

export const Navbar = () => {
	const {store} = useContext(Context); // 3. Desestructuramos store y actions utilizando el hook 

	return (
			<nav className="navbar navbar-light bg-secondary">
				{/* 4. Utilizar store actions.  como expresiones de JS */}
					<div className="container">
						<Link to="/" >
							<img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Star_wars_logo_alternate.svg" 
							alt="Logo" style={{width:"100px", height:"180px"}} />
						</Link>
							<div className="">
									<Link to="/pages/ContactList">
										<button className="btn btn-outline-success">Contact</button>
									</Link>

							</div>
					</div>

			</nav>
	);
};
