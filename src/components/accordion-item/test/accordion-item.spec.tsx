import { newSpecPage } from '@stencil/core/testing';
import { AccordionItem } from '../accordion-item';

describe('accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionItem],
      html: `<accordion-item></accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-item>
        <mock:shadow-root>
          <li>
            <h4>Accordion title</h4>
            <div>
              <slot></slot>
            </div>
          </li>
        </mock:shadow-root>
      </accordion-item>
    `);
  });

  it('renders with slot filled', async () => {
    const page = await newSpecPage({
      components: [AccordionItem],
      html: `<accordion-item><p>Text here</p></accordion-item>`,
    });

    expect(page.root).toEqualHtml(`
      <accordion-item>
        <mock:shadow-root>
          <li>
            <h4>Accordion title</h4>
            <div>
              <slot></slot>
            </div>
          </li>
        </mock:shadow-root>
        <p>Text here</p>
      </accordion-item>
    `);
  });
});
