import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningDetailsComponent } from './evening-details.component';

describe('EveningDetailsComponent', () => {
  let component:EveningDetailsComponent;
  let fixture:ComponentFixture<EveningDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EveningDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
