import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebComponent } from "./components/web/web.component";

const routes : Routes = [
    {path : '', component : WebComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}