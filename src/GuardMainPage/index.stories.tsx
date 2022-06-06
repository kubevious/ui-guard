import { app } from '@kubevious/ui-framework';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { GuardService } from '../../test/services/GuardService';

import { GuardMainPage } from './';

export default {
    title: 'GuardMainPage',
    component: GuardMainPage,
    decorators: [
        (Story) => (
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        )
      ],
} as Meta;

export const Default: Story = () => {

    app.registerService({ kind: 'guard' }, () => {
        return new GuardService();
    });
    
    return (
        <div style={{ minHeight: '100vh', maxWidth: '100vw', width: '100vw', height: '100vh' }}>
            <div style={{ background: '#2f3036', height: '100%', width: '100%', position: 'relative' }}>
                <GuardMainPage />
            </div>
        </div>
    );
};

