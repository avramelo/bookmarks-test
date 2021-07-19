import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { BookmarksFacade } from 'src/app/store-data/state/bookmarks/bookmarks.facade';
import { BookmarksStubFacade } from 'src/app/store-data/mock/bookmarks.facade.stub';
import { GroupBookmarksFacade } from 'src/app/store-data/state/groupBookmarks/groupBookmarks.facade';
import { GroupBookmarksFacadeStub } from 'src/app/store-data/mock/groupBookmarks.facade.stub';
import { GroupedBookmarksComponent } from './grouped-bookmarks.component';

describe('GroupedBookmarksComponent', () => {
  let component: GroupedBookmarksComponent;
  let fixture: ComponentFixture<GroupedBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedBookmarksComponent],
      providers: [
        {
          provide: GroupBookmarksFacade,
          useValue: new GroupBookmarksFacadeStub(),
        },
        { provide: BookmarksFacade, useValue: new BookmarksStubFacade() },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
