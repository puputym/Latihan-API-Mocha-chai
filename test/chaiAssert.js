const{expect} = require ('chai');// cara manggil chai
const { describe } = require('mocha');
//const app = require('../app') //untuk manggil file app.js use .. untuk kembali

//definisi assert
//cara menggunkan chai
describe('App', function () {
    //assert tulisan sesuai ekspetasi
    it('app should return welcome message', function () {
        let response = "Hello world"
        expect(response).to.equal("Hello world");//textnya harus sama seperti yg di app.js
    })
})

describe('App', function () {
    //assert tulisan sesuai ekspetasi
    it('app should have word world', function () {
        let response = "Hello world"
        expect(response).to.include("world");//textnya harus sama seperti yg di app.js
    })
})