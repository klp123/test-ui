import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLocationComponent } from './google-location.component';

describe('GoogleLocationComponent', () => {
  let component: GoogleLocationComponent;
  let fixture: ComponentFixture<GoogleLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
