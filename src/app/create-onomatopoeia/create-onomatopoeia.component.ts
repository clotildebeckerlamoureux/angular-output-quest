import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopoeia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-onomatopoeia.component.html',
  styleUrl: './create-onomatopoeia.component.css'
})

export class CreateOnomatopoeiaComponent {
  
  newOnomatopoeia!: string;

  @Output() sendOnomatopoeiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopoeia(): void {
    console.log(this.newOnomatopoeia)
    this.sendOnomatopoeiaToParent.emit(this.newOnomatopoeia)
  }
}
