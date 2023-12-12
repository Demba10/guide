import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUserBloqueeComponent } from './gestion-user-bloquee.component';

describe('GestionUserBloqueeComponent', () => {
  let component: GestionUserBloqueeComponent;
  let fixture: ComponentFixture<GestionUserBloqueeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionUserBloqueeComponent]
    });
    fixture = TestBed.createComponent(GestionUserBloqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
