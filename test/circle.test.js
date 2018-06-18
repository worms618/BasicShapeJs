'use strict';
const expect = require('chai').expect;
const cir = require('../circle');

const tx = 10, ty = 5, tr = 10, td = tr * 2;

describe('Testing of basic Circle class', function() {
    describe('Circle properties', function() {
        let circle;
        before(function () {
            circle = new cir();
        })
        it(`Circle has a 'x' property`, function() {
            expect(circle).ownProperty('x');
        })

        it(`Circle has a 'y' property`, function() {
            expect(circle).ownProperty('y');
        })

        it(`Circle has a 'radius' property`, function() {
            expect(circle).ownProperty('radius');
        })
    })

    describe('Circle after initializing', function() {
        let circle;
        before(function () {
            circle = new cir(tx, ty, tr);
        })
        it(`Circle property 'x' has the value which is given in constructor`, function() {
            expect(circle.x).is.equal(tx);
        })

        it(`Circle property 'y' has the value which is given in constructor`, function() {
            expect(circle.y).is.equal(ty);
        })

        it(`Circle property 'radius' has the value which is given in constructor`, function() {
            expect(circle.radius).is.equal(tr);
        })
    })

    describe('Circle functions', function() {
        let circle;
        before(function () {
            circle = new cir(tx, ty, tr);
        })

        it(`area()`, function() {
            const area = Math.PI * tr * tr;
            expect(circle.area()).is.equal(area);
        })

        describe('Bounding box of circle', function() {
            let boundingBox;
            before(function () {
                boundingBox = new cir(tx, ty, tr).getBoundingBox();
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
                expect(boundingBox.x).to.equal(tx - tr);
            })

            it(`Boundingbox property 'y' is the top left coordinate of the bounding box`, function() {
                expect(boundingBox.y).to.equal(ty - tr);
            })

            it(`Boundingbox property 'width' has the value which is given in constructor`, function() {
                expect(boundingBox.width).to.equal(tr * 2);
            })

            it(`Boundingbox property 'height' has the value which is given in constructor`, function() {
                expect(boundingBox.height).to.equal(tr * 2);
            })
        })

        describe('Circle collison detection', function() {
            let circle;
            before(function () {
                circle = new cir(tx, ty, tr);
            })

            it('Collision false, if argument is undefined or null', function() {
                expect(circle.collision(undefined)).to.be.false;
                expect(circle.collision(null)).to.be.false;
            })

            it('Collision false, if argument is not an object', function() {
                expect(circle.collision('string')).to.be.false;
                expect(circle.collision(0)).to.be.false;
            })

            it('Collision false, if argument does not have an x, y and radius property', function() {
                expect(circle.collision({x: 1, y: 1, r: 5})).to.be.false;
            })

            describe('Collisions between the circles are false', function() {
                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td + 1}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td + 1, y: ty, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td + 1}, y: ${ty + td + 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td + 1 , y: ty + td + 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty + td + 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty + td + 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td - 1}, y: ${ty + td + 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td - 1, y: ty + td + 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td - 1}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td - 1, y: ty, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td - 1}, y: ${ty - td - 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td - 1, y: ty - td - 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty - td - 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty - td - 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td + 1}, y: ${ty - td - 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td + 1, y: ty - td - 1, radius: tr})).to.be.false;
                })
            })

            describe('Collisions between the circles are true', function() {
                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td, y: ty, radius: tr})).to.be.true;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty + td}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty + td, radius: tr})).to.be.true;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td, y: ty, radius: tr})).to.be.true;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty - td}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty - td, radius: tr})).to.be.true;
                })
            })
        })

        describe('Circle collison detection', function() {
            let circle;
            before(function () {
                circle = new cir(tx, ty, tr);
            })

            it('Collision false, if argument is undefined or null', function() {
                expect(circle.collisionWithRectangle(undefined)).to.be.false;
                expect(circle.collisionWithRectangle(null)).to.be.false;
            })

            it('Collision false, if argument is not an object', function() {
                expect(circle.collisionWithRectangle('string')).to.be.false;
                expect(circle.collisionWithRectangle(0)).to.be.false;
            })

            it('Collision false, if argument does not have an x, y, width and height property', function() {
                expect(circle.collisionWithRectangle({x: 1, y: 1, width: 5, height: 5})).to.be.false;
            })

            describe('Collisions between the circles are false', function() {
                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td + 1}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td + 1, y: ty, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td + 1}, y: ${ty + td + 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td + 1 , y: ty + td + 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty + td + 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty + td + 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td - 1}, y: ${ty + td + 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td - 1, y: ty + td + 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td - 1}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td - 1, y: ty, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td - 1}, y: ${ty - td - 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td - 1, y: ty - td - 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty - td - 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty - td - 1, radius: tr})).to.be.false;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td + 1}, y: ${ty - td - 1}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td + 1, y: ty - td - 1, radius: tr})).to.be.false;
                })
            })

            describe('Collisions between the circles are true', function() {
                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx + td}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx + td, y: ty, radius: tr})).to.be.true;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty + td}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty + td, radius: tr})).to.be.true;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx - td}, y: ${ty}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx - td, y: ty, radius: tr})).to.be.true;
                })

                it(`circle(x: ${tx}, y: ${ty}, radius: ${tr}) with 
                    circle(x: ${tx}, y: ${ty - td}, radius: ${tr})`, function() {
                    expect(circle.collision({x: tx, y: ty - td, radius: tr})).to.be.true;
                })
            })
        })
    })
})