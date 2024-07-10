import React, { useContext } from "react"; // 1. importar el hook useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // 2. importar el Context

export const Navbar = () => {
	const {store} = useContext(Context); // 3. Desestructuramos store y actions utilizando el hook 

	return (
			<nav className="navbar navbar-light bg-light">
				{/* 4. Utilizar store actions.  como expresiones de JS */}
					<div className="container">
						<Link to="/" >
							<i className="fa-solid fa-sitemap fa-2x text-opacity-75 me-2"></i>
							<span className="navbar-brand mb-0 h1">{store.tech}</span>
						</Link>
							<div className="ml-auto">
									<Link to="/pages/User">
										<button className="btn btn-outline-primary">User</button>
									</Link>

							</div>
					</div>

			</nav>
	);
};
