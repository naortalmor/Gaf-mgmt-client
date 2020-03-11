import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GafMemberCardComponent } from './gaf-member-card.component';

describe('GafMemberCardComponent', () => {
  let component: GafMemberCardComponent;
  let fixture: ComponentFixture<GafMemberCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GafMemberCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GafMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
