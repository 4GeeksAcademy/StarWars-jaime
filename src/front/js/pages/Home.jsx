import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { User } from "./User.jsx";
import { Alert } from "../component/Alert.jsx";
import { ContacList } from "./ContactList.jsx";
import BackgroundVideo from "../component/VideoBg.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const handleImgError = (e) => {
		console.log(e.target.src);
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}

	return (
		<div className="text-center mt-5">
			
			<BackgroundVideo/>
			{/*<img src={"https://imgs.search.brave.com/QJkS4Cxw53er9PPCzO8TTB-L-EQrByaxwNVvVmY_2Vs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTMy/NzgxNDEvcGhvdG8v/ZWdnLXdhcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVE2/aFhMMzMxSlpMU0Iz/UTBrOExxWmQtZlg3/V2EyeURLb0hhaDlD/ZTZhM2c9"}
				onError={handleImgError}
			/>
			<div className="container mt-5">
				<ContacList />
			</div>*/}
		</div>
	);
};
