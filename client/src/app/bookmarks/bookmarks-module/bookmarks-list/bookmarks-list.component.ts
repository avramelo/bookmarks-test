import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  prepareListState,
  trackItem,
} from 'src/app/utils/helper-functions.utils';

import { Bookmark } from 'src/app/store-data/bookmarks/bookmark.model';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss'],
})
export class BookmarksListComponent {
  @Input() bookmarks: Bookmark[] | undefined;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() addNew = new EventEmitter();

  trackItem = trackItem;

  prepareListState = prepareListState;
}
