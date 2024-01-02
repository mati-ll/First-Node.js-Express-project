const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/errorMiddleware");
const notesRoutes = require("./routes/noteRoute");

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

//error middleware
app.use(errorHandler);
//Routes
app.use("/notes", notesRoutes);

app.listen(port, () => {
  console.log(`Hello World listenig on port= ${port}`);
});
