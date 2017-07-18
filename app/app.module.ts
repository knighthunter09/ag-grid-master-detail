import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// master detail
import {MasterComponent} from "./master-detail-example/masterdetail-master.component";
import {DetailPanelComponent} from "./master-detail-example/detail-panel.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                DetailPanelComponent
            ])
    ],
    declarations: [
        AppComponent,
        MasterComponent,
        DetailPanelComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
