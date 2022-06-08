import _ from 'the-lodash';
import React from 'react';
import { useSearchQuery } from '@kubevious/ui-framework';
import { ValidationChangeDetails } from '../components/ValidationChangeDetails';

export const ValidationChangeDetailsPage = () => {

    const changeId = useSearchQuery('change');

    return (
        <ValidationChangeDetails 
            changeId={changeId ?? ""}
            />
    );
    
};
