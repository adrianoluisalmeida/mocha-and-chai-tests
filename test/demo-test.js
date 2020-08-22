const chai = require('chai');
const demo = require('../demo-2/demo');

const assert = chai.assert;

describe('Diferentes tipos de tests com Mocha & Chai', () => {
    it('Teste: Deve retornar a frase: "Mocha & Chai são legais!', () => {
        assert.equal(demo(), 'Mocha & Chai são legais!');
    })
})