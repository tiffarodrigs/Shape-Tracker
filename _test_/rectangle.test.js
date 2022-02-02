
import Rectangle from "../src/js/rectangle";
describe('Rectangle', () =>{

 test('Should create a rectangle object with two lengths',() => {
  const rectangle=new Rectangle(5,3);
  expect(rectangle.side1).toEqual(5);
  expect(rectangle.side2).toEqual(3);
 });


});