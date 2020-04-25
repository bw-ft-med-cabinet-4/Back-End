const request = require('supertest');
const server = require('./server');

it("should set the db env to testing", () => {
    expect(process.env.DB_ENV).toBe('testing')
})
describe('server', () => {
    describe('GET /', () => {
        it('should return status 200 ok', async () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should not return status 500 ok', async () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        
    })
})