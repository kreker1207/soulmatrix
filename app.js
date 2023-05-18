const express = require('express')
const calculateRouter = require('./calculateRouter')
const cors = require('cors')

const PORT = process.env.PORT || 8080
const app = express()

const errorHandler = async (err, req, res, next) => {
  if(err) console.log(err);
  next();
};
app.use(express.json())

app.use(cors({origin: 'http://localhost:3000', credentials: true }))

app.use('/api', calculateRouter,errorHandler);


app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
