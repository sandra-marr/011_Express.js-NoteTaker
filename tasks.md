# Completed
* updated index.html to route to notes.html when the button is clicked
* required express app.js
* added nodemon watch to the scripts in the package-lock.json
* added in html and api routes in separate files
    * GET /notes should return the notes.html file.
    * GET /index should return the index.html file.
* added environment port option to app.js
* required route files in app.js
* added port listener in app.js
* corrected db.JSON to have commas after each object.
* require fs, and path 
* add existing notes to the notes.html page in a column on the LHS
* set up empty fields on the RHS for new notes and the associated title
* after a new note and title are added, the save icon becomes visible at the top of the page in the nav bar.
* after a note is saved it is added to the existing notes, and shows on the LHS
* allow for the notes to toggle to the editor area when they are clicked
* there is a write/edit icon on the opened note
* there is a delete icon on the open note
* there is a write/edit icon to add a new note
* create these routes
   
    * GET /api/notes should read the db.json file and return all saved notes as JSON.
    * POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

* Bonus
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

* Deploy to heroku


# To Do

* readme file created
    * add any new badges in
* walk through video created
* submit










