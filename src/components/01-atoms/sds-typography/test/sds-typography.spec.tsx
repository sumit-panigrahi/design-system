import { newSpecPage } from '@stencil/core/testing';
import { SdsTypography } from '../sds-typography';

describe('sds-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdsTypography],
      html: `<sds-typography></sds-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <sds-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sds-typography>
    `);
  });
});
