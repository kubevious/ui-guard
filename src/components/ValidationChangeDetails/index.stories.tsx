import { app } from '@kubevious/ui-framework';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { GuardService } from '../../../test/services/GuardService';

import { ValidationChangeDetails } from './';

export default {
    title: 'ValidationChangeDetails',
    component: ValidationChangeDetails,
} as Meta;

export const Default: Story = () => {

    app.registerService({ kind: 'guard' }, () => {
        return new GuardService(false, 10);
    });
    
    return (
        <div style={{ minHeight: '100vh', maxWidth: '100vw', width: '100vw', height: '100vh' }}>
            <div style={{ background: '#2f3036', height: '100%', width: '100%', position: 'relative' }}>
                <ValidationChangeDetails changeId="k8s-default-change-d19d1cbd-8288-4fe2-bde5-f4820a42b93f" />
            </div>
        </div>
    );
};

