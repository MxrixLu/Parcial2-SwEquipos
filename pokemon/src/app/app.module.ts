import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { TrainerModule } from './trainer/trainer.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerRoutingModule } from './trainer/trainer-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PokemonModule, TrainerModule, HttpClientModule, TrainerRoutingModule],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
