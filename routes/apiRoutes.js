const fs = require('fs');

let rawdata = fs.readFileSync('./db/db.json', 'utf8');
let notesData = JSON.parse(rawdata);
console.log(notesData);

function refreshList () {
  fs.writeFile('./db/db.json', JSON.stringify(notesData), err => {
    if (err) throw err;
    return true;
    });

}



module.exports = (app) => {

  app.get('/api/notes', (request, response) => { 
    response.json(notesData);

  });

  app.get('/api/notes/:noteId', (request, response) => {
    response.JSON(notesData[request.params.noteId]);

    console.log (request.params.noteId);
   
  });

  app.post('/api/notes', (request, response) => {
   
      notesData.push(request.body);
      response.json(true);
      refreshList();

  });

  app.delete('/api/notes/:id', (request, response) => {
    try {
    notesData = fs.readFileSync("./db/db.json", "utf8");
    
    notesData = JSON.parse(notesData);

    console.log(notesData + " 1");
  
    notesData = notesData.filter(function(note) {
      return note.id != request.params.id;
    });

    console.log(notesData + " 2");

    refreshList();

    response.send(notesData);
    
  } catch (err) {
    throw err;
   
  } 
  
  
  });

};