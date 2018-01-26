const utils = require('./utils.js');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      // if (res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}.`);
      // }
      expect(res).toBe(44).toBeA('number');
    });


    it('should async-add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    });
  })


  it('should square a number', () => {
    var res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
  });

//   it('should async-square a number', (done) => {
//     utils.asyncSquare(5, (total) => {
//       expect(total).toBe(25).toBeA('number');
//       done();
//     });
// })



  // if (res !== 81) {
  //   throw new Error(`Expected 81, but got ${res}.`);
  // }
  // expect(res).toBe(81).toBeA('number');
});

// it('should expect some values', () => {
//   //expect(12).toNotBe(11);
//   //expect({name: 'Chris'}).toEqual({name: 'Chris'});
//   //expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Chris',
//     age: 31,
//     location: 'Austin'
//   }).toExclude({
//     age: 31
//   })
// });

it('should set firstName and lastName', () => {
  var user = {location: 'Austin', age: 31};
  var res = utils.setName(user, 'Chris Jacobi');

  //expect(user).toEqual(res);

  expect(res).toInclude({
    firstName: 'Chris',
    lastName: 'Jacobi'
  });
})
