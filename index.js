// code away!
// import server
const server = require('./server');
require('dotenv').config();

const port = process.env.PORT || 5001;
// listen on port 4000
server.listen(port, () => {
    console.log(`listening on port ${port}`);
})