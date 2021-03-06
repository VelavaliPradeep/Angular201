import { Component, OnInit } from '@angular/core';
import { Store, Cart } from 'src/app/shared/store.model';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreService } from 'src/app/shared/store.service';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books-thumb-view',
  templateUrl: './books-thumb-view.component.html',
  styleUrls: ['./books-thumb-view.component.css'],
  providers: [DatePipe]
})
export class BooksThumbViewComponent implements OnInit {

  list: Store[];
  Quantity = 1;
  userClaims: any;
  Date = Date.now();
  constructor(private service: StoreService, private firestore: AngularFirestore, private toastr: ToastrService,private datePipe: DatePipe,private userService : UserService) { 
  }

  ngOnInit() {this.service.getBooks().subscribe(
    actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Store
      })
    }), 
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data});
     
}

AddQuantity(){
  this.Quantity = this.Quantity + 1;
}

DeleteQuantity(){
  this.Quantity = this.Quantity - 1;
}

onSubmit(bk: Store){
  let data = {
    id1: bk.id,
    BookId : bk.BookId,
    BookName : bk.BookName,
    Author: bk.Author,
    Genre: bk.Genre,
    NoofCopies : this.Quantity,
    TookDate: this.datePipe.transform(this.Date, 'yyyy-MM-dd'),
    TookBy : this.userClaims.UserName
  };
  let data1 = Object.assign({}, data);
    if(data1.NoofCopies <= bk.NoofCopies && data.NoofCopies > 0){
    this.firestore.collection('cart').add(data1);
    this.toastr.success('Added Successfully','Book to Store');
    }
    else{
      alert("Out of Stock/Selection not Correct. Please Check again...");
    }
}
}