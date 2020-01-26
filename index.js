// code away!
// import server
const server = require('./server');
require('dotenv').config();

const port = process.env.PORT || 5000;
// listen on port 4000
server.listen(4000, () => {
    console.log(`listening on port ${port}`);
})