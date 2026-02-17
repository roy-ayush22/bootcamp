const pi = 3.14;

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

const rect = new Rectangle(5, 10);
console.log(`rectangle area: ${rect.area()}`);
console.log(`perimeter of rect: ${rect.perimeter()}`);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return this.radius * this.radius * pi;
  }

  perimeter() {
    return 2 * pi * this.radius;
  }
}

// const circle = new Circle(6);
// console.log(`area of circle: ${circle.area()}`);
