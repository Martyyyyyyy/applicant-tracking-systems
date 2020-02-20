
export default class Client{
	clientResult(){
		let result = new Promise((resolve, reject) =>{
			let request = new XMLHttpRequest();//or use fetch
			request.open("GET","server url");
			request.onreadystatechange = () => {
				let raw = request.responseText;
				let objectified = JSON.parse(raw);
				resolve(objectified);
			}
			request.send();
		} );
		return result;
	}
} 