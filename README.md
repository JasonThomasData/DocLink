##DocLink

###A way for refugees in Australia (and their support workers) to find refugee-friendly doctors.

Those doctors bulk bill and can either provide language translators or speak the same language as the refugee. Refugee support services in Australia know where these services are. 

The goal with this app is to

- Collect this anecdotal information about these doctors from individual support workers.

- Create a web app for refugees and support workers alike to easily find an service in a location that suits the person using the app.

The intended users are refugees who need to find doctors, support workers who wish to archive this knowldege and support workers who wish to help refugees find doctors.

This app could be used elsewhere, but for now the scope of use is within Sydney. The project is scalable and could be expanded to include other areas with time and enough support.

####Some historical background

This idea first came about at the Techfugees hackathon in Sydney. FYI, that was a great hackathon, because refugees were there. Our team was able to talk to actual refugees and service providers.

For this reason, we know:

- Finding appropriate doctors is a problem for refugees

- Our app could be a great solution

###The data collection method

This is the simplest part of this project. Currently, we provide a Google Form to services that enter the details for us.

We can not assume these details to be super accurate. Therefore, someone will need to check these details once every while.

Since this process needs to be manual, the simple format of a Google Form suits our needs.

###The app itself

A Rails app optimised for phone, also available on PC. Not all users will be on phone, so it's important that this site is available from a wide range of devices.

We are using Rails because it has a lot of the features we need.

The original map prototype was a JavaScript page, and you can see that version in [previous commits](https://github.com/JasonThomasData/DocLink/tree/647fcda5701d444ce19b5a1bf916492d0fafbfdc)

For the language translation, this app will use actual translations by actual translators. We have ideas about where to do this, mainly via SBS, who have stated their wish to be involved in some way.

The user options are reflected in the URL, which means if a service provider finds a doctor for a refugee and sends it to them via email or SMS, those options will be in the link. The recipient will be directed to exactly the same content the sender was viewing.

#####This project does the following things

- Keeps details of services and doctors in a database

- Allows users to select their language

- Allows users to search for doctors in a specific location, overriding the automated geolocation

- Provides details about the doctor, including phone number

- Gives the user a map link of doctor's location

#####The app will additionally do the following things

- Detects device location to search for doctors

- Detects browser's default language

- Gives google maps the device's current location as a param to find directions

- Have an about page in the app with details about its purpose and methods, etc

- A notice on the home page to inform the user their details are not being collected

- Provide contact details for doctors to opt out

- Allows user to filter results by type of service (possible feature for a much-advanced version)

###Usage and installation

This project uses ```Ruby 2.2.4``` and the production version will run on a Heroku account. Most development has been on Apple Mac and Ubuntu machines.

Using a Linux machine, these commands will get the project to a working state (this was the process I used on a new Linux machine recently).

First, clone this repo to your machine ```git clone https://github.com/JasonThomasData/DocLink.git```

```sudo apt-get update```

Go and get RVM installed. You'll need this run the version of ruby we run. Read this - https://rvm.io/rvm/install

```rvm use 2.2.4```

If that fails, because that version is not installed. To install it:

```rvm install ruby-2.2.4```

```rvm gemset install global```

```rvm gemset use global```

The below packages are required for Nokogiri:

```sudo apt-get install build-essential openssl libreadline6 libreadline6-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-0 libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison subversion```

These are required for PostgresSQL:

```sudo apt-get install postgresql postgresql-contrib libpq-dev```

This is required for json 1.8.3:

```sudo apt-get install ruby-dev```

This is one way to enable the uglifier gem to work. See here for more details - http://stackoverflow.com/questions/34420554/there-was-an-error-while-trying-to-load-the-gem-uglifier-bundlergemrequire

```sudo apt-get install nodejs```

```sudo apt-get install bundler```

This will install all the gems we use:

```bundle````

####Installing and using PostgreSQL

This is a really good read on how to do this with a Linux machine - https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-ubuntu-14-04

Here's a watered-down version (be sure to replace pguser with your actual user name):

```sudo -u postgres createuser -s pguser```

Make sure you're in the project directory, then run: 

```rake db:create```

```rake db:migrate```

###Concerns and issues overcome

The design and goals for this app have changed overtime, after careful consideration of what the problem was, what the solution is and who this benefits.

One concern was that doctors who move and change their address will remain on the website. To meet this concern, it may be necessary for someone to occassionally check details are up to date.

Should a doctor want to remove him/herself from this list, they should be able to do so.

We were concerned that people from less democratic nations might be concerned about privacy. To address this, we will not collect user details and will have a notice to say what we won't collect, otherwise refugees may not use the app out of fear.

Many issues are yet to be diagnosed, since no user testing has been conducted yet. This will reveal further needs and issues during testing.

###Contributing

These two people currently contribute:

- [@equivalentideas](https://github.com/equivalentideas)
- [@JasonThomasData](https://github.com/jasonthomasdata)

We would like to see more people contribute too. Please get in touch! 

###Copyright/license

This project is in the public domain, and is free from copyright. This is offered as-is and the contributors accept no liability for others who wish to use the code.

Ideally, we would like for this project to be copied/modified/repackaged etc in other situations that help people in some capacity.

We would appreciate a link.