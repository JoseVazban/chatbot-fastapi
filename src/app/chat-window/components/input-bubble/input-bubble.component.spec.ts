import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBubbleComponent } from './input-bubble.component';

describe('InputBubbleComponent', () => {
  let component: InputBubbleComponent;
  let fixture: ComponentFixture<InputBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBubbleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
