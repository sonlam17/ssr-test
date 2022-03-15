import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr-test';
  handleInputUpdate(e: Event) : void {
    console.log((e.target as HTMLInputElement).value);
  }
}
