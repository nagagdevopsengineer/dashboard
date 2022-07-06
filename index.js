const express = require('express')
const cors=require('cors')
const app = express()
const port = 3006
const sequelize = require('./config/config.json')
const {routes}=require('./routes')

app.use(express.json())
app.use(cors())
app.use('/',routes)

// const { Client } = require('pg')
// const client = new Client({
//   user: 'sgpostgres',
//   host: '5432',
//   database: 'shivakanya',
//   password: 'kanya@25',
//   port: 3006,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
app.listen(port,()=>{
    console.log('lisiting to port',port)
})
// const startServer = () => {
// const server = app.listen(process.env.PORT || PORT, () =>
//   console.log(`Listening on ${PORT}`))
// }
// ;(async () => {
//   await sequelize.sync()
//     console.log('db sync')
//   })(startServer())