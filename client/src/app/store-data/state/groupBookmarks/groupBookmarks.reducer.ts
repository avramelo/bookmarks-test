import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { GroupBookmarksActionTypes, GroupBookmarksActions } from './groupBookmarks.actions';

import { GroupBookmark } from '../../groupBookmarks/groupBookmark.model';

/**
 * Interface to the part of the Store containing GroupBookmarksState
 * and other information related to GroupBookmark.
 */
export interface GroupBookmarksState extends EntityState<GroupBookmark> {}

export const adapter: EntityAdapter<GroupBookmark> = createEntityAdapter<GroupBookmark>();
export const initialState: GroupBookmarksState = adapter.getInitialState();

export function groupBookmarksReducer(
  state = initialState,
  action: GroupBookmarksActions
): GroupBookmarksState {
  switch (action.type) {
    case GroupBookmarksActionTypes.GroupBookmarksLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
      return state;
  }
}

// get the selectors
const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

// select the array of widget ids
export const selectGroupBookmarksIds = selectIds;

// select the dictionary of widget entities
export const selectGroupBookmarksEntities = selectEntities;

// select the array of widgets
export const selectAllGroupBookmarks = selectAll;

