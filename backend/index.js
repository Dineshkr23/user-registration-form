const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const {router} = require('./router/routings');

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})