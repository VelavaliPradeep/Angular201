import { Injectable } from '@angular/core';
import { Store, Cart } from './store.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  formData : Store;
  formData1: Cart;

  constructor(private firestore: AngularFirestore) { }

  getBooks(){
    return this.firestore.collection('books').snapshotChanges();
  }
}
