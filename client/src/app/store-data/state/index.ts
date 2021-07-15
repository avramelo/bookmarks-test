import * as fromBookmarks from './bookmarks/bookmarks.reducer';
import * as fromGroupBookmarks from './groupBookmarks/groupBookmarks.reducer';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { Bookmark } from '../bookmarks/bookmark.model';

export interface AppState {
  groupBookmarks: fromGroupBookmarks.GroupBookmarksState,
  bookmarks: fromBookmarks.BookmarksState
}

export const reducers: ActionReducerMap<AppState> = {
  //@ts-ignore
  groupBookmarks: fromGroupBookmarks.groupBookmarksReducer,
  //@ts-ignore
  bookmarks: fromBookmarks.bookmarksReducer
};

// -------------------------------------------------------------------
// BOOKMARKS SELECTORS
// -------------------------------------------------------------------
export const selectBookmarksState = createFeatureSelector<fromBookmarks.BookmarksState>('bookmarks');

export const selectBookmarkIds = createSelector(
  selectBookmarksState,
  fromBookmarks.selectBookmarkIds
);
export const selectBookmarkEntities = createSelector(
  selectBookmarksState,
  fromBookmarks.selectBookmarkEntities
);
export const selectAllBookmarks = createSelector(
  selectBookmarksState,
  fromBookmarks.selectAllBookmarks
);
export const selectCurrentBookmarkId = createSelector(
  selectBookmarksState,
  fromBookmarks.getSelectedBookmarkId
);

const emptyBookmark: Bookmark = {
  id: null,
  name: '',
  URL: '',
  groupBookmarkId: null
}

export const selectCurrentBookmark = createSelector(
  selectBookmarkEntities,
  selectCurrentBookmarkId,
  (bookmarkEntities, bookmarkId) => {
    return bookmarkId ? bookmarkEntities[bookmarkId] : emptyBookmark;
  }
);

// -------------------------------------------------------------------
// BOOKMARKS GROUPS SELECTORS
// -------------------------------------------------------------------
export const selectGroupBookmarksState = createFeatureSelector<fromGroupBookmarks.GroupBookmarksState>('groupBookmarks');

export const selectAllGroupBookmarks = createSelector(
  selectGroupBookmarksState,
  fromGroupBookmarks.selectAllGroupBookmarks
);

export const selectGroupBookmarks = createSelector(
  selectAllGroupBookmarks,
  selectAllBookmarks,
  (groupBookmarks, bookmarks) => {
    return groupBookmarks.map(groupBookmark => ({
      ...groupBookmark,
      bookmarks: bookmarks.filter(bookmark => bookmark.groupBookmarkId === groupBookmark.id)
    }));
  }
);
