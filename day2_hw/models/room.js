const Room = function(area, painted){
    this.area = area
    this.painted = painted
};

Room.prototype.addPaint = function (paint) {
    this.painted = this.painted + paint
};

module.exports = Room;


// const Decorator = function(paintCans){
//     this.paintCans = paintCans
// };

// module.exports = Decorator;





