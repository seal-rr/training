import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookRatingService } from '../shared/book-rating.service';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  const ratingMock = {
    rateUp: () => { },
    rateDown: () => { },
  };

  beforeEach(async(() => {

    spyOn(ratingMock, 'rateUp').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [{
        provide: BookRatingService,
        useValue: ratingMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {
      isbn: '000',
      title: '',
      description: '',
      rating: 1
    };
    fixture.detectChanges();
  });

  // BDD Test
  it('should forward the rateUp call to the book rating service', () => {
    component.rateUp();
    expect(ratingMock.rateUp).toHaveBeenCalled();
  });

  it('should call the service when the BUTTON is clicked', () => {
    const rateUpButton = fixture.debugElement.query(By.css('[testRateUpButton]')).nativeElement as HTMLButtonElement;
    rateUpButton.click();
    expect(ratingMock.rateUp).toHaveBeenCalled();
  });

});
