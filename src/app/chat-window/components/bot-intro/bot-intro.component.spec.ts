import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotIntroComponent } from './bot-intro.component';

describe('BotResponseComponent', () => {
  let component: BotIntroComponent;
  let fixture: ComponentFixture<BotIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
