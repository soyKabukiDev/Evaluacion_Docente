import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingtableComponent } from './ratingtable.component';

describe('RatingtableComponent', () => {
  let component: RatingtableComponent;
  let fixture: ComponentFixture<RatingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
