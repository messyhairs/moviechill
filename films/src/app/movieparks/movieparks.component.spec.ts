import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieparksComponent } from './movieparks.component';

describe('MovieparksComponent', () => {
  let component: MovieparksComponent;
  let fixture: ComponentFixture<MovieparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
