class Circle {
    /**
     * 
     * @param {Number} x middle point of ellipse, x coordinate
     * @param {Number} y middle point of ellipse, y coordinate 
     * @param {Number} radius of the ellipse
     */
    constructor(x = 0, y = 0, radius = 0) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * return object with properties: 
     * x: x coordinate of top left point of rectangle,
     * y: y coordinate of top left point of rectangle,
     * width: width of the rectangle,
     * height: height of the rectangle 
     */
    getBoundingBox() {
        return {
            x: this.x - this.radius,
            y: this.y - this.radius,
            width: this.radius * 2,
            height: this.radius * 2
        };
    }

    /**
     * It is assumend that 'other' is also a circle
     * The argument 'other' must have at least the properties: x, y, radius.
     * These properties must be numbers.
     * @param {Object} other 
     */
    collision(other) {
        //@TODO change return statements to check the type and properties of 'other' argument in exceptions
        if (other === undefined || other === null) return false;
        if (typeof other !== 'object') return false;
        if (!other.hasOwnProperty('x') || !other.hasOwnProperty('y') 
        || !other.hasOwnProperty('radius')
        ) return false;

        //(other.x - this.x)^2 + (other.y - this.y)^2 <= (this.radius + other.radius)^2
        return ((other.x - this.x)*(other.x - this.x)) + ((other.y - this.y)*(other.y - this.y)) <= 
        ((this.radius + other.radius) * (this.radius + other.radius));
    }

    /**
     * It is assumend that 'rect' is a rectangle     * 
     * The argument 'rect' must have at least the properties: x, y, width, height.
     * These properties must be numbers.
     * It is also assumend that the x and y are the top left coordinates of the rectangle
     * @param {Object} rect 
     */
    collisionWithRectangle(rect) {
        //@TODO change return statements to check the type and properties of 'rect' argument in exceptions
        if (rect === undefined || rect === null) return false;
        if (typeof other !== 'object') return false;
        if (!rect.hasOwnProperty('x') || !rect.hasOwnProperty('y') 
        || !rect.hasOwnProperty('width') || !rect.hasOwnProperty('height')
        ) return false;
        
        const distanceCircleRectangleX = Math.abs(this.x - rect.x),
        distanceCircleRectangleY = Math.abs(this.y - rect.y),
        rectWidthHalf = rect.width / 2,
        rectHeightHalf = rect.height / 2;

        if (distanceCircleRectangleX > (rectWidthHalf + this.radius) ||
            distanceCircleRectangleY > (rectHeightHalf + this.radius)
        ) return false;

        if (distanceCircleRectangleX <= rectWidthHalf ||
            distanceCircleRectangleY <= rectHeightHalf
        ) return true;

        const cornerDistanceSquard = ((distanceCircleRectangleX - rectWidthHalf) * (distanceCircleRectangleX - rectWidthHalf)) + 
        ((distanceCircleRectangleY - rectHeightHalf) * (distanceCircleRectangleY - rectHeightHalf));

        return cornerDistanceSquard <= (this.radius * this.radius);
    }
}

module.exports = Circle;