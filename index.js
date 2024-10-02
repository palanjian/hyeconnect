const express = require('express');
const path = require('path');

const app = express();

// serve static files (like your CSS and JS)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/searchresults', (req, res) => {
    //res.send("hey")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})