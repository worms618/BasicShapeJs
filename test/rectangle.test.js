'use strict';
const expect = require('chai').expect;
const rect = require('../rectangle');

const tx = 10, ty = 5, twidth = 20, theight = 15;

describe('Testing of basic Rectangle class', function() {
    describe('Rectangle properties', function() {
        let rectangle;
        before(function () {
            rectangle = new rect();
        })
        it(`Rectangle has a 'x' property`, function() {
            expect(rectangle).ownProperty('x');
        })

        it(`Rectangle has a 'y' property`, function() {
            expect(rectangle).ownProperty('y');
        })

        it(`Rectangle has a 'width' property`, function() {
            expect(rectangle).ownProperty('width');
        })

        it(`Rectangle has a 'height' property`, function() {
            expect(rectangle).ownProperty('height');
        })
    })

    describe('Rectangle after initializing', function() {
        let rectangle;
        before(function () {
            rectangle = new rect(tx, ty, twidth, theight);
        })
        it(`Rectangle property 'x' has the value which is given in constructor`, function() {
            expect(rectangle.x).is.equal(tx);
        })

        it(`Rectangle property 'y' has the value which is given in constructor`, function() {
            expect(rectangle.y).is.equal(ty);
        })

        it(`Rectangle property 'width' has the value which is given in constructor`, function() {
            expect(rectangle.width).is.equal(twidth);
        })

        it(`Rectangle property 'height' has the value which is given in constructor`, function() {
            expect(rectangle.height).is.equal(theight);
        })
    })

    describe('Rectangle functions', function() {
        let rectangle;
        before(function () {
            rectangle = new rect(tx, ty, twidth, theight);
        })

        it(`area()`, function() {
            const area = twidth * theight;
            expect(rectangle.area()).is.equal(area);
        })

        describe('Rectangle collison detection', function() {
            let rectangle;
            before(function () {
                rectangle = new rect(tx, ty, twidth, theight);
            })

            it('Collision false, if argument is undefined or null', function() {
                expect(rectangle.collision(undefined)).to.be.false;
                expect(rectangle.collision(null)).to.be.false;
            })

            it('Collision false, if argument is not an object', function() {
                expect(rectangle.collision('string')).to.be.false;
                expect(rectangle.collision(0)).to.be.false;
            })

            it('Collision false, if argument does not have an x, y, width and height property', function() {
                expect(rectangle.collision({x: 1, y: 1, width: 2, height: 3})).to.be.false;
            })

            describe('Collisions between the rects are false', function() {
                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx + twidth}, y: ${ty +theight}, width: ${twidth}, height: ${theight})`, function() {        
                    expect(rectangle.collision({x: tx + twidth, y: ty +theight, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx}, y: ${ty +theight}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx, y: ty + theight, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx - twidth}, y: ${ty +theight}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx - twidth, y: ty + theight, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx - twidth}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx - twidth, y: ty, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx - twidth}, y: ${ty - theight}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx - twidth, y: ty - theight, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx}, y: ${ty - theight}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx, y: ty - theight, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx + twidth}, y: ${ty - theight}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx + twidth, y: ty - theight, width: twidth, height: theight})).to.be.false;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx + twidth}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx + twidth, y: ty, width: twidth, height: theight})).to.be.false;
                })
            })

            describe('Collisions between the rects are true', function() {
                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx + twidth - 1}, y: ${ty + theight - 1}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx + twidth - 1, y: ty + theight - 1, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx}, y: ${ty + theight - 1}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx, y: ty + theight - 1, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx - twidth + 1}, y: ${ty + theight - 1}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx - twidth + 1, y: ty + theight - 1, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx - twidth + 1}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx - twidth + 1, y: ty, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx - twidth + 1}, y: ${ty - theight + 1}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx - twidth + 1, y: ty - theight + 1, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx}, y: ${ty - theight + 1}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx, y: ty - theight + 1, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx + twidth - 1}, y: ${ty - theight + 1}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx + twidth - 1, y: ty - theight + 1, width: twidth, height: theight})).to.be.true;
                })

                it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
                    rect(x: ${tx + twidth - 1}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
                    expect(rectangle.collision({x: tx + twidth - 1, y: ty, width: twidth, height: theight})).to.be.true;
                })
            })
        })
    })
})