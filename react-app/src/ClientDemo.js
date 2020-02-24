
export default class ClientDemo{

	getAllApplicants(){
		let applicants = new Promise( resolve => {
			let allApplicants = [
				{"addres":"Moluhe,7500 Tuzla","applicantFirstName":"Almir","applicantId":1,"applicantLastName":"Omerovic","applicantPhotoURL":"https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/s960x960/36717461_2267391713287965_8766276259727540224_o.jpg?_nc_cat=104&_nc_ohc=7bOzcR-Zuf8AX-Myd80&_nc_ht=scontent.ftzl2-1.fna&oh=65a8ffe1b34fafabca4f6adf06708cad&oe=5EFE6CCE","fullName":"Almir Omerovic","placeOfEmployment":"Software Engineer at DCCS, Tuzla"},
				{"addres":"Slatina, 7500 Tuzla","applicantFirstName":"Arza","applicantId":2,"applicantLastName":"Grbic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C5603AQEIuyIfXPf4Yg/profile-displayphoto-shrink_800_800/0?e=1586995200&v=beta&t=VG_5lpt60er6gDzZvg5RgTeKBTHESfVYKrm71LX0tSM","fullName":"Arza Grbic","placeOfEmployment":"Software Engineer at VirginPulse, Tuzla"},
				{"addres":"7500 Tuzla, BiH","applicantFirstName":"Ina","applicantId":3,"applicantLastName":"Golos","applicantPhotoURL":"https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/28577288_775576645961592_616938734488758731_n.jpg?_nc_cat=106&_nc_ohc=fGY79cW0O9UAX-qT3g9&_nc_ht=scontent.ftzl2-1.fna&oh=6870be142173f0da87f57cead87e0a0d&oe=5EBF1C92","fullName":"Ina Golos","placeOfEmployment":"Software Engineer at Cape Ann Enterprises, Tuzla"},
				{"addres":"Tuzla, Bosnia and Herzegovina","applicantFirstName":"Adisa","applicantId":4,"applicantLastName":"Muratbegovic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C4E03AQHz2J3dxcrgng/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=590GrBPX_Qo9Sgr1XOUJ90xhnGxnWEfFR3AGzfXu5IU","fullName":"Adisa Muratbegovic","placeOfEmployment":"-"},
				{"addres":"Zivinice, Bosnia and Herzegovina","applicantFirstName":"Samir","applicantId":5,"applicantLastName":"Halilcevic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C4D03AQG-NyVxO5Ww4Q/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=FOavdd_8nZyYG5umtCybuQa76zfE4kh6sGCobFrRDnw","fullName":"Samir Halilcevic","placeOfEmployment":"Teaching Assistant at Faculty of Electrical Engineering"},
				{"addres":"Tuzla, Bosnia and Herzegovina","applicantFirstName":"Slaven","applicantId":6,"applicantLastName":"Ostojic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C4E03AQHZNr4VIQz4Fw/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=Lg3dU9swjhfVAzlHJMvCF6hYJqwK4qMQMM64XK_-wXs","fullName":"Slaven Ostojic","placeOfEmployment":"Software Engineer at Infobip, Tuzla"},
				{"addres":"Tuzla, Bosnia and Herzegovina","applicantFirstName":"Haris","applicantId":7,"applicantLastName":"Ahmetovic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C4E03AQEhtktBUvjTaA/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=pr9qpAnpWAxG4Q41MUBKUqUEWuFhli1wA0DTeupsHKE","fullName":"Haris Ahmetovic","placeOfEmployment":"Associate Software Engineer at Virgin Pulse, Tuzla"},
				{"addres":"Gracanica, Bosnia and Herzegovina","applicantFirstName":"Merima","applicantId":8,"applicantLastName":"Dzinic","applicantPhotoURL":"https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-1/c2.0.240.240a/p240x240/46451111_10213977607933994_6027673999331295232_o.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=Hfq3U2noq68AX-Qha6a&_nc_ht=scontent.ftzl2-1.fna&oh=fa73c35feac1e80d558e7f1cccc4df84&oe=5EBC843D","fullName":"Merima Dzinic","placeOfEmployment":"Software Engineer at Tring, Gracanica"},
				{"addres":"Srebrenik, Bosnia and Herzegovina","applicantFirstName":"Lejla","applicantId":9,"applicantLastName":"Hodzic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C4D03AQGbEMYnQknptQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=9uScljTr01bhSdMb5qlCAZbENH-likYYSKOP0Sg_Kn0","fullName":"Lejla Hodzic","placeOfEmployment":"Software Engineer at Bicom Systems, Tuzla"},
				{"addres":"Tuzla, Bosnia and Herzegovina","applicantFirstName":"Ademir","applicantId":10,"applicantLastName":"Burgic","applicantPhotoURL":"https://media-exp1.licdn.com/dms/image/C5603AQFyJN2HAIFxFA/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=cMk42BdrEWaKsp2RAw-kNOSWKQi44fpKPXxxxqkJaR4","fullName":"Ademir Burgic","placeOfEmployment":"Software Developer at Cape Ann Enterprises, Tuzla"}
				];
			resolve(allApplicants);
		} );
		return applicants;
	}

}