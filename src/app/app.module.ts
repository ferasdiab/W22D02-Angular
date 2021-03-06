import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SomeComponent } from './some/some.component';
const routes = [{ path: 'todo', component: HomeComponent 
 }]
@NgModule({
  declarations: [AppComponent, HomeComponent, SomeComponent],
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
