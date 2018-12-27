import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularmoviesComponent } from './popularmovies.component';

describe('PopularmoviesComponent', () => {
  let component: PopularmoviesComponent;
  let fixture: ComponentFixture<PopularmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
