const assert = require('assert');
const PaintCan = require('../models/paint_can.js')

describe('PaintCan', function() {

    let paintCan;

    beforeEach(function() {
        paintCan = new PaintCan(10);
    })

    it('should start with paint inside', function() {
        const actual = paintCan.volume;
        assert.strictEqual(actual, 10)
    })

    it('should be able to check if the paint can is empty' function() {
        
    })
})