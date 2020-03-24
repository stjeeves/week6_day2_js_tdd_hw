const assert = require('assert');
const Room = require('../models/room.js');


describe('Room', function() {
    
    let room;

    beforeEach(function() {
        room = new Room(20, 0);
    })

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    })

    it('should start unpainted', function() {
        const actual = room.painted;
        assert.strictEqual(actual, 0)
    })

    it('should be able to be painted', function() {
        room.addPaint(20);
        const actual = room.painted
        assert.strictEqual(actual, 20)

    })
})

