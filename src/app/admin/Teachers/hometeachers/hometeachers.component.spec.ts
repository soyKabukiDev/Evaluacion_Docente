import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometeachersComponent } from './hometeachers.component';

describe('HometeachersComponent', () => {
  let component: HometeachersComponent;
  let fixture: ComponentFixture<HometeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HometeachersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
