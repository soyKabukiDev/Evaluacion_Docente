import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersdataComponent } from './teachersdata.component';

describe('TeachersdataComponent', () => {
  let component: TeachersdataComponent;
  let fixture: ComponentFixture<TeachersdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
