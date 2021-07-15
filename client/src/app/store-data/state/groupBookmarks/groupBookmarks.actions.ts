import { Action } from '@ngrx/store';

export enum GroupBookmarksActionTypes {
  LoadGroupBookmarks = '[GroupBookmarks] Load Data',
  GroupBookmarksLoaded = '[GroupBookmarks] Data Loaded'
}

export class LoadGroupBookmarks implements Action {
  readonly type = GroupBookmarksActionTypes.LoadGroupBookmarks;
  constructor() {}
}

export class GroupBookmarksLoaded implements Action {
  readonly type = GroupBookmarksActionTypes.GroupBookmarksLoaded;
  constructor(public payload: any) {}
}

export type GroupBookmarksActions = LoadGroupBookmarks | GroupBookmarksLoaded;
