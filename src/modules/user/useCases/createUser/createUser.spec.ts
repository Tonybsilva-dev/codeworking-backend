
function sum(a: any, b: any) {
  return a + b;
}

describe('createUser', () => {
  it('should create user', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
})
