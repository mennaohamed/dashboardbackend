require("dotenv").config()
const express = require("express")
const schedule = require('node-schedule');
const dbConnection = require("./db/config")
// var cors = require('cors')
// app.use(cors())
const app = express()

// to parse automatically
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connect to the db
dbConnection(process.env.MONGO_URI)

// routers
const registerRouter = require("./routers/register")
const articalRouter = require("./routers/articels")
const tagRouter = require("./routers/tags")
const PageRouter = require("./routers/page")
const categoryRouter = require("./routers/category")
const categoryArticleRputer=require("./routers/articalCategory")
const tageArticleRouter=require('./routers/tagArtical')



// var corsOptions = {
//   origin: 'mongodb+srv://islam:E47OCZupGncpDPU3@cluster0.1dbk9td.mongodb.net/test?retryWrites=true&w=majority:5000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(articalRouter)
app.use(PageRouter)
app.use(registerRouter)
app.use(tagRouter)
app.use(categoryRouter)
app.use(categoryArticleRputer)
app.use(tageArticleRouter)
// app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: true }));
// initRoutes(app);

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("Server is up and running on port " + port)
  console.log("All Done Successfully")
})

 

