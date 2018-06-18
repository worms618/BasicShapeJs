'use strict';
const expect = require('chai').expect;
const ell = require('../ellipse');

const tx = 10, ty = 5, twidth = 20, theight = 15;

describe('Testing of basic Ellipse class', function() {
    describe('Ellipse properties', function() {
        let ellipse;
        before(function () {
            ellipse = new ell();
        })
        it(`Ellipse has a 'x' property`, function() {
            expect(ellipse).ownProperty('x');
        })

        it(`Ellipse has a 'y' property`, function() {
            expect(ellipse).ownProperty('y');
        })

        it(`Ellipse has a 'width' property`, function() {
            expect(ellipse).ownProperty('width');
        })

        it(`Ellipse has a 'height' property`, function() {
            expect(ellipse).ownProperty('height');
        })
    })

    describe('Ellipse after initializing', function() {
        let ellipse;
        before(function () {
            ellipse = new ell(tx, ty, twidth, theight);
        })
        it(`Ellipse property 'x' has the value which is given in constructor`, function() {
            expect(ellipse.x).is.equal(tx);
        })

        it(`Ellipse property 'y' has the value which is given in constructor`, function() {
            expect(ellipse.y).is.equal(ty);
        })

        it(`Ellipse property 'width' has the value which is given in constructor`, function() {
            expect(ellipse.width).is.equal(twidth);
        })

        it(`Ellipse property 'height' has the value which is given in constructor`, function() {
            expect(ellipse.height).is.equal(theight);
        })
    })

    describe('Ellipse functions', function() {
        let ellipse;
        before(function () {
            ellipse = new ell(tx, ty, twidth, theight);
        })

        it(`area()`, function() {
            const area = Math.PI * twidth * theight;
            expect(ellipse.area()).is.equal(area);
        })

        describe('Bounding box of ellipse', function() {
            let boundingBox;
            before(function () {
                boundingBox = new ell(tx, ty, twidth, theight).getBoundingBox();
            })

            it(`Boundingbox has a 'x' property`, function() {
                expect(boundingBox).ownProperty('x');
            })

            it(`Boundingbox has a 'y' property`, function() {
                expect(boundingBox).ownProperty('y');
            })

            it(`Boundingbox has a 'width' property`, function() {
                expect(boundingBox).ownProperty('width');
            })

            it(`Boundingbox has a 'height' property`, function() {
                expect(boundingBox).ownProperty('height');
            })

            it(`Boundingbox property 'x' is the top left coordinate of the bounding box`, function() {
                expect(boundingBox.x).to.equal(tx - twidth / 2);
            })

            it(`Boundingbox property 'y' is the top left coordinate of the bounding box`, function() {
                expect(boundingBox.y).to.equal(ty - theight / 2);
            })

            it(`Boundingbox property 'width' has the value which is given in constructor`, function() {
                expect(boundingBox.width).to.equal(twidth);
            })

            it(`Boundingbox property 'height' has the value which is given in constructor`, function() {
                expect(boundingBox.height).to.equal(theight);
            })
        })

    //     describe('Ellipse collison detection', function() {
    //         let ellipse;
    //         before(function () {
    //             ellipse = new rect(tx, ty, twidth, theight);
    //         })

    //         it('Collision false, if argument is undefined or null', function() {
    //             expect(ellipse.collision(undefined)).to.be.false;
    //             expect(ellipse.collision(null)).to.be.false;
    //         })

    //         it('Collision false, if argument is not an object', function() {
    //             expect(ellipse.collision('string')).to.be.false;
    //             expect(ellipse.collision(0)).to.be.false;
    //         })

    //         it('Collision false, if argument does not have a x, y, width and height property', function() {
    //             expect(ellipse.collision({x: 1, y: 1, width: 2, height: 3})).to.be.false;
    //         })

    //         describe('Collisions between the rects are false', function() {
    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx + twidth}, y: ${ty +theight}, width: ${twidth}, height: ${theight})`, function() {        
    //                 expect(ellipse.collision({x: tx + twidth, y: ty +theight, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx}, y: ${ty +theight}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx, y: ty + theight, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx - twidth}, y: ${ty +theight}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx - twidth, y: ty + theight, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx - twidth}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx - twidth, y: ty, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx - twidth}, y: ${ty - theight}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx - twidth, y: ty - theight, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx}, y: ${ty - theight}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx, y: ty - theight, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx + twidth}, y: ${ty - theight}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx + twidth, y: ty - theight, width: twidth, height: theight})).to.be.false;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx + twidth}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx + twidth, y: ty, width: twidth, height: theight})).to.be.false;
    //             })
    //         })

    //         describe('Collisions between the rects are true', function() {
    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx + twidth - 1}, y: ${ty + theight - 1}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx + twidth - 1, y: ty + theight - 1, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx}, y: ${ty + theight - 1}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx, y: ty + theight - 1, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx - twidth + 1}, y: ${ty + theight - 1}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx - twidth + 1, y: ty + theight - 1, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx - twidth + 1}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx - twidth + 1, y: ty, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx - twidth + 1}, y: ${ty - theight + 1}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx - twidth + 1, y: ty - theight + 1, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx}, y: ${ty - theight + 1}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx, y: ty - theight + 1, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx + twidth - 1}, y: ${ty - theight + 1}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx + twidth - 1, y: ty - theight + 1, width: twidth, height: theight})).to.be.true;
    //             })

    //             it(`rect(x: ${tx}, y: ${ty}, width: ${twidth}, height: ${theight}) with 
    //                 rect(x: ${tx + twidth - 1}, y: ${ty}, width: ${twidth}, height: ${theight})`, function() {
    //                 expect(ellipse.collision({x: tx + twidth - 1, y: ty, width: twidth, height: theight})).to.be.true;
    //             })
    //         })
    //     });
    })
})