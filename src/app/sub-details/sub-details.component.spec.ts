import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetailsComponent } from './sub-details.component';

describe('SubDetailsComponent', () => {
  let component: SubDetailsComponent;
  let fixture: ComponentFixture<SubDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
