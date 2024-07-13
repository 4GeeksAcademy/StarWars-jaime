const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [{ title: "FIRST", background: "white", initial: "white" },
			{ title: "SECOND", background: "white", initial: "white" }],
			tech: "Languajes",
			path: "FullStack",
			user: "alpha",
			host: 'https://playground.4geeks.com/contact/',
			alert: {
				visible: true,
				back: "danger",
				text: "if you see this, run you fool!"
			},
			contacts: [],
			currentContact: null,
			addContact: [],
			createAgenda: [],
			slug:[],
		},
		actions: {
			// Use getActions to call a function within a fuction () 
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				};
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}, 										// terminas función y no olvides la puta "," o te cargas todo el codigo.
			editContact: async () => {
				const url = `${process.env.BACKEND_URL}/agendas~/${slug}`;
				const options = {
					method: "POST"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data); //Imprimo en consola (Dev tools del navegador) el JSON qué me devuelve el fecth
				setStore({ contacts: data });
				localStorage.setItem("contacts",JSON.stringify(data));
				localStorage.setItem("user", getStore().user)
			},
			addContact: async () => {
				const url = "";
				const options = {
					method: "POST"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data); //Imprimo en consola (Dev tools del navegador) el JSON qué me devuelve el fecth
				setStore({ contacts: data });
				localStorage.setItem("contacts",JSON.stringify(data));
				localStorage.setItem("user", getStore().user)
			},
			deleteContact: async () => {
				const url = "";
				const options = {
					method: "DELETE"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data); //Imprimo en consola (Dev tools del navegador) el JSON qué me devuelve el fecth
				setStore({ contacts: data });
				localStorage.setItem("contacts",JSON.stringify(data));
				localStorage.setItem("user", getStore().user)
			},
			createAgenda: async () => {
				const url = `${getStore().host}agendas/${getStore().slug}`
				const options = {
					method: "POST"
				};
				const response = await response.json();
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				setStore({contacts: data});
				localStorage.setItem("contacts",JSON.stringify(data));
				localStorage.setItem("user", getStore().user)
			},
			getCharacters: async () => {

			},
			getCharacter: async () => {

			},
			getPlanets: async () => {

			},
			getStarships: async () => {

			}, 
			getPosts: () => { },
			setAlert: (newAlert) => {setStore({ alert: newAlert })},
			setCurrentContact:  (contact) => {setStore({ currentContact: contact })}
		}
	};
};

export default getState;
