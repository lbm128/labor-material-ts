describe('Labor', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('adds 2 + 3 to equal 5', () => {
    expect(2 + 3).toBe(5);
  });

  test('subtracts 2 from 1 to get -1', () => {
    const negOne = 1 - 2;
    expect(negOne).toEqual(-1);
  });
});
