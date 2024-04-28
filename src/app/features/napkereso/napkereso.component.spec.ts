import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapkeresoComponent } from './napkereso.component';

describe('NapkeresoComponent', () => {
  let component: NapkeresoComponent;
  let fixture: ComponentFixture<NapkeresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NapkeresoComponent]
    });
    fixture = TestBed.createComponent(NapkeresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
