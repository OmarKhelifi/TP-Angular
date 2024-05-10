import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItemListComponent } from './session-item-list.component';

describe('SessionItemListComponent', () => {
  let component: SessionItemListComponent;
  let fixture: ComponentFixture<SessionItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
