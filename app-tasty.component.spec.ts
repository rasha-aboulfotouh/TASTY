import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTastyComponent } from './app-tasty.component';

describe('AppTastyComponent', () => {
  let component: AppTastyComponent;
  let fixture: ComponentFixture<AppTastyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTastyComponent]
    });
    fixture = TestBed.createComponent(AppTastyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
