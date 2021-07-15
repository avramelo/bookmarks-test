import { BookmarksActionTypes, BookmarksActions } from './bookmarks.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { Bookmark } from '../../bookmarks/bookmark.model';

/**
 * Interface to the part of the Store containing BookmarksState
 * and other information related to BookmarksData.
 */
export interface BookmarksState extends EntityState<Bookmark> {
  selectedBookmarkId: string | undefined;
}

export const adapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();
export const initialState: BookmarksState = adapter.getInitialState({
  // additional entity state properties
  selectedBookmarkId: undefined,
});

export function bookmarksReducer(state = initialState, action: BookmarksActions): BookmarksState {
  switch (action.type) {
    case BookmarksActionTypes.BookmarkSelected: {
      return Object.assign({}, state, { selectedBookmarkId: action.payload });
    }

    case BookmarksActionTypes.BookmarksLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case BookmarksActionTypes.BookmarkAdded: {
      return adapter.addOne(action.payload, state);
    }

    case BookmarksActionTypes.BookmarkUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case BookmarksActionTypes.BookmarkDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedBookmarkId = (state: BookmarksState) => state.selectedBookmarkId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of bookmark ids
export const selectBookmarkIds = selectIds;

// select the dictionary of bookmark entities
export const selectBookmarkEntities = selectEntities;

// select the array of bookmarks
export const selectAllBookmarks = selectAll;

// select the total bookmark count
export const selectBookmarkTotal = selectTotal;
