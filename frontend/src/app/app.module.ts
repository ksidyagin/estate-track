import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

export function tokenGetter() {
  return localStorage.getItem("nestjs_chat_app");
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    NgxDocViewerModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
