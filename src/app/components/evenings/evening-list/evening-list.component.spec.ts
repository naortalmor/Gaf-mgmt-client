import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningListComponent } from './evening-list.component';

describe('EveningListComponent', () => {
  let component:EveningListComponent;
  let fixture:ComponentFixture<EveningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EveningListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
