class Rectangle {
    /**
     * 
     * @param {Number} x left top of rectangle, x coordinate
     * @param {Number} y left top of rectangle, y coordinate
     * @param {Number} width width of the rectangle
     * @param {Number} height height of the rectangle
     */
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }

    /**
     * It is assumend that 'other' is also a rectangle
     * The argument 'other' must have at least the properties: x, y, width, height.
     * These properties must be numbers.
     * @param {Object} other 
     */
    collision(other) {
        //@TODO change return statements to check the type and properties of 'other' argument in exceptions
        if (other === undefined || other === null) return false;
        if (typeof other !== 'object') return false;
        if (!other.hasOwnProperty('x') || !other.hasOwnProperty('y') 
        || !other.hasOwnProperty('width') || !other.hasOwnProperty('height')
        ) return false;

        return (other.x + other.width > this.x) &&
        (other.y + other.height > this.y) &&
        (this.x + this.width > other.x) &&
        (this.y + this.height > other.y);
    }
}

module.exports = Rectangle;