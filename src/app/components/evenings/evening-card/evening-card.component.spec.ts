import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EveningCardComponent } from './evening-card.component';

describe('EveningCardComponent', () => {
  let component:EveningCardComponent;
  let fixture:ComponentFixture<EveningCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EveningCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
