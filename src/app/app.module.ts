import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import {MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatFormFieldModule,
   MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppService} from './app.service';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [DialogueComponent],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
