const jsonServer = require('json-server')

const servertset = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

servertset.use(middleware)
servertset.use(route)
servertset.listen(PORT,()=>{
    console.log(`react simple crud app started at ${PORT} and waiting for client request`);
})