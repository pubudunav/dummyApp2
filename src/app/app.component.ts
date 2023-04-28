import { Component } from '@angular/core';
import { MyService } from '../../../my-app/src/app/my-service.service'; // Import the service from the other app

@Component({
  selector: 'app-root',
  template: `<p>{{ message }}</p>`
})
export class AppComponent {
  message: string;

  constructor(private myService: MyService) {
    this.message = myService.getData();
  }
}
