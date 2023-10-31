import { newE2EPage } from '@stencil/core/testing';

describe('sds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sds-button></sds-button>');

    const element = await page.find('sds-button');
    expect(element).toHaveClass('hydrated');
  });
});
