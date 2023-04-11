import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThinkComponent} from "./components/think/think.component";
import {ListThinkComponent} from "./components/list-think/list-think.component";

const routes: Routes = [
  {
    path: "",
    component: ListThinkComponent,
    pathMatch: "full"
  },
  {
    path: 'createThink',
    component: ThinkComponent
  },
  {
    path: 'listThink',
    component: ListThinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
