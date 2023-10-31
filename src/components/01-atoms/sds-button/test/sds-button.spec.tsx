import { newSpecPage } from '@stencil/core/testing';
import { SdsButton } from '../sds-button';

describe('sds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdsButton],
      html: `<sds-button></sds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sds-button>
    `);
  });
});
