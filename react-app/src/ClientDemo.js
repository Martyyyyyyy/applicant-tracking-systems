
export default class ClientDemo{
	applicantList(){
		var list = new Promise( (resolve,reject) => {
			let applInfo1 = { 
					name: "Almir Omerovic",
					placeOfEmployment: "Software Engineer at DCCS, Tuzla",
					addres: "Moluhe,7500 Tuzla",
					photoURL: "https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/s960x960/36717461_2267391713287965_8766276259727540224_o.jpg?_nc_cat=104&_nc_ohc=7bOzcR-Zuf8AX-Myd80&_nc_ht=scontent.ftzl2-1.fna&oh=65a8ffe1b34fafabca4f6adf06708cad&oe=5EFE6CCE",
					};
			let applInfo2 = { 
					name: "Ina Golos",
					placeOfEmployment: "Software Engineer at CA, Tuzla",
					addres: "Stupine,7500 Tuzla",
					photoURL: "https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/28577288_775576645961592_616938734488758731_n.jpg?_nc_cat=106&_nc_ohc=fGY79cW0O9UAX-qT3g9&_nc_ht=scontent.ftzl2-1.fna&oh=6870be142173f0da87f57cead87e0a0d&oe=5EBF1C92",
					};
			let applInfo3 = { 
					name: "Arza Grbic",
					placeOfEmployment: "Software Engineer at VirginPulse, Tuzla",
					addres: "Slatina,7500 Tuzla",
					photoURL: "https://media-exp1.licdn.com/dms/image/C5603AQEIuyIfXPf4Yg/profile-displayphoto-shrink_800_800/0?e=1586995200&v=beta&t=VG_5lpt60er6gDzZvg5RgTeKBTHESfVYKrm71LX0tSM",
					};
			let l = [applInfo1,applInfo2,applInfo3];
			resolve(l);
		});
		return list;
		}

}