import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsBrandsComponent } from './clients-brands.component';

describe('ClientsBrandsComponent', () => {
  let component: ClientsBrandsComponent;
  let fixture: ComponentFixture<ClientsBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
