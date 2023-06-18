const request = require ('supertest')


module.exports = function() {
    const response = request ('http://restapi.adequateshop.com')
    .post('/api/AuthAccount/Login')
    .send({
        "email": "put@yahoo.com",
        "password": "123456789"
    })

    token = response.body.data.token
    return token
}