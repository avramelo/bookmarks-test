import * as GroupBookmarksActions from './groupBookmarks.actions';

import { Store, select } from '@ngrx/store';

import { GroupBookmarksState } from './groupBookmarks.reducer';
import { Injectable } from '@angular/core';
import { selectAllGroupBookmarks } from '..';

@Injectable({
  providedIn: 'root'
})
export class GroupBookmarksFacade {
  allGroupBookmarks$ = this.store.pipe(select(selectAllGroupBookmarks));

  constructor(private store: Store<GroupBookmarksState>) {}

  loadGroupBookmarks() {
    this.store.dispatch(new GroupBookmarksActions.LoadGroupBookmarks());
  }
}
