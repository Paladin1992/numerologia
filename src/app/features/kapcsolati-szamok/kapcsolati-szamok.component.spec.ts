import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapcsolatiSzamokComponent } from './kapcsolati-szamok.component';

describe('KapcsolatiSzamokComponent', () => {
  let component: KapcsolatiSzamokComponent;
  let fixture: ComponentFixture<KapcsolatiSzamokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KapcsolatiSzamokComponent]
    });
    fixture = TestBed.createComponent(KapcsolatiSzamokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
