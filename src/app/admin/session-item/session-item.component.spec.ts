import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItemComponent } from './session-item.component';

describe('SessionItemComponent', () => {
  let component: SessionItemComponent;
  let fixture: ComponentFixture<SessionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
