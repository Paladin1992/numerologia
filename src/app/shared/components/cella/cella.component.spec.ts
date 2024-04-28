import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellaComponent } from './cella.component';

describe('CellaComponent', () => {
  let component: CellaComponent;
  let fixture: ComponentFixture<CellaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellaComponent]
    });
    fixture = TestBed.createComponent(CellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
