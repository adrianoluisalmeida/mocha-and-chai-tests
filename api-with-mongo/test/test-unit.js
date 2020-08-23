const chai = require('chai');
const article = require('../app/api/services/article');

const assert = chai.assert;

describe('Tests Article', () => {

    it('sould be able create a new article', () => {
        const body = {
            titulo: 'Testando cadastro',
            corpo: 'Testando corpo de tests'
        }

        return article.create(body).then((response) => {
            assert.equal(response.titulo, body.titulo);
        });
    });

    it('should be able update article', () => {

        const bodyCreated = {
            titulo: 'Testando cadastro',
            corpo: 'Testando corpo de tests'
        }

        const bodyUpdated = {
            titulo: 'Update title'
        }

        return article.create(bodyCreated).then((responseCreate) => {
            article.update(responseCreate._id, bodyUpdated).then((response) => {
                assert.equal(response.titulo, bodyUpdated.titulo);
            });
        });

    });
})
