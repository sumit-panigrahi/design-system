import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sds-button',
  styleUrl: 'scss/sds-button.scss',
  shadow: true,
})
export class SdsButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
