import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TarefasModule,    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
