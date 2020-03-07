CREATE TABLE applicant(applicantId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY , firstName VARCHAR(20) NOT NULL , lastName VARCHAR(20) NOT NULL ,
 placeOfEmpl VARCHAR(100), address VARCHAR(100), photoUrl VARCHAR(500) );

CREATE TABLE experience(expId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, companyName VARCHAR(100) NOT NULL ,photoUrl VARCHAR(500),
  position VARCHAR(100) NOT NULL , time VARCHAR(30),place VARCHAR(30), applicantId integer NOT NULL ,
  FOREIGN KEY (applicantId) REFERENCES applicant(applicantId));

CREATE TABLE education(eduId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY , instName varchar(50) NOT NULL,
 photoUrl varchar(500), diploma varchar(100), modul varchar(100), time varchar(30) NOT NULL,
 applicantId integer NOT NULL, FOREIGN KEY (applicantId) REFERENCES applicant(applicantId));

CREATE TABLE message(msgId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, sender varchar(10) NOT NULL, msg varchar(500) NOT NULL,
                     date varchar(50), applicantId integer NOT NULL, FOREIGN KEY (applicantId) REFERENCES applicant(applicantId));

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Almir', 'Omerovic', 'Software Engineer at DCCS, Tuzla','Tuzla, Bosnia and Herzegovina',
        'https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/s960x960/36717461_2267391713287965_8766276259727540224_o.jpg?_nc_cat=104&_nc_ohc=7bOzcR-Zuf8AX-Myd80&_nc_ht=scontent.ftzl2-1.fna&oh=65a8ffe1b34fafabca4f6adf06708cad&oe=5EFE6CCE');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Arza', 'Grbic', 'Software Engineer at VirginPulse, Tuzla','Tuzla, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C5603AQEIuyIfXPf4Yg/profile-displayphoto-shrink_800_800/0?e=1586995200&v=beta&t=VG_5lpt60er6gDzZvg5RgTeKBTHESfVYKrm71LX0tSM');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Adisa', 'Muratbegovic', '-','Tuzla, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C4E03AQHz2J3dxcrgng/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=590GrBPX_Qo9Sgr1XOUJ90xhnGxnWEfFR3AGzfXu5IU');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Ademir', 'Burgic', 'Software Developer at Cape Ann Enterprises, Tuzla','Tuzla, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C5603AQFyJN2HAIFxFA/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=cMk42BdrEWaKsp2RAw-kNOSWKQi44fpKPXxxxqkJaR4');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Haris', 'Ahmetovic', 'Associate Software Engineer at Virgin Pulse, Tuzla','Tuzla, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C4E03AQEhtktBUvjTaA/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=pr9qpAnpWAxG4Q41MUBKUqUEWuFhli1wA0DTeupsHKE');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Ina', 'Golos', 'Software Engineer at Cape Ann Enterprises, Tuzla','Tuzla, Bosnia and Herzegovina',
        'https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/28577288_775576645961592_616938734488758731_n.jpg?_nc_cat=106&_nc_ohc=fGY79cW0O9UAX-qT3g9&_nc_ht=scontent.ftzl2-1.fna&oh=6870be142173f0da87f57cead87e0a0d&oe=5EBF1C92');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Lejla', 'Hodzic', 'Software Engineer at Bicom Systems, Tuzla','Srebrenik, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C4D03AQGbEMYnQknptQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=9uScljTr01bhSdMb5qlCAZbENH-likYYSKOP0Sg_Kn0');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Merima', 'Dzinic', 'Software Engineer at Tring, Gracanica','Gracanica, Bosnia and Herzegovina',
        'https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-1/c2.0.240.240a/p240x240/46451111_10213977607933994_6027673999331295232_o.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=Hfq3U2noq68AX-Qha6a&_nc_ht=scontent.ftzl2-1.fna&oh=fa73c35feac1e80d558e7f1cccc4df84&oe=5EBC843D');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Samir', 'Halilcevic', 'Software Developer at Marvelsoft','Zivinice, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C4D03AQG-NyVxO5Ww4Q/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=FOavdd_8nZyYG5umtCybuQa76zfE4kh6sGCobFrRDnw');

INSERT INTO applicant(firstName, lastName, placeOfEmpl, address,photoUrl)
VALUES ('Slaven', 'Ostojic', 'Software Engineer at Infobip, Tuzla','Tuzla, Bosnia and Herzegovina',
        'https://media-exp1.licdn.com/dms/image/C4E03AQHZNr4VIQz4Fw/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=Lg3dU9swjhfVAzlHJMvCF6hYJqwK4qMQMM64XK_-wXs');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('DCCS', 'Software Engineer', 'Feb 2017 - Present', 'Tuzla', 1,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQH1INgMxPceXA/company-logo_200_200/0?e=1591833600&v=beta&t=Sgp8bobVzleZD5uC-2EwYPF7WaDEtbJDo-FpyJf2I00');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Virgin Pulse', 'Associate Software Developer', 'Nov 2018 - Present', 'Tuzla', 2,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQFWga-jSjuEow/company-logo_100_100/0?e=1590624000&v=beta&t=qDtm81I8HnhM8TQABE6qEYknf3UnvPFx9t1TGse4oQk');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Virgin Pulse', 'Associate Software Engineer', 'Sep 2019 - Feb 2020', 'Tuzla', 3,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQFWga-jSjuEow/company-logo_100_100/0?e=1590624000&v=beta&t=qDtm81I8HnhM8TQABE6qEYknf3UnvPFx9t1TGse4oQk');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Cape Ann Enterprises', 'Software Developer', 'Feb 2018 - Present', 'Tuzla', 4,
        'https://media-exp1.licdn.com/dms/image/C560BAQGDy4uBamexCw/company-logo_100_100/0?e=1590624000&v=beta&t=NPasM5ELxCNdi_PEnpU5aOxZA6MjPAn10TMOo2pBDqU');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Virgin Pulse', 'Associate Software Engineer', 'Apr 2019 - Present', 'Tuzla', 5,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQFWga-jSjuEow/company-logo_100_100/0?e=1590624000&v=beta&t=qDtm81I8HnhM8TQABE6qEYknf3UnvPFx9t1TGse4oQk');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Cape Ann Enterprises', 'Associate Software Developer', 'Feb 2019 - Present', 'Tuzla', 6,
        'https://media-exp1.licdn.com/dms/image/C560BAQGDy4uBamexCw/company-logo_100_100/0?e=1590624000&v=beta&t=NPasM5ELxCNdi_PEnpU5aOxZA6MjPAn10TMOo2pBDqU');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Bicom Systems', 'Software Engineer', 'Sep 2018 - Present', 'Tuzla', 7,
        'https://media-exp1.licdn.com/dms/image/C4D0BAQHgMX2bW0bYnQ/company-logo_100_100/0?e=1590624000&v=beta&t=Hr4ghK8zvXEMiLcDxIKNcI6D_CiP5g_WjBN1RMbMyVQ');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Tring d.o.o.', 'Software Developer', 'Sep 2019 - Present', 'Tuzla', 8,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQFgRiOHnwV-0A/company-logo_200_200/0?e=1590624000&v=beta&t=CzsLvDOhBw6wnmkDLpKNa3OEvlaqUmdy4HWqBuYOD0Q');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Marvelsoft', 'Software Developer', 'Nov 2016 - Present', 'Tuzla', 9,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQE0FI3E8-O4Cg/company-logo_200_200/0?e=1591833600&v=beta&t=NOFcN40vNJwcLJiWLibNEpckFy39Y1p2gTnuhnQ0N6I');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Marvelsoft', 'Senior Software Developer', 'Sep 2014 - Mar 2019', 'Tuzla', 10,
        'https://media-exp1.licdn.com/dms/image/C4E0BAQE0FI3E8-O4Cg/company-logo_100_100/0?e=1590624000&v=beta&t=x55cr3XgHWclXd-ho2iegHdM9VcU4lhG7urK8Haviho');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Cape Ann Enterprises', 'Web Developer', 'Jan 2014 - Jun 2014', 'Tuzla', 10,
        'https://media-exp1.licdn.com/dms/image/C560BAQGDy4uBamexCw/company-logo_100_100/0?e=1590624000&v=beta&t=NPasM5ELxCNdi_PEnpU5aOxZA6MjPAn10TMOo2pBDqU');

INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl)
VALUES ('Infobip','Software Engineer','Apr 2019  - Present', 'Tuzla', 10,
        'https://media-exp1.licdn.com/dms/image/C4D0BAQFYqR8IieWOFQ/company-logo_200_200/0?e=1591833600&v=beta&t=5wBPrBf1mzIcw-3NNgQsLvZD-Flwhp68YQ9eaNxEkFc');

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2019', 1);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2019', 2);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2019', 3);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2013 - 2018', 4);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2013 - 2019', 5);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2019', 6);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2018', 7);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Master''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2018 - 2019', 7);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2018', 8);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2014 - 2018', 9);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Master''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2018 - 2019', 9);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Bachelor''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2010 - 2014', 10);

INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId)
VALUES ('University of Tuzla','https://lh3.googleusercontent.com/proxy/9QaXBQ9HdDXpY01A-dMhfisYBNrZr9k60hZ3unYVITTdWPRQaWohWwtuojlNs2cJFCE6F_0ECRC6kjo442SJqJ7CSF9p9apg2z-05kW4e_xm6P9S09gQNaR7q73qEtFjcaed_h0',
        'Master''s degree, Computer Science and Informatics','Faculty of Electrical Engineering, Computer Science',
        '2018 - 2019', 10);

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Almir...','Jan 28, 12:33 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('applicant', 'Hi, Yes I can...','Jan 28, 12:43 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'It would be great if you...','Jan 28, 12:53 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('applicant', 'I''ll see what I can do...','Jan 28, 12:55 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Also...','Jan 28, 12:57 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('applicant', 'Maybe if...','Jan 28, 13:01 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'It''s a good idea to...','Jan 28, 13:11 AM', 1 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Arza...','Jan 28, 13:33 AM', 2 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Adisa...','Jan 29, 12:33 AM', 3 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Ademir...','Jan 22, 15:33 AM',4 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Haris...','Jan 10, 10:33 AM', 5 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Ina...','Jan 28, 14:33 AM', 6 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Lejla...','Jan 18, 12:33 AM', 7 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Merima...','Jan 11, 12:33 AM', 8 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Samir...','Jan 28, 12:43 AM', 9 );

INSERT INTO message(sender, msg, date, applicantId)
VALUES ('admin', 'Hi, Slaven...','Jan 30, 11:33 AM', 10 );

