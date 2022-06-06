import 'jest';

import React from 'react';
import { render } from '@testing-library/react';

import { GuardMainPage } from '../src';
import { app } from '@kubevious/ui-framework';
import { GuardService } from './services/GuardService';

document.createRange = () => {
    const range = new Range();

    range.getBoundingClientRect = jest.fn();

    // @ts-ignore
    range.getClientRects = jest.fn(() => ({
        item: () => null,
        length: 0,
    }));

    return range;
};

const renderComponent = () => render(<GuardMainPage />);

describe('GuardMainPage', () => {
    beforeAll(() => {
        app.registerService({ kind: 'guard' }, () => {
            return new GuardService();
        });
    });

    test('should check that the component Validators is rendered', async () => {
        renderComponent();
    });
});
