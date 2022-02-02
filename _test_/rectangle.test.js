
import Rectangle from "../src/js/rectangle";
describe('Rectangle', () =>{
  let rectangle
beforeEach(()=>{
   rectangle=new Rectangle(5,3);

});
 test('Should create a rectangle object with two lengths',() => {
  expect(rectangle.side1).toEqual(5);
  expect(rectangle.side2).toEqual(3);
 });
 test('should correctly get the area of a rectangle object', () => {
  expect(rectangle.getArea()).toEqual(15);
});

});