import { newE2EPage } from '@stencil/core/testing';

describe('sds-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sds-typography></sds-typography>');

    const element = await page.find('sds-typography');
    expect(element).toHaveClass('hydrated');
  });
});
