/* eslint-env mocha */

const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Leon';
        var text = 'Hello from Leon';
        var message = generateMessage(from, text);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Leon';
        var latitude = 15;
        var longitude = 25;
        var url = 'https://www.google.com/maps?q=15,25';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
});
