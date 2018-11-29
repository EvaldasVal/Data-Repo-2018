import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const appRoutes: Routes = [
  {
    path: 'list',
    component: RequestDetailsComponent
  },
  {
    path: 'create',
    component: RequestCreateComponent
  },
  {
    path: 'edit/:id',
    component: RequestEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    RequestDetailsComponent,
    RequestCreateComponent,
    RequestEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatBadgeModule,
    MatProgressBarModule,
  MatCardModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

