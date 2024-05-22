import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopoeiaComponent } from './create-onomatopoeia/create-onomatopoeia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOnomatopoeiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-output-quest';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopoeia(event: string):void {
    console.log(event)
    this.onomatopoeiaList?.push(event)
    console.log(this.onomatopoeiaList)
  }
}
