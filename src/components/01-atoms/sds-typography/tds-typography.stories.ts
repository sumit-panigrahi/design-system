import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { FontSizes, FontWeight, TextAlignmentOptions, TextTransformOptions, TypographyVariants } from '../../../models/sds-typography';
import { SdsTypography } from './sds-typography';

const variants = Object.values(TypographyVariants);
const alignments = Object.values(TextAlignmentOptions);
const cases = Object.values(TextTransformOptions);
const weights = Object.values(FontWeight);
const sizes = Object.values(FontSizes);

const meta: Meta<SdsTypography> = {
    component: 'sds-typography',
    title: 'ATOMS / Typography',
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        variant: {
            // name: 'Typography Variant',
            // defaultValue: TypographyVariants.Heading1,
            options: variants,
            control: { type: 'select' },
            // type: 'string',
            // description: 'Defines Typography variant'
        },
        align: {
            options: alignments,
            control: { type: 'select' },
        },
        case: {
            options: cases,
            control: { type: 'select' },
        },
        weight: {
            options: weights,
            control: { type: 'select' },
        },
        size: {
            options: sizes,
            control: { type: 'select' },
        },

    },
    // decorators: [(story) => `<div style="margin: 3em;border: 1px solid white;padding:1rem">${story()}</div>`],
    render: (args) => html`<sds-typography variant=${args.variant} size=${args.size} weight=${args.weight} case=${args.case} align=${args.align}> The quick brown fox jumps over the lazy dog </sds-typography>`,
};
export default meta;

type Story = StoryObj<SdsTypography>;

export const Primary: Story = {
    args: {
        variant: TypographyVariants.Heading1,
    },
};
export const All: Story = {

    parameters: {
        docs: {
            source: { language: 'html' },
        },
    },
    args: {
        variant: TypographyVariants.Heading2
    },
    render: () => html`${variants.map(variant => html`<sds-typography variant=${variant}> The quick brown fox jumps over the lazy dog </sds-typography>`)}`,
};