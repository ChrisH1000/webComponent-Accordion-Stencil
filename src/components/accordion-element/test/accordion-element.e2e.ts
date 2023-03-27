import { newE2EPage } from '@stencil/core/testing';

describe('accordion-element', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-element></accordion-element>');

    const element = await page.find('accordion-element');
    expect(element).toHaveClass('hydrated');
  });

  it('changes item count on btn click', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-element showbtn="true"><accordion-item>Text here</accordion-item></accordion-element>');
    const btn = await page.find('accordion-element >>> button');
    const p = await page.find('accordion-element >>> p');

    expect(p).toEqualText('0 of 1 open');
    await btn.click();
    expect(p).toEqualText('1 of 1 open');
  });
});
