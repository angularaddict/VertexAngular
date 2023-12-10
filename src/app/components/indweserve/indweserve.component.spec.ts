import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndweserveComponent } from './indweserve.component';

describe('IndweserveComponent', () => {
  let component: IndweserveComponent;
  let fixture: ComponentFixture<IndweserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndweserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndweserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
