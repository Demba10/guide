import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBailleurComponent } from './gestion-bailleur.component';

describe('GestionBailleurComponent', () => {
  let component: GestionBailleurComponent;
  let fixture: ComponentFixture<GestionBailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionBailleurComponent]
    });
    fixture = TestBed.createComponent(GestionBailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
