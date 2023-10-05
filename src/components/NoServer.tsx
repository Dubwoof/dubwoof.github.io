'use client';

import React, { type ReactNode } from 'react';
import { CashFlowWidget } from './CashFlowWidget/CashFlowWidget';

interface NoServerProps {
    children?: ReactNode;
}

export function NoServer({ children }: NoServerProps): JSX.Element {
    return <CashFlowWidget rate={800} rent={750} />;
}
