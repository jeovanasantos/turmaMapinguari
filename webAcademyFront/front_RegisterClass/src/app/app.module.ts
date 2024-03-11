import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from "../components/card/card.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { TurmaComponent } from './turma/turma.component';
import { TurmaService } from './services/turma.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AppComponent,
     
        
  ],
    providers: [TurmaService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        FormsModule,
        CardComponent,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatGridListModule,
        HttpClientModule
    ]
})
export class AppModule { }
