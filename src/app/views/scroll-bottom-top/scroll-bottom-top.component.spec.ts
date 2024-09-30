import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBottomTopComponent } from './scroll-bottom-top.component';

describe('ScrollBottomTopComponent', () => {
  let component: ScrollBottomTopComponent;
  let fixture: ComponentFixture<ScrollBottomTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollBottomTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollBottomTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
