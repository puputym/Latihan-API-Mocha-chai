const { expect } = require("chai")//buat manggil function expect dari folder lain
const request = require ("supertest")


const auth = require ('./auth.js')

const baseURL = 'https://restful-booker.herokuapp.com'//buat variable lokal berisi baseUrl
describe ('Get Booking All', function () {
    it('Response status is 200', async () =>{
        const response = request (baseURL)//pemanggilan baseURL
        .get('/booking')//endpoint
        console.log((await response).status)
       // console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    let token = auth
    console.log(token)
})
