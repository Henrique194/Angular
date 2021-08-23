import { CapitalizeProductNamePipe } from './capitalize-product-name.pipe';

describe('CapitalizeProductNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeProductNamePipe();
    expect(pipe).toBeTruthy();
  });
});
