import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfe-parent';

  CustomEventDemo() {
    const data = {
      name: 'Vishal'
    };
    const event = new CustomEvent('data-to-child', { detail: data });
    window.dispatchEvent(event);

  }

}
