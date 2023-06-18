const { expect } = require("chai")//buat manggil function expect dari folder lain
const request = require ("supertest")

const baseURL = 'http://restapi.adequateshop.com'
const response = request (baseURL)
    .post('/api/AuthAccount/Login')
    .send({
        "email": "put@yahoo.com",
        "password": "123456789"
    })
//ngambil dari response body login
const token = response.body.data.token


describe ('Get User', async () => {
    const response = request (baseURL)//pemanggilan baseURL
    .get('/api/users?page=1')//endpoint
    .set({'Authorization' : token})

    it('Get All user', async () =>{
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
})

// const { expect } = require("chai");
// const request = require("supertest");

// const baseURL = 'http://restapi.adequateshop.com';

// describe('Get User', () => {
//   let token;

//   before(async () => {
//     const loginResponse = await request(baseURL)
//       .post('/api/AuthAccount/Login')
//       .send({
//         "email": "put@yahoo.com",
//         "password": "123456789"
//       });

//     token = loginResponse.body.data.token;
//   });

//   it('Get All user', async () => {
//     const response = await request(baseURL)
//       .get('/api/users?page=1')
//       .set('Authorization', `Bearer ${token}`);

//     console.log(response.body);
//     expect(response.status).to.equal(200);
//   });
// });
