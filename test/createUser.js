const { expect } = require("chai")
const { describe } = require("mocha")
const request = require("supertest")
const {CREATE_USER_DATA} = require ('../data/dataUser')
const testData = CREATE_USER_DATA


const baseURL = 'https://petstore.swagger.io/v2'

describe ("Post or create User ", function () {
    //disimpan di luar it supaya bisa jadi lokal variable supaya bisa di panggil buat it yg lain
    const response = request (baseURL)
        .post('/user')
        .send(testData)
    it('create user succesffully response 200', async () =>{
        // console.log((await response).status)
        //console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it("message is equal to ID", async () =>{
        expect((await response).body.message).to.equal(`${testData.id}`) //DATA DRIVEND TESTING
    })
})