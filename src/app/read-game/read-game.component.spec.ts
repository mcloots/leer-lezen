import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGameComponent } from './read-game.component';

describe('ReadGameComponent', () => {
  let component: ReadGameComponent;
  let fixture: ComponentFixture<ReadGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReadGameComponent]
    });
    fixture = TestBed.createComponent(ReadGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
