import { Injectable } from '@angular/core';
import { Store, Cart } from './store.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  formData : Store;
  formData1: Cart;
  userClaims : any;

  constructor(private firestore: AngularFirestore, private userService : UserService,private toastr: ToastrService) { }

  getBooks(){
    return this.firestore.collection('books').snapshotChanges();
  }

  getCartBooks(){
    
       return this.firestore.collection('cart').snapshotChanges();
  }
}
