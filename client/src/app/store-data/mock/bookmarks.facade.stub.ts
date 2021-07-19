import { of } from 'rxjs';

export class BookmarksStubFacade {
  allBookmarks$ = of();
  currentBookmark$ = of();
  mutations$ = of();

  constructor() {}

  selectBookmark() {}

  loadBookmarks() {}

  addBookmark() {}

  updateBookmark() {}

  deleteBookmark() {}
}
