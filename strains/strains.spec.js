const request = require('supertest')
const server = require('../api/server')

const db = require('../data/db-config')

describe('strains router works', () => {
    let token
    beforeAll(done => {
        request(server)
            .post('/api/login')
            .send({ username: 'User', password: 'pass' })
            .end((err, Response) => {
                token = Response.body.token
                done()
            })
    })

    describe('get /strains', () => {
        it('sends back a list of strains and returns 200 ok', () => {
            return request(server)
                .get('/api/strains')
                .set('Authorization', `${token}`)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.body).toHaveLength(3)
                })
        })
    })

    describe('get /strains/:id', () => {
        it('sends back a single strain in object format and returns status 200 ok', () => {
            return request(server)
                .get('/api/strains/1')
                .set('Authorization', `${token}`)
                .then(res => {
                    expect(res.body).toStrictEqual({
                        id: 1,
                        strain: 'rowValue1',
                        effect: 'rowValue1',
                        medical_effect: 'rowValue1',
                        flavor: 'rowValue1',
                        type: 'rowValue1',
                        thc: 'rowValue1',
                        cbd: 'rowValue1',
                        description: 'rowValue1'
                    })

                    expect(res.status).toBe(200)
                })
        })
    })

    describe('post /strains/:id', () => {
        it('successfuly saves the strain to the user', async () => {
            await db('saved').truncate()

            return request(server)
                .post('/api/strains/1')
                .set('Authorization', `${token}`)
                .then(res => {
                    expect(res.status).toBe(201)
                    expect(res.body).toHaveLength(1)
                })
        })
    })

    describe('get /saved', () => {
        it('correctly gets a users saved strains', () => {
            request(server)
                .get('/api/saved')
                .set('Authorization', `${token}`)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.body).toHaveLength(1)
                })
        })
    })

    describe('delete /saved/:id', () => {
        it('deletes the saved strain', async () => {
            const expected = await db('saved').where({ id: 1 })
            expect(expected).toHaveLength(1)

            await request(server)
                .delete('/api/saved/1')
                .set('Authorization', `${token}`)
                .then(res => {
                    expect(res.status).toBe(200)
                })

            const deleted = await db('saved')
            expect(deleted).toHaveLength(0)
        })
    })

})