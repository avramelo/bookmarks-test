import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BookmarkDetailsComponent } from './bookmark-details.component';
import { By } from '@angular/platform-browser';

describe('BookmarkDetailsComponent', () => {
  let component: BookmarkDetailsComponent;
  let fixture: ComponentFixture<BookmarkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call set Bookmarkt input', () => {
    const inputBookmark = spyOnProperty(component, 'bookmark', 'set');
    component.bookmark = {
      id: '1',
      name: 'test',
      URL: '',
      groupBookmarkId: '2',
    };
    fixture.detectChanges();

    expect(inputBookmark).toHaveBeenCalledWith({
      id: '1',
      name: 'test',
      URL: '',
      groupBookmarkId: '2',
    });
  });

  it('should render matCard', () => {
    component.selectedBookmark = {
      id: '1',
      name: 'test',
      URL: '',
      groupBookmarkId: '2',
    };
    fixture.detectChanges();

    const matCardRef = fixture.debugElement.queryAll(
      By.css('#selected-bookmark')
    );

    expect(matCardRef.length).toBe(1);
  });
});
