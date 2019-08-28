import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/store.model';
import { StoreService } from '../shared/store.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  list: Cart[];
  constructor(private service: StoreService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {this.service.getCartBooks().subscribe(
    actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Cart
      })
    }); 
}
onDelete(id:string) {
  if(confirm("Are you sure, you want to delete this record?")){
    this.firestore.doc('cart/'+ id).delete();
    this.toastr.warning('Deleted Successfully','Book from Cart');
  }
}
}
