import * as Actions from './bookmarks.actions';

import { Action } from 'rxjs/internal/scheduler/Action';
import { Bookmark } from '../../bookmarks/bookmark.model';

const payload: Bookmark = {
  id: '8',
  name: 'TEst',
  groupBookmarkId: '3',
  URL: 'https://google.com',
};

const payloadList: Bookmark[] = [payload];

describe('Store > Data > DataActions', () => {
  it('Should create a BookmarkSelected action', () => {
    const action = new Actions.BookmarkSelected(payload);
    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.BookmarkSelected,
      payload,
    });
  });

  it('Should create a LoadBookmarks action', () => {
    const action = new Actions.LoadBookmarks();
    expect(action.type).toEqual('[Bookmarks] Load Data');
  });

  it('Should create a BookmarksLoaded action', () => {
    const action = new Actions.BookmarksLoaded(payloadList);

    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.BookmarksLoaded,
      payload: payloadList,
    });
  });

  it('Should create a AddBookmark action', () => {
    const action = new Actions.AddBookmark(payload);
    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.AddBookmark,
      payload,
    });
  });

  it('Should create a BookmarkAdded action containing a payload', () => {
    const payload: Bookmark = {
      id: null,
      name: null,
      groupBookmarkId: null,
      URL: null,
    };
    const action = new Actions.BookmarkAdded(payload);

    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.BookmarkAdded,
      payload,
    });
  });

  it('Should create a UpdateBookmark action containing a payload', () => {
    const action = new Actions.UpdateBookmark(payload);

    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.UpdateBookmark,
      payload,
    });
  });

  it('Should create a BookmarkUpdated action', () => {
    const action = new Actions.BookmarkUpdated(payload);
    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.BookmarkUpdated,
      payload,
    });
  });

  it('Should create a DeleteBookmark action', () => {
    const action = new Actions.DeleteBookmark(payload);
    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.DeleteBookmark,
      payload,
    });
  });

  it('Should create a BookmarkDeleted action containing a payload', () => {
    const action = new Actions.BookmarkDeleted(payload);

    expect({ ...action }).toEqual({
      type: Actions.BookmarksActionTypes.BookmarkDeleted,
      payload,
    });
  });
});
