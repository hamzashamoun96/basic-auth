'use strict';
require('dotenv').config();
const server = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server)
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const obj = { username: "hamza", password: "12345" };
const obj2 = { username: 'hamza', password: '123' }


describe('Routes', () => {

    it('Should signup a new user', async () => {
        const response = await request.post('/signup').send(obj)
        const valid = await bcrypt.compare(obj.password, response.body.password);

        expect(response.body.username).toEqual('hamza');
        expect(valid).toEqual(true);
    });

    it('Should signin as a user', async () => {
        const code = base64.encode(`${obj.username}:${obj.password}`)
        const response = await request.post('/signin').set({ Authorization: `Basic ${code}` })
        expect(response.status).toEqual(200);
    });

    it('Should not signin as a user because wrong input', async () => {
        const code2 = base64.encode(`${obj2.username}:${obj2.password}`)
        const response = await request.post('/signin').set({ Authorization: `Basic ${code2}` })
        expect(response.text).toEqual('Invalid Login');
    });
});

