import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { StoreListComponent } from './stores/store-list/store-list.component';
import { StoreService } from './shared/store.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksThumbViewComponent } from './stores/books-thumb-view/books-thumb-view.component';
import { CartComponent } from './cart/cart.component';
import { BooksTookbyUsersComponent } from './books-tookby-users/books-tookby-users.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stock', component: StoresComponent },
  { path: 'books', component: BooksThumbViewComponent},
  { path: 'cart', component: CartComponent},
  { path: 'listofbookstookbyUsers', component: BooksTookbyUsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    StoreComponent,
    StoreListComponent,
    HomeComponent,
    BooksThumbViewComponent,
    CartComponent,
    BooksTookbyUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
