### Simple Loop

This app, on page load, conducts a fetch to the Kronos Backend, and populates a list with plans from the backend.

Note that is it looking for UIC = "tstUIC", not a real one, like "WJH8C0". This is because the webservice and the database are separate, so unless you have a live database instance with seeded data, just you only need a request to tstUIC. 

Also note that if Vite initializes to any port besides 9000 and 5173, this doesn't work. MTF.