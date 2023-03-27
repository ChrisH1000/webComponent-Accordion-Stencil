import { Component, Prop, State, Host, h, Listen, Element } from '@stencil/core';

@Component({
  tag: 'accordion-element',
  styleUrl: 'accordion-element.css',
  shadow: true,
})
export class AccordionElement {
  connectedCallback() {
    this.childCount = this.host.querySelectorAll('accordion-item').length

    this.host.querySelectorAll('accordion-item').forEach(element => {
      if (element.getAttribute('show') === 'true') {
        this.openCount++
      }
    })
  }

  @Prop() opened: boolean
  @Prop() showbtn: boolean

  @State() childCount: number = 0
  @State() openCount: number = 0

  @Element() host: HTMLElement

  @Listen('itemClicked')
  itemClickedHandler(event: CustomEvent) {
    console.log('Received the custom itemClicked event: ', event.detail)
    // this.openCount = event.detail ? this.openCount++ : this.openCount--
    if (event.detail) {
      this.openCount++
    } else {
      this.openCount--
    }
  }

  render() {
    return (
      <Host>
        {this.displayBtn()}
        {this.displayCount()}
        <ul class={this.opened ? 'opened' : ''}>
          <slot></slot>
        </ul>
      </Host>
    )
  }

  private displayBtn(): string {
    if (this.showbtn) {
      return <button onClick={() => this.openCloseAll()}>{this.childCount === this.openCount ? 'Hide All' : 'Show all'}</button>
    }
  }

  private displayCount(): string {
    return <p>{this.openCount} of {this.childCount} open</p>
  }

  private openCloseAll (): void {
    if (this.childCount === this.openCount) {
      this.openCount = 0
      this.host.querySelectorAll('accordion-item').forEach(element => {
        element.setAttribute('show', 'false')
      })
    } else {
      this.openCount = this.childCount
      this.host.querySelectorAll('accordion-item').forEach(element => {
        element.setAttribute('show', 'true')
      })
    }
  }

}
