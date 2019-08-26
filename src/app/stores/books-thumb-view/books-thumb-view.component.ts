import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/shared/store.model';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreService } from 'src/app/shared/store.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-books-thumb-view',
  templateUrl: './books-thumb-view.component.html',
  styleUrls: ['./books-thumb-view.component.css']
})
export class BooksThumbViewComponent implements OnInit {

  list: Store[];
  constructor(private service: StoreService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {this.service.getBooks().subscribe(
    actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Store
      })
    }); 
}

onSubmit(form : NgForm){
  let data = form.value;
  this.firestore.collection('cart').add(data);
  this.toastr.success('Added Successfully','Book to Cart');
}
}
