const PaintCan = function (volume) {
    this.volume = volume
};

PaintCan.prototype.isPaintCanEmpty = function (paintCan) {
    if (paintCan.volume <= 0){
        return true;
    } else {
        return false;
    }
}

PaintCan.prototype.usePaint = function (paintCan, paintUsed) {
    paintCan.volume = paintCan.volume - paintUsed;
}

module.exports = PaintCan;