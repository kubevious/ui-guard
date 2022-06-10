import 'jest';

import React from 'react';
import { render } from '@testing-library/react';

import { app } from '@kubevious/ui-framework';
import { GuardService } from './services/GuardService';
import { MemoryRouter } from "react-router";
import { ValidationChangeDetails } from '../src/components/ValidationChangeDetails';

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

const renderComponent = () => render(<MemoryRouter initialEntries={['/']}>
    <ValidationChangeDetails changeId="k8s-default-change-d19d1cbd-8288-4fe2-bde5-f4820a42b93f" />
</MemoryRouter>);

describe('ValidationChangeDetails', () => {
    beforeAll(() => {
        app.registerService({ kind: 'guard' }, () => {
            return new GuardService(false, 10);
        });
    });

    test('ValidationChangeDetails page', async () => {
        const { findByTestId } = renderComponent();

        const page = await findByTestId('inner-page');
        expect(page).toBeTruthy();        
    });
});
