import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>Marvellous Infosystems</h1>
  </div>
  <div style="text-align:center">
  <input type="text" name="marvellous">
  </div>`,
  styles: [`h1{color:blue}`]
})
export class AppComponent {
}
