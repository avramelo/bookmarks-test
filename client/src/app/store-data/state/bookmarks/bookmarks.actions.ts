import { Action } from '@ngrx/store';
import { Bookmark } from '../../bookmarks/bookmark.model';

export enum BookmarksActionTypes {
  BookmarksAction = '[Bookmarks] Action',
  BookmarkSelected = '[Bookmarks] Selected',
  LoadBookmarks = '[Bookmarks] Load Data',
  BookmarksLoaded = '[Bookmarks] Data Loaded',
  AddBookmark = '[Bookmarks] Add Data',
  BookmarkAdded = '[Bookmarks] Data Added',
  UpdateBookmark = '[Bookmarks] Update Data',
  BookmarkUpdated = '[Bookmarks] Data Updated',
  DeleteBookmark = '[Bookmarks] Delete Data',
  BookmarkDeleted = '[Bookmarks] Data Deleted',
}

export class Bookmarks implements Action {
  readonly type = BookmarksActionTypes.BookmarksAction;
}

export class BookmarkSelected implements Action {
  readonly type = BookmarksActionTypes.BookmarkSelected;
  constructor(public payload: any) { }
}

export class LoadBookmarks implements Action {
  readonly type = BookmarksActionTypes.LoadBookmarks;
  constructor() { }
}

export class BookmarksLoaded implements Action {
  readonly type = BookmarksActionTypes.BookmarksLoaded;
  constructor(public payload: Bookmark[]) { }
}

export class AddBookmark implements Action {
  readonly type = BookmarksActionTypes.AddBookmark;
  constructor(public payload: Bookmark) { }
}

export class BookmarkAdded implements Action {
  readonly type = BookmarksActionTypes.BookmarkAdded;
  constructor(public payload: Bookmark) { }
}

export class UpdateBookmark implements Action {
  readonly type = BookmarksActionTypes.UpdateBookmark;
  constructor(public payload: Bookmark) { }
}

export class BookmarkUpdated implements Action {
  readonly type = BookmarksActionTypes.BookmarkUpdated;
  constructor(public payload: Bookmark) { }
}

export class DeleteBookmark implements Action {
  readonly type = BookmarksActionTypes.DeleteBookmark;
  constructor(public payload: Bookmark) { }
}

export class BookmarkDeleted implements Action {
  readonly type = BookmarksActionTypes.BookmarkDeleted;
  constructor(public payload: Bookmark) { }
}

export type BookmarksActions = Bookmarks
  | BookmarkSelected
  | LoadBookmarks
  | BookmarksLoaded
  | AddBookmark
  | BookmarkAdded
  | UpdateBookmark
  | BookmarkUpdated
  | DeleteBookmark
  | BookmarkDeleted
;
