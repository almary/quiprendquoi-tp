const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const methodOverride = require('method-override');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));


app.set("view engine", "pug");


app.get("/", function(req, res) {
  res.render("index", { title: 'Qui prend quoi ?' });
});


app.post("/party", function(req, res) {
    axios
      .post(`${process.env.API_URL}/party`, req.body)
      .then(({ data }) => res.redirect(`/party/${data._id}`))
      .catch((err) => res.send(err))
      //page d'erreur à l'avenir
});


app.get("/party/:id", function(req, res) {
    axios
      .get(`${process.env.API_URL}/party/${req.params.id}`)
      .then(({ data }) =>
          res.render('party', {
            party: data,
            title: data.name,
            id: data._id,
            url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
          }),
      )
      .catch((err) => console.log(err));
});

app.post("/party/:id/items", function(req, res) {
  axios
  .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
  .then((data) => res.redirect(`/party/${req.params.id}`))
  .catch((err) => console.error(err));
});

app.delete('/party/:id/items/:idItems', (req, res) => {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.idItems}`)
    .then((data) => res.redirect(`/party/${req.params.id}`))
    .catch((err) => console.log(err))
  ;
});


app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${process.env.PORT}!`)
);
