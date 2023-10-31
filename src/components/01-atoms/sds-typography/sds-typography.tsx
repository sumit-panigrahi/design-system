import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { ElementClassList, FontSizes, FontWeight, TextAlignmentOptions, TextTransformOptions, TypographyTags, TypographyVariants } from '../../../models/sds-typography';

@Component({
  tag: 'sds-typography',
  styleUrl: 'scss/sds-typography.scss',
  shadow: true,
})
export class SdsTypography implements ComponentInterface {
  @Prop() variant: TypographyVariants = TypographyVariants.Span;
  @Prop() size?: FontSizes = FontSizes.Normal;
  @Prop() weight?: FontWeight = FontWeight.Normal;
  @Prop() case?: TextTransformOptions = TextTransformOptions.None;
  @Prop() align?: TextAlignmentOptions = TextAlignmentOptions.Inherit;

  private getTypographyTag(): string {
    return TypographyTags.has(this.variant) ? TypographyTags.get(this.variant) : 'span';
  }

  private getTypographyClassList(): ElementClassList {
    const classlist = {
      typography: true,
      [`typography--variant-${this.variant}`]: !!this.variant,
      [`typography--size-${this.size}`]: !!this.size,
      [`typography--weight-${this.weight}`]: !!this.weight,
      [`typography--case-${this.case}`]: !!this.case,
      [`typography--align-${this.align}`]: !!this.align
    }
    return classlist;
  }
  render() {
    const Tag = this.getTypographyTag();
    const classlist = this.getTypographyClassList();

    return (
      <Host>
        <Tag class={classlist}>
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}

