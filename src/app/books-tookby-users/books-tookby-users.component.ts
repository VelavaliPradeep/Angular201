import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/store.model';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from '../shared/store.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-books-tookby-users',
  templateUrl: './books-tookby-users.component.html',
  styleUrls: ['./books-tookby-users.component.css']
})
export class BooksTookbyUsersComponent implements OnInit {

  list: Cart[];
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private service: StoreService, private firestore: AngularFirestore, private toastr: ToastrService,private userService : UserService) { }

  ngOnInit() {
    this.service.getCartBooks().subscribe(
      actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()} as Cart
        })
      }); 
  }

}
