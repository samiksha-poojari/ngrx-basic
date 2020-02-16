import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { tutorialReducer } from "./reducers/tutorial.reducer";
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      tutorialReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
