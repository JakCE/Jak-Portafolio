import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingAnimationComponent } from './typing-animation.component';

describe('TypingAnimationComponent', () => {
  let component: TypingAnimationComponent;
  let fixture: ComponentFixture<TypingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
