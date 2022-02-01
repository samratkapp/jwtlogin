const express = require('express');

const rootRouter = require("./routes");

const app = express();

app.use(rootRouter);

app.listen(5000, () => console.log('Server started on port 5000'));