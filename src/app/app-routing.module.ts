import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MainModule} from "./main/main.module";

function retornarMain(){
  return MainModule
}

const routes : Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: retornarMain
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
