import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { User } from "./User.jsx";
import { Alert } from "../component/Alert.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
		<User />
		<Alert />
		</div>
	);
};
