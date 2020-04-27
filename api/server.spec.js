const request = require('supertest');
const server = require('./server');
const db = require("../data/db-Config.js");

describe('server', () => {
    describe('GET /', () => {
        it('should return status 200 ok', async () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

 
    })
})
