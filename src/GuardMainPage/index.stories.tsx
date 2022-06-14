import React from 'react';
import { app } from '@kubevious/ui-framework';
import { Meta, Story } from '@storybook/react';
import { GuardService } from '../../test/services/GuardService';

import { GuardMainPage } from './';
import { Button } from '@kubevious/ui-components';

export default {
    title: 'GuardMainPage',
    component: GuardMainPage
} as Meta;

export const Default: Story = () => {

    app.registerService({ kind: 'guard' }, () => {
        return new GuardService(false, 10);
    });
    
    return (
        <div style={{ minHeight: '100vh', maxWidth: '100vw', width: '100vw', height: '100vh' }}>
            <div style={{ background: '#2f3036', height: '100%', width: '100%', position: 'relative' }}>
                <GuardMainPage />
            </div>
        </div>
    );
};

export const MultiPage: Story = () => {

    app.registerService({ kind: 'guard' }, () => {
        return new GuardService(false, 2);
    });
    
    return (
        <div style={{ minHeight: '100vh', maxWidth: '100vw', width: '100vw', height: '100vh' }}>
            <div style={{ background: '#2f3036', height: '100%', width: '100%', position: 'relative' }}>
                <GuardMainPage />
            </div>
        </div>
    );
};


export const Empty: Story = () => {

    app.registerService({ kind: 'guard' }, () => {
        return new GuardService(true, 5);
    });
    
    return (
        <div style={{ minHeight: '100vh', maxWidth: '100vw', width: '100vw', height: '100vh' }}>
            <div style={{ background: '#2f3036', height: '100%', width: '100%', position: 'relative' }}>
                <GuardMainPage />
            </div>
        </div>
    );
};


export const WithHeader: Story = () => {

    app.registerService({ kind: 'guard' }, () => {
        return new GuardService(false, 10);
    });
    
    return (
        <div style={{ minHeight: '100vh', maxWidth: '100vw', width: '100vw', height: '100vh' }}>
            <div style={{ background: '#2f3036', height: '100%', width: '100%', position: 'relative' }}>
                <GuardMainPage header={<>
                    <Button>Do Something</Button>
                </>} />
            </div>
        </div>
    );
};
