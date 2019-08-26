import { Injectable } from '@angular/core';
import { Store } from './store.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  formData : Store;

  constructor(private firestore: AngularFirestore) { }

  getBooks(){
    return this.firestore.collection('books').snapshotChanges();
  }
}
