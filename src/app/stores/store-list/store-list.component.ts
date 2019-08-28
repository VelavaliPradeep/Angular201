import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/store.service';
import { Store } from 'src/app/shared/store.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  
  list: Store[];
  constructor(private service: StoreService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getBooks().subscribe(
      actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()} as Store
        })
      }); 
  }
  onEdit(bk:Store){
    this.service.formData = Object.assign({},bk);
  }

  onDelete(id:string){
    if(confirm("Are you sure, you want to delete this record?")){
      this.firestore.doc('books/'+ id).delete();
      this.toastr.warning('Deleted Successfully','Book from Store');
    }
  }
}
