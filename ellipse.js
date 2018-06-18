class Ellipse {
    /**
     * 
     * @param {Number} x middle point of ellipse, x coordinate
     * @param {Number} y middle point of ellipse, y coordinate 
     * @param {Number} width of the ellipse
     * @param {Number} height of the ellipse
     */
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    area() {
        return Math.PI * this.width * this.height;
    }

    //@TODO make a collision function between an ellipse and another ellipse
    // /**
    //  * It is assumend that 'other' is also an ellipse
    //  * The argument 'other' must have at least the properties: x, y, width, height.
    //  * These properties must be numbers.
    //  * @param {Object} other 
    //  */
    // collision(other) {
    //     //@TODO change return statements to check the type and properties of 'other' argument in exceptions
    //     if (other === undefined || other === null) return false;
    //     if (typeof other !== 'object') return false;
    //     if (!other.hasOwnProperty('x') || !other.hasOwnProperty('y') 
    //     || !other.hasOwnProperty('width') || !other.hasOwnProperty('height')
    //     ) return false;

    //     return (other.x + other.width > this.x) &&
    //     (other.y + other.height > this.y) &&
    //     (this.x + this.width > other.x) &&
    //     (this.y + this.height > other.y);
    // }

    /**
     * return object with properties: 
     * x: x coordinate of top left point of rectangle,
     * y: y coordinate of top left point of rectangle,
     * width: width of the rectangle,
     * height: height of the rectangle 
     */
    getBoundingBox() {
        return {
            x: this.x - this.width / 2,
            y: this.y - this.height / 2,
            width: this.width,
            height: this.height
        };
    }
}

module.exports = Ellipse;