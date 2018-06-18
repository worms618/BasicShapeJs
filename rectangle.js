class Rectangle {
	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	/**
	 * Create a rectangle instance with x and y coordinate of the middlepoint of the rectangle 
	 * @param {Number} x The x coordinate of middlePoint of rectangle
	 * @param {Number} y The y coordinate of middlePoint of rectangle
	 * @param {Number} width The width of rectangle
	 * @param {Number} height The height of rectangle
	 */
	static createRectangleFromCenter(x, y, width, height) {
		//@TODO check if the arguments are valid (not undefined or null and numbers)
		return new this(x - width / 2, y - height / 2, width, height);
	}

	/**
	 * Create a rectangle instance with the start and end point of a diagonal
	 * @param {Number} x1 The x coordinate of the start point of the diagonal
	 * @param {Number} y1 The y coordinate of the start point of the diagonal
	 * @param {Number} x2 The x coordinate of the end point of the diagonal
	 * @param {Number} y2 The y coordinate of the end point of the diagonal
	 */
	static createRectangleFromDiagonal(x1, y1, x2, y2) {
		//@TODO check if the arguments are valid (not undefined or null and numbers)
		let x = 0, y = 0, width = 0, height = 0;

		//find top left point
		x = x2 >= x1 ? x1 : x2;
		y = y2 >= y1 ? y1 : y2;

		//calculate width and height
		width = x2 - x1;
		height = y2 - y1;

		//absolute value of the width and height
		width = width >= 0 ? width : width * -1;
		height = height >= 0 ? height : height * -1;
		
		return new this(x, y, width, height);
	}
}

module.exports = Rectangle;