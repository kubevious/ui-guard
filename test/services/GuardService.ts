import _ from 'the-lodash';
import { Promise } from 'the-promise';

import {
    ChangePackageItemDetails,
    ChangePackageListItem,
    ChangePackageListResult,
    IGuardService
} from '@kubevious/ui-middleware/dist/services/guard';
import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';

import { ITEMS, MOCK_CHANGES_DATA } from './mock-items';

export class GuardService implements IGuardService {

    getItems(lastId?: string): Promise<ChangePackageListResult>
    {
        return Promise.resolve({
          "totalCount": ITEMS.length,
          "items": ITEMS.map(x => makeListItem(x))
        });
    }

    getDetails(id: string): Promise<ChangePackageItemDetails | null>
    {
        const x = _.find(ITEMS, x => x.change_id === id);
        if (!x) {
          return Promise.resolve(null);
        }

        const listItem = makeListItem(x);

        return Promise.resolve({
          change_id: listItem.change_id,
          date: listItem.date,
          state: listItem.state,
          success: listItem.success,
          changeSummary: listItem.changeSummary,
          validationSummary: listItem.validationSummary,

          charts: [],
          changes: MOCK_CHANGES_DATA,
          deletions: [],

        });
    }

    close()
    {

    }
}


function makeListItem(x : any) : ChangePackageListItem
{
  if (x.state === ValidationState.completed)
  {
    if (x.success)
    {
      return  {
        change_id: x.change_id,
        date: x.date,
        changeSummary: x.changeSummary,
        state: x.state,
        success: true,
        validationSummary: {
          "issues": {
            "raised": {
              "errors": 0,
              "warnings": 0
            },
            "cleared": {
              "errors": 0,
              "warnings": 0
            }
          }
        }
      }
    }
    else
    {
      return  {
        change_id: x.change_id,
        date: x.date,
        changeSummary: x.changeSummary,
        state: x.state,
        success: false,
        validationSummary: {
          "issues": {
            "raised": {
              "errors": 10,
              "warnings": 20
            },
            "cleared": {
              "errors": 0,
              "warnings": 0
            }
          }
        }
      }
    }
  }
  else
  {
    return  {
      change_id: x.change_id,
      date: x.date,
      changeSummary: x.changeSummary,
      state: x.state
    }
  }
}