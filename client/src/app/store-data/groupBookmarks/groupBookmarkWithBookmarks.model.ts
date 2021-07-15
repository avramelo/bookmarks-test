import { Bookmark } from "../bookmarks/bookmark.model";
import { GroupBookmark } from "./groupBookmark.model";

export interface GroupedBookmarksWithBookmarks extends GroupBookmark{
  bookmarks: Bookmark[]
}
