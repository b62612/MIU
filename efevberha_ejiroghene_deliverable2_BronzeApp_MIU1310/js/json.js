/* 
Ejiroghene B. Efevberha
Deliverable 2
Talent Scout App
MIU 1310
 */

var jsonData = {
	"player1" : {
		"agegrades": ["Age Category:", "U_17"],
		"firstname": ["First Name:", "Oghenekaro"],
		"lastname": ["Last Name:", "Etebo"],
		"email": ["Agent Email:", "dannyshittu@gmail.com"],
		"phone": ["Agent Phone:", "5132527455"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "8"],
		"date": ["Observation Date:", "2013-09-11"],
		"notes": ["Notes:", "A very promising player."]
	},
	"player2" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Nosa"],
		"lastname": ["Last Name:", "Igiebor"],
		"email": ["Agent Email:", "samsonsiasia@yahoo.com"],
		"phone": ["Agent Phone:", "8592554111"],
		"position": ["Field Position:", "Defense"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "6"],
		"date": ["Observation Date:", "2013-07-23"],
		"notes": ["Notes:", "A super regular at Real Betis."]
	},
	"player3" : {
		"agegrades": ["Age Category:", "U_17"],
		"firstname": ["First Name:", "Isaac"],
		"lastname": ["Last Name:", "Success"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "9"],
		"date": ["Observation Date:", "2013-07-07"],
		"notes": ["Notes:", "Expected to lead the Golden Eaglets"]
	},
	"player4" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Macaulay"],
		"lastname": ["Last Name:", "Chrisantus"],
		"email": ["Agent Email:", "sundayoliseh@hotmail.com"],
		"phone": ["Agent Phone:", "5874815723"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "2013-01-17"],
		"notes": ["Notes:", "Was the most promising young star 10 years ago."]
	},
	"player5" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "John"],
		"lastname": ["Last Name:", "Ogu"],
		"email": ["Agent Email:", "stone@meekness.com"],
		"phone": ["Agent Phone:", "4392260228"],
		"position": ["Field Position:", "Midfield"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "5"],
		"date": ["Observation Date:", "2013-09-27"],
		"notes": ["Notes:", "Plies his trade in Portugal."]
	},
	"player6" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "John"],
		"lastname": ["Last Name:", "Utaka"],
		"email": ["Agent Email:", "apribadi@balimandira.com"],
		"phone": ["Agent Phone:", "7932755338"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "2013-04-11"],
		"notes": ["Notes:", "France has been his most successful sojourn."]
	},
	"player7" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Fegor"],
		"lastname": ["Last Name:", "Ogude"],
		"email": ["Agent Email:", "sm@ramayanahotel.com"],
		"phone": ["Agent Phone:", "1746816097"],
		"position": ["Field Position:", "Midfield"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "6"],
		"date": ["Observation Date:", "2013-05-13"],
		"notes": ["Notes:", "Broke into the Super Eagles under Samson Siasia."]
	},
	"player8" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Ahmed"],
		"lastname": ["Last Name:", "Musa"],
		"email": ["Agent Email:", "grfurniture@yahoo.com"],
		"phone": ["Agent Phone:", "5998402376"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "8"],
		"date": ["Observation Date:", "2013-02-23"],
		"notes": ["Notes:", "Very fast winger."]
	},
	"player9" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Mark"],
		"lastname": ["Last Name:", "Adejo"],
		"email": ["Agent Email:", "fadlycak'p@yahoo.com"],
		"phone": ["Agent Phone:", "1169952596"],
		"position": ["Field Position:", "Defense"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "5"],
		"date": ["Observation Date:", "2013-01-07"],
		"notes": ["Notes:", "Still waiting for an international call-up."]
	},
	"player10" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Ogbuke"],
		"lastname": ["Last Name:", "Obasi"],
		"email": ["Agent Email:", "kikuyaart@yahoo.com"],
		"phone": ["Agent Phone:", "1169952596"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "2013-05-07"],
		"notes": ["Notes:", "Injury prone Germany based striker."]
	},
	"player11" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Yakubu"],
		"lastname": ["Last Name:", "Aiyegbeni"],
		"email": ["Agent Email:", "dannyshittu@gmail.com"],
		"phone": ["Agent Phone:", "5132527455"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "8"],
		"date": ["Observation Date:", "2000-09-11"],
		"notes": ["Notes:", "A very prolific striker currently based in China."]
	},
	"player12" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Osaze"],
		"lastname": ["Last Name:", "Odemwingie"],
		"email": ["Agent Email:", "samsonsiasia@yahoo.com"],
		"phone": ["Agent Phone:", "8592554111"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "2011-06-21"],
		"notes": ["Notes:", "Known for his rants on twitter."]
	},
	"player13" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Haruna"],
		"lastname": ["Last Name:", "Lukman"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Midfield"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "2009-07-17"],
		"notes": ["Notes:", "Expected to return to the Super Eagles."]
	},
	"player14" : {
		"agegrades": ["Age Category:", "U_17"],
		"firstname": ["First Name:", "Musa"],
		"lastname": ["Last Name:", "Yahaya"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "9"],
		"date": ["Observation Date:", "2013-03-07"],
		"notes": ["Notes:", "One of the prominent members of the Golden Eaglets."]
	},
	"player15" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Rabiu"],
		"lastname": ["Last Name:", "Ibrahim"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Midfield"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "6"],
		"date": ["Observation Date:", "2007-11-07"],
		"notes": ["Notes:", "Not been able to meet up to high expectation."]
	},
	"player16" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Efe"],
		"lastname": ["Last Name:", "Ambrose"],
		"email": ["Agent Email:", "dannyshittu@gmail.com"],
		"phone": ["Agent Phone:", "5132527455"],
		"position": ["Field Position:", "Defense"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "8"],
		"date": ["Observation Date:", "2012-09-21"],
		"notes": ["Notes:", "A super regular for Celtic FC."]
	},
	"player17" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Mikel"],
		"lastname": ["Last Name:", "Obi"],
		"email": ["Agent Email:", "samsonsiasia@yahoo.com"],
		"phone": ["Agent Phone:", "8592554111"],
		"position": ["Field Position:", "Midfield"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "8"],
		"date": ["Observation Date:", "2007-07-13"],
		"notes": ["Notes:", "Plays an unnatural Defensive role at Chelsea."]
	},
	"player18" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Danny"],
		"lastname": ["Last Name:", "Shittu"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Defense"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "8"],
		"date": ["Observation Date:", "2000-12-07"],
		"notes": ["Notes:", "A star player at Millwall FC"]
	},
	"player19" : {
		"agegrades": ["Age Category:", "Over_23"],
		"firstname": ["First Name:", "Shola"],
		"lastname": ["Last Name:", "Ameobi"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Forward"],
		"urgency": ["Urgent:", "No"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "1999-07-27"],
		"notes": ["Notes:", "A super substitute for the Super Eagles"]
	},
	"player20" : {
		"agegrades": ["Age Category:", "U_23"],
		"firstname": ["First Name:", "Wasiu"],
		"lastname": ["Last Name:", "Taiwo"],
		"email": ["Agent Email:", "babayaro@gmail.com"],
		"phone": ["Agent Phone:", "4195657768"],
		"position": ["Field Position:", "Defense"],
		"urgency": ["Urgent:", "Yes"],
		"rating": ["Player Rating:", "7"],
		"date": ["Observation Date:", "2009-07-27"],
		"notes": ["Notes:", "Waiting for a Super Eagles recall"]
	}
}
	
	
	
	
				