import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopoeiaComponent } from './create-onomatopoeia.component';

describe('CreateOnomatopoeiaComponent', () => {
  let component: CreateOnomatopoeiaComponent;
  let fixture: ComponentFixture<CreateOnomatopoeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOnomatopoeiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatopoeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
