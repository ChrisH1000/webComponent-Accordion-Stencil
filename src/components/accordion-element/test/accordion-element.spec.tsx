import { newSpecPage } from '@stencil/core/testing';
import { AccordionElement } from '../accordion-element';

describe('accordion-element', () => {
  it('renders empty accordion element', async () => {
    const page = await newSpecPage({
      components: [AccordionElement],
      html: `<accordion-element></accordion-element>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-element>
        <mock:shadow-root>
          <p>0 of 0 open</p>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </accordion-element>
    `);
  });

  it('renders accordion element with opened prop as false', async () => {
    const page = await newSpecPage({
      components: [AccordionElement],
      html: `<accordion-element opened="false"></accordion-element>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-element opened="false">
        <mock:shadow-root>
          <p>0 of 0 open</p>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </accordion-element>
    `);
  });

  it('renders accordion element with opened prop as true', async () => {
    const page = await newSpecPage({
      components: [AccordionElement],
      html: `<accordion-element opened="true"></accordion-element>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-element opened="true">
        <mock:shadow-root>
          <p>0 of 0 open</p>
          <ul class="opened">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </accordion-element>
    `);
  });

  it('renders accordion element showall button', async () => {
    const page = await newSpecPage({
      components: [AccordionElement],
      html: `<accordion-element showbtn="true"></accordion-element>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-element showbtn="true">
        <mock:shadow-root>
          <button>Hide All</button>
          <p>0 of 0 open</p>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </accordion-element>
    `);
  });

  it('renders accordion element with slot filled', async () => {
    const page = await newSpecPage({
      components: [AccordionElement],
      html: `<accordion-element><li>Test</li></accordion-element>`,
    });

    expect(page.root).toEqualHtml(`
      <accordion-element>
        <mock:shadow-root>
          <p>0 of 0 open</p>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
        <li>Test</li>
      </accordion-element>
    `);
  });

  it('renders with child count updated', async () => {
    const page = await newSpecPage({
      components: [AccordionElement],
      html: `<accordion-element><accordion-item show="true">Text here</accordion-item></accordion-element>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-element>
        <mock:shadow-root>
          <p>1 of 1 open</p>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
        <accordion-item show="true">Text here</accordion-item>
      </accordion-element>
    `);
  });
});
