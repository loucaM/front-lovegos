import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesUtilisateursComponent } from './fiches-utilisateurs.component';

describe('FichesUtilisateursComponent', () => {
  let component: FichesUtilisateursComponent;
  let fixture: ComponentFixture<FichesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
