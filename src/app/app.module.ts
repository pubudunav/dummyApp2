import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { MyService } from '../../../my-app/src/app/my-service.service'; // Import the service from the other app

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  providers: [MyService], // Add the service to the providers array
  bootstrap: [AppComponent]
})
export class AppModule {}
