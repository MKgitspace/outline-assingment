import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexPipe } from './commanService/flex.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FlexPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
