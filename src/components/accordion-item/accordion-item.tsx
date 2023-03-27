import { Component, Prop, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'accordion-item',
  styleUrl: 'accordion-item.css',
  shadow: true,
})
export class AccordionItem {

  @Prop() acctitle: string = 'Accordion title'
  @Prop({ mutable: true }) show: boolean = false

  @Event() itemClicked: EventEmitter;

  render() {
    return (
      <Host>
        <li>
          <h4 onClick={() => this.toggleVisible()}>{this.acctitle}</h4>
          <div class={this.show ? 'open' : ''}>
            <slot></slot>
          </div>
        </li>
      </Host>
    );
  }

  private toggleVisible (): void {
    this.show = !this.show
    this.itemClicked.emit(this.show)
  }

}
