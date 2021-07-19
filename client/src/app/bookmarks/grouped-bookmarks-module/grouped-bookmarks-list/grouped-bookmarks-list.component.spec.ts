import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { GroupedBookmarksListComponent } from './grouped-bookmarks-list.component';

describe('BookmarksListComponent', () => {
  let component: GroupedBookmarksListComponent;
  let fixture: ComponentFixture<GroupedBookmarksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedBookmarksListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedBookmarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
