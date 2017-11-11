import {Component} from "@angular/core";
import {selector} from "rxjs/operator/publish";

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Managment';
}
