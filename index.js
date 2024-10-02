const express = require('express');
const path = require('path');
const linearsearch = require('./search');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})  

app.get('/searchresults', (req, res) => {
  let result = linearsearch(req.query.keyword)  
  res.send(result)
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})