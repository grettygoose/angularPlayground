import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OncoscapeComponent  } from './oncoscape/oncoscape.component';
import { SttrComponent  } from './sttr/sttr.component';
import { MouseAtlasComponent  } from './mouse-atlas/mouse-atlas.component';
import { MainComponent  } from './main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }
  { path: 'main', component: MainComponent },
  { path: 'oncoscape', component: OncoscapeComponent },
  { path: 'sttr', component: SttrComponent },
  { path: 'mouse-atlas', component: MouseAtlasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



