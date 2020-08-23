let mongoose = require("mongoose");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Artigos', () => {
    
    describe('/GET Artigos', () => {
        it('Testando GET todos os Artigos', (done) => {
            chai.request('http://localhost:3000')
                .get('/api/artigos')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                  done();
                });
        });
    });

    describe('/POST Artigo', () => {
        it('Verificar o cadastro de Artigo', (done) => {
            let artigo = {
                titulo: "Meu Artigo", 
                corpo: "Esse e o meu Artigo"
            }
              chai.request('http://localhost:3000')
              .post('/api/artigos')
              .send(artigo)
              .end((err, res) => {
                  res.should.have.status(200);
                done();
              });
        });

    });

    describe('/GET/:id artigo', () => {
        it('GET em Artigo por ID', (done) => {
            let id_ = "5f41a67607fc385e7f6977f8";
              chai.request('http://localhost:3000')
              .get('/api/artigos/' + id_)
              .end((err, res) => {
                  res.should.have.status(200);
                  done();
              })
        });
    });

    describe('/GET/:id artigo', () => {
        it('GET em Artigo por ID que não existe', (done) => {
            let id_ = "5f41a67607fc385e7f62228";
              chai.request('http://localhost:3000')
              .get('/api/artigos/' + id_)
              .end((err, res) => {
                  res.should.have.status(500);
                  done();
              })
        });
    });

});