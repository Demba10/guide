import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPorteurComponent } from './gestion-porteur.component';

describe('GestionPorteurComponent', () => {
  let component: GestionPorteurComponent;
  let fixture: ComponentFixture<GestionPorteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPorteurComponent]
    });
    fixture = TestBed.createComponent(GestionPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
