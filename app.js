const express = require('express');

const app = express();

// Setting url and http verbs

// GET Method
app.get('/me', (request, response) => {
  response.status(200).json({ 
    name: 'Elvis Alexander',
    age: 25,
    country: 'Venezuela',
    verb: request.method
  })
})

// POST Method
app.post('/metas', (request, response) => {
  response.status(200).json({ 
    hobbies: ['programmer','play videogames','watch anime'],
    verb: request.method
  })
})

// PATCH Method
app.patch('/metas', (request, response) => {
  response.status(200).json({ 
    professional_goals: ['Graduate in academlo', 'I want to be a great software engineer'],
    verb: request.method
  })
})

// PUT Method
app.put('/business', (request, response) => {
  response.status(200).json({ 
    professional_goals: ['Endava', 'Twilio', 'Big Tech'],
    verb: request.method
  })
})

// Setting server port
app.listen(8000, () => {
  console.log('Server started at port 8000')
});

