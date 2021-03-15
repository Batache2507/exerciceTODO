//import express
let express = require('express'); 

//initialize the app 
let app = express(); 

let todo = ["Ranger ma chambre", "Réparer PC"]; 

//send info
app.get('/', function(request, response)  {
    response.send("Hello World");
});

//render(=return) home page
app.get('/todo', function(request, response) {
    response.render('home.ejs', {todo: todo});
});

//get form inputs 
app.get('/todo/new', function(request, response) {
    let item = request.query.todoItem; 
    console.log(item); 
    todo.push(item);
    response.redirect('/todo');
});

//delete
app.get('/todo/delete/:id', function(request, response) {
    todo.splice(request.params.id,1); 
    response.redirect('/todo');
}); 

//launch app top listen to specified port 
app.listen(3000, function() {
    console.log('Server is running on 3000')
});
