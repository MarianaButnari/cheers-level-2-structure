import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;
  beforeEach(() => {
    pipe = new JoinPipe();
  });

  const testCases = [
    {
      values: ['Advocaat', 'Lemonade', 'Lemon', 'Ice'],
      separator: '|',
      expected: 'Advocaat|Lemonade|Lemon|Ice',
    },
    {
      values: ['Advocaat', 'Lemonade', 'Lemon', 'Ice'],
      separator: ',',
      expected: 'Advocaat,Lemonade,Lemon,Ice',
    },
  ];

  testCases.forEach(({ values, separator, expected }) => {
    it(`should transform all the elements of an array into a string, separated by the ${separator}`, () => {
      expect(pipe.transform(values, separator)).toEqual(expected);
    });
  });
});
