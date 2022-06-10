import _ from 'the-lodash';
import { Promise } from 'the-promise';

import {
    ChangePackageItemDetails,
    ChangePackageListItem,
    ChangePackageListResult,
    IGuardService
} from '@kubevious/ui-middleware/dist/services/guard';
import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';

import { ITEMS, MOCK_CHANGES_DATA, MOCK_DELETIONS_DATA, MOCK_NEW_ISSUES_DATA, MOCK_CLEARED_ISSUES_DATA } from './mock/items';

export class GuardService implements IGuardService {

    private _itemData : any[] = [];
    private _resultCount : number;

    constructor(isEmpty: boolean, resultCount: number)
    {
      console.log("[GuardService] constructor");
      this._resultCount = resultCount;
      if (!isEmpty) {
        this._itemData = ITEMS;
      }
    }

    getItems(lastId?: string): Promise<ChangePackageListResult>
    {
      console.log("[LastId] ", lastId);
      let matchingItems : any[] = this._itemData;
      if (lastId) {
        const index = _.findIndex(matchingItems, x => x.change_id === lastId);
        if (index !== -1) {
          matchingItems = _.drop(matchingItems, index + 1);
        }
      }

      const selectedItems = _.take(matchingItems, this._resultCount);

      let nextId : string | undefined;
      if (selectedItems.length < matchingItems.length) {
        nextId = _.last(selectedItems).change_id;
      }

      return Promise.resolve({
        totalCount: this._itemData.length,
        nextId: nextId,
        items: selectedItems.map(x => makeListItem(x))
      });
    }

    getDetails(id: string): Promise<ChangePackageItemDetails | null>
    {
        const x = _.find(this._itemData, x => x.change_id === id);
        if (!x) {
          return Promise.resolve(null);
        }

        const listItem = makeListItem(x);

        const details : ChangePackageItemDetails = {
          change_id: listItem.change_id,
          date: listItem.date,
          state: listItem.state,
          success: listItem.success,
          changeSummary: listItem.changeSummary,
          validationSummary: listItem.validationSummary,

          charts: [],
          changes: MOCK_CHANGES_DATA,
          deletions: MOCK_DELETIONS_DATA,
          newIssues: MOCK_NEW_ISSUES_DATA,
          clearedIssues: MOCK_CLEARED_ISSUES_DATA
        }

        return Promise.resolve(details);
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