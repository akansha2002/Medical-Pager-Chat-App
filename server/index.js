const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth.js')

// creating instance of express application
const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/auth', authRoutes)


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
