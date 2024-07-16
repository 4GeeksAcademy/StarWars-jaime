const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			tech: "Languajes",
			path: "FullStack",
			user: "alpha",
			host: 'https://playground.4geeks.com/contact/',
			starwarsHost: "https://www.swapi.tech/api/",
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
			contactId:[],
			favorites: [],


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
			},// terminas función y no olvides la puta "," o te cargas todo el codigo.
			editContact: async () => {
				const url = getStore().host + /"agendas"/ + {slug} + /"contacts"/ + {contactId} ;
				const options = {
					method: "PUT"
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
				const url = `${getStore().host}/agendas/${getStore().slug}`
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
				const url = getStore().starwarsHost + "people";
				const options = {
					method: "GET"  //Al ser un get solamente, no necesitas de las "options"
				};
				const response = await fetch(url, options); // funcion "fetch" y dentro de sus parametros tampoco es necesario el "options" al ser un get.
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data.results);
				setStore({characters: data.results})
			},
			getCharacter: async (uid) => {
				const url = getStore().starwarsHost + "people/" + uid ;
				const options = {
					method: "GET"  //Al ser un get solamente, no necesitas de las "options"
				};
				const response = await fetch(url, options); // funcion "fetch" y dentro de sus parametros tampoco es necesario el "options" al ser un get.
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				setStore({Currentcharacter: data.result}) //El "setStore" es una funcion qué si no tienes declarada en "store" te la crea automaticamente.
			},
			getPlanets: async () => {
				const url = getStore().starwarsHost + "planets" ;
				const options = {
					method: "GET"  //Al ser un get solamente, no necesitas de las "options"
				};
				const response = await fetch(url, options); // funcion "fetch" y dentro de sus parametros tampoco es necesario el "options" al ser un get.
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data.results);
				setStore({planets: data.results})
			},
			getPlanet: async (uid) => {
				const url = getStore().starwarsHost + "planets/" + uid ;
				const options = {
					method: "GET"  //Al ser un get solamente, no necesitas de las "options"
				};
				const response = await fetch(url, options); // funcion "fetch" y dentro de sus parametros tampoco es necesario el "options" al ser un get.
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data.results);
				setStore({Currentplanet: data.result})
			},
			getStarships: async () => {
				const url = getStore().starwarsHost + "starships" ;
				const options = {
					method: "GET"  //Al ser un get solamente, no necesitas de las "options"
				};
				const response = await fetch(url, options); // funcion "fetch" y dentro de sus parametros tampoco es necesario el "options" al ser un get.
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data.results);
				setStore({starships: data.results})	
			},
			getStarship: async (uid) => {
				const url = getStore().starwarsHost + "starships/" + uid ;
				const options = {
					method: "GET"  //Al ser un get solamente, no necesitas de las "options"
				};
				const response = await fetch(url, options); // funcion "fetch" y dentro de sus parametros tampoco es necesario el "options" al ser un get.
				if (!response.ok) {
					console.log("Error:", response.status, response.statusText);
					return
				}
				const data = await response.json();
				console.log(data.results);
				setStore({Currentstarship: data.result})
			},
			addFavorite: (item) => {
				setStore({ favorites: [...getStore().favorites, item]});
			},
			removeFavorite: () => {
					// vamos a filtrar el array (.filter) y vamos a devolver lo qué es distinto
			},
						
			getPosts: () => { },
			setAlert: (newAlert) => {setStore({ alert: newAlert })},
			setCurrentContact:  (contact) => {setStore({ currentContact: contact })}
		}
	};
};

export default getState;
