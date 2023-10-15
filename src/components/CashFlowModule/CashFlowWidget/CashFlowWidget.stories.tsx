import type { Meta, StoryObj } from '@storybook/react';
import { CashFlowWidget } from './CashFlowWidget';

const meta = {
    title: 'CashFlowWidget',
    component: CashFlowWidget,
    parameters: {
        innerWidth: 400,
        layout: 'fullscreen',
    },
    args: {
        rate: 800,
        rent: 850,
        primaryColor: '#aa9173',
        secondaryColor: '#ffffff',
        type: 'full',
    },
    argTypes: {
        type: {
            options: ['full', 'slim'],
            control: { type: 'radio' },
        },
        outline: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
    render: args => {
        return (
            <div style={{ padding: 0, margin: 0 }}>
                <CashFlowWidget {...args} />
            </div>
        );
    },
} satisfies Meta<typeof CashFlowWidget>;

export const Primary: StoryObj = {};

export default meta;
