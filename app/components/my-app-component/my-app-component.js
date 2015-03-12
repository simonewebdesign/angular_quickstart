import {Component, Foreach, Template, If} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app-component'
})

@Template({
  url: System.baseURL + 'app/components/my-app-component/my-app-component.html'
})

// Component controller
export class MyAppComponent {
  constructor() {
    this.name = 'John';
  }
}
