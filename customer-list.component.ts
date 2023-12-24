import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer.model';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
data :undefined |Customer[];
item: any;
fname :any;

  constructor(private api :ApiService){}

  ngOnInit(): void {
    this.getCustomer(); 
  }

  getCustomer(){
    this.api.getCustomer().subscribe(res=>{
      this.data=res;
    })
  }

  //delete data
  delete(id:number){
    this.api.deleteCustomer(id).subscribe(res=>{
      alert("customer deleted succesfully!!");
      this.getCustomer();
    })
  }

  serach(){
    if(this.fname === ''){
      this.ngOnInit();
    }else{
      this.data = this.data?.filter(res=>{
        return res.fname?.toLowerCase().match(this.fname.toLowerCase())
      })
    }
  }

  
  logout(){
    localStorage.removeItem("logindata")
  }
  
}
