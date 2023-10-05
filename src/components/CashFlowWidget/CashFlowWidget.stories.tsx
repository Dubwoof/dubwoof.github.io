import type { Meta, StoryObj } from '@storybook/react';
import { CashFlowWidget } from './CashFlowWidget';

const meta = {
    title: 'CashFlowWidget',
    component: CashFlowWidget,
    parameters: {
        innerWidth: 400,
    },
    argTypes: {},
} satisfies Meta<typeof CashFlowWidget>;

export const Primary: StoryObj = {
    render: () => (
        <div style={{ padding: 0, margin: 0 }}>
            <CashFlowWidget rate={800} rent={850} />
        </div>
    ),
};

export default meta;
