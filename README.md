# Panic-Lobster-Challenge
My entry on Panic Lobster's Internship Challenge

Cities Dataset from http://blog.mds.gov.br/redesuas/lista-de-municipios-brasileiros/

# Instructions
- To run the app locally, run the file [app.js](app.js) with node  (``` node app.js ```)
- The database is in a MongoDB Atlas Cluster. To connect to it, you can use the string in line 6 from [app.js](app.js).
- There is an online version of the app being hosted at https://panic-lobster-challenge.herokuapp.com/ (slower, but works)

# Decisions
- Used Node with Express because they're packages I'm more familiarized with
- Used MongoDB because of the Challenge's recommendation and people's comments on its easy of use
- Python background with webscraping made the solution to States/Cities input proposal quite obvious
- Hardest problem I faced was the CPF input, and I'm still not satisfied with my solution

# Future Improvements
- make CPF input able to deal with pasted text
- use states and strings only in server side so [landing.ejs](views/landing.ejs) is faster to load
- align jumbotron and other flexbox improvements
