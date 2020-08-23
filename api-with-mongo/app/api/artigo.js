const mongoose = require('mongoose');
const api = {};

const model = mongoose.model('Artigo');

const article = require('./services/article');

api.adiciona = function(req, res) {

  article.create(req.body).then((article) => {
    return res.status(200).json(article);
  })

};

api.atualiza = function(req, res) {

  article.update(req.params.id, req.body).then((article) => {
    return res.status(201).json(article);
  });
  
};

api.lista = function(req, res) {

  model
    .find({})
    .then(function(artigos) {
      res.json(artigos);

    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });

};

api.buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(artigo){
        if(!artigo) throw Error('Artigo não encontrada');
        res.json(artigo);

      }, function(error){
        // console.log(error);
        res.status(500).json(error);
      });

};

api.removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
      .then(function(){
        res.sendStatus(204);
      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

module.exports = api;
