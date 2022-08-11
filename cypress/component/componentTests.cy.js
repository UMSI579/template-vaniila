import { addNumbers } from '../../js/script'
describe('component tests', () => {
  const iterations = [
    {
      arg1: 3,
      arg2: 4,
      result: 7,
    },
    {
      arg1: 3,
      arg2: -4,
      result: -1,
    },{
      arg1: 30,
      arg2: 32,
      result: 63,
    }
  ];
  iterations.forEach(iteration => {
    it(`correctly adds ${iteration.arg1} + ${iteration.arg2}`, () => {
      const {arg1, arg2, result} = iteration
      cy(addNumbers(arg1, arg2)).should('equal', result)
    })
  })
})
