General practitioners are the first point of contact for Australia's primary health care system.
So, if you're a person with poor English skills and limited knowledge of Australia's health system, how do you know what services to access?
What if you don't know what GPs are in your local area, which ones bulk bill, and which ones support you language?
It can be hard to know where to begin.
This app will aim to bridge that gap so refugees can make the first point of contact with Australia's wider primary health care network.

--

Give use case. - paint the picture
Explain where it's available, tech. - website, etc.
How does this solve the problem?

!!Show them the demo.!!
As I' doing this, explain how website works, and how it solves problem.

How do I get the information?
	To ask about this data - 
	LOCAL COUNCILS FOR THE LANGUAGE SERVICES
	MEDICARE / Health.gov (whatever) WEBSITES FOR BULK BILLING DETAILS
	PRIMARY HEALTH CARE NETWORKS - might contain details of both
	We're sure there's a list of bulk-billing GPs.

	SSI has a list of doctors.
	The NSW Refugee Health Service refers people to GPs. - Do they have details about who bulk bills, and who speaks what languages?

	To get the PHA data, concentrate on the four in Sydney.

	The other idea is to pay a company called imshealth for the data. They have an international list of doctors.
	Since Centrelink stands to save money on this idea, maybe I could approach the government for some funding.
	There's another company called Ceguden.
	AMA doesn't have anything, Royal College of GPs may do.

	If we're going to add doctors to the list upon request, they need to have criteria.
	One should be that they are registered with the national hotline - tisnational.com

--

MVP -
	- Cater for at least five foreign languages. Arabic and four others. Find out what the major languages are from ABS. 
	- Must show people what bulk billed services there are.
	- Must tell people if their language is catered for.
	- Must have the English details translated into whichever language the person chooses.
	- Sydney only at first.

SCALABLE -
	- Add functionality to let women search for female doctors, or male search for male doctors.
	- All of Australia eventually.
	- Eventually, add dentists and any other health practitioners you can think of.
	- Include a place on the website that says things to say to the doctor.
	- Add a way for doctors to list themself? Is this even viable?

AIM - 
	- To create an interactive web app that allows refugees to easily find a bulk billed GP, in their local area, who facilitates interpretation.

METHOD -

	Website -

		- Must be accessible via phone and desktop PCs. Not every refugee has access to a phone.
		- Must have a minimum of language used. Use icons when available

		Presentation -

			The App will have three screens.
			
			1. 
			The first will prompt a person to select their language.
			Once their language is selected, they will be taken to the second screen.
			Once their language is selected, all language will be in English, with their language small and underneath.
			THis will have the second benefit of the person beng able to learn English

			2.
			The second screen will ask for their location details, and ask them to filter the resuults acccording to what they want to find.
			On phone, ask people to allow their GPS to see where their phone is.
			On PC, ask people for their location, or prompt them tp call their case manager to find out.

			3. 
			The third will have a map with all the appropriate doctors' locations.
			The tooltip should be large enough to have all the details.
			If it takes up the entire screen, rather than load a tooltip, load a div that takes up the screen and has a button to get rid of the tooltip.

	Demonstration - 

		Mock data. 
		Pick a hard coded location, and hard coded GP locations.

IDEA LOG -
	Initial idea -
		- After hearing Aziz talk about what it was like to find a psychologist, I set out to make a map of bulk billed psychs.
		- Then, I got feedback from several other refugees and SSI people. 
		- They said the referrals to a psych come from a GP, but the issue was they needed to find local GPs, bulk billed, who spoke the language.

ROADBLOCKS -
	The data
		- To my knowledge, there is no database of GPs across Australia and which ones bulk bill, or which lannguages they speak.
			- Collecting this could be expensive.
		- However, I've been told anecdotally that when a refugee wants to make an appointment with a GP, they must talk to Centerlink to do it. Centrelink somehow puts them in touch.
			- They must spend a lot of money on that.
		- Therefore, I'm thinking I could get a grant from the government to compile the database of Doctors, first in Sydney and then across Australia.
			- If this is the case, definitely collect the male/female information for the MVP.

