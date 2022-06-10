import 'jest';

import React from 'react';
import { render } from '@testing-library/react';

import { GuardMainPage } from '../src';
import { app } from '@kubevious/ui-framework';
import { GuardService } from './services/GuardService';
import { MemoryRouter } from "react-router";

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

const renderComponent = () => render(<MemoryRouter initialEntries={['/']}><GuardMainPage /></MemoryRouter>);

describe('GuardMainPage', () => {
    beforeAll(() => {
        app.registerService({ kind: 'guard' }, () => {
            return new GuardService(false, 10);
        });
    });

    test('Guard Main page', async () => {
        const { findByTestId } = renderComponent();

        const page = await findByTestId('inner-page');
        expect(page).toBeTruthy();        
    });
});
