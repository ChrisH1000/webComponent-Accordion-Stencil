import { newE2EPage } from '@stencil/core/testing';

describe('accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-item></accordion-item>');

    const element = await page.find('accordion-item');
    expect(element).toHaveClass('hydrated');
  });

  it('changes class on title click', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-item>Text here</accordion-item>');
    const h4 = await page.find('accordion-item >>> h4');
    const div = await page.find('accordion-item >>> div');

    expect(div).not.toHaveClass('open');

    await h4.click();

    expect(div).toHaveClass('open');
  });
});
