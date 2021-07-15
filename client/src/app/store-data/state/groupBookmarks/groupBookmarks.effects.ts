import { Actions, Effect } from '@ngrx/effects';
import { GroupBookmarksActionTypes, GroupBookmarksLoaded, LoadGroupBookmarks } from './groupBookmarks.actions';

import { DataPersistence } from '@nrwl/nx';
import { GroupBookmark } from '../../groupBookmarks/groupBookmark.model';
import { GroupBookmarksService } from '../../groupBookmarks/groupBookmarks.service';
import { GroupBookmarksState } from './groupBookmarks.reducer';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class GroupBookmarksEffects {
  @Effect()
  loadGroupBookmarks$ = this.dataPersistence.fetch(GroupBookmarksActionTypes.LoadGroupBookmarks, {
    run: (action: LoadGroupBookmarks, state: GroupBookmarksState) => {
      return this.groupBookmarksService.all().pipe(map((res: GroupBookmark[]) => new GroupBookmarksLoaded(res)))
    },

    onError: (action: LoadGroupBookmarks, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<GroupBookmarksState>,
    private groupBookmarksService: GroupBookmarksService
  ) {}
}
