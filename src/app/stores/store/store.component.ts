import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/store.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private service: StoreService, private firestore: AngularFirestore, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id: null,
      BookId: '',
      BookName: '',
      Author: '',
      Genre: '',
      NoofCopies: null,
    }
  }

  onSubmit(form : NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id == null){
      this.firestore.collection('books').add(data);
      this.toastr.success('Added Successfully','Book to Store');
    }
    else{
      this.firestore.doc('books/'+ form.value.id).update(data);
      this.toastr.success('Updated Successfully','Book to Store');
    }
    this.resetForm(form);
  }
}
