const mongoose = require('mongoose');
const model = mongoose.model('Artigo');

module.exports = {

  create: (article) => {
    return model
    .create(article)
      .then(function(response) {
        return response;

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });
  },

  update: (id, article) => {
    return model
      .findByIdAndUpdate(id, article, {new: true})
        .then(function(response) {
          console.log(response);
          return response;
        }, function(error) {
          console.log(error);
          res.status(500).json(error);
        });

  }
}