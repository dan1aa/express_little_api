const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('request')
const mongoose = require('mongoose')
require('dotenv').config()

const User = require('../models/User')

beforeEach(() => {
    mongoose.connect(process.env.MONGODB_URI); 
})

after(() => {
    mongoose.connection.close();
})

const URL = 'http://localhost:3000';

describe('Check routes', () => {
    describe('Should return true or false', () => {
        it('Should return true', done => {
            request(URL, function (error, response, body) {
                expect(response.statusCode).equal(200)
                done()
            });
        })
        it('Should return false', done => {
            request(URL + '/error', function (error, response, body) {
                expect(response.statusCode).equal(404)
                done()
            });
        })
        it('Should return true', (done) => {
            request(URL + '/users', (err, res, body) => {
                const parsedBody = JSON.parse(body)
                assert(parsedBody !== null || undefined)
                done()
            })
        })
        it('Should return message "Main Page"', (done) => {
            request(URL, (err, res, body) => {
                expect(res.body).equal('Main page')
                done()
            })
        })
    })
})
describe('Work with database', () => {
        describe('Get users', () => {
            beforeEach(() => {
                const userData = new User({ name: 'Danya', age: 15 });
                userData.save().then(() => done());
            });
    
            it ('Should get all users', (done) => {
                User.findOne({ name: 'Danya' }).then((data) => {
                    expect(data.name).equal('Danya');
                }).finally(() => done());
            })
        })
        describe('Create user', () => {
            it('Creates new user', (done) => {
                const newUser = new User({ 
                    name: 'Danya',
                    age: 15
                });
                newUser.save().then(() => {
                    assert(newUser);
                }).finally(() => done());;
            });
        });
})