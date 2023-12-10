import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosevertexComponent } from './choosevertex.component';

describe('ChoosevertexComponent', () => {
  let component: ChoosevertexComponent;
  let fixture: ComponentFixture<ChoosevertexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosevertexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosevertexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
