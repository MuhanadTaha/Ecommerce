import { UserProductsPipe } from './user-products.pipe';

describe('UserProductsPipe', () => {
  it('create an instance', () => {
    const pipe = new UserProductsPipe();
    expect(pipe).toBeTruthy();
  });
});
