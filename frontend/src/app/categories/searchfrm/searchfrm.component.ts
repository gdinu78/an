import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SupplierModel} from "../../_models/supplier.model";
import {SupplierRespModel} from "../../_models/supplierResp.model";
import {BackendService} from "../../_services";

@Component({
  selector: 'app-searchfrm',
  templateUrl: './searchfrm.component.html',
  styleUrls: ['./searchfrm.component.scss']
})
export class SearchfrmComponent{
    @Output() searchDone=new EventEmitter();
    sdata:SupplierModel;
    sdataArr:Array<SupplierModel>;
    sdataArrCount:number;
    @Input() s_category:string;

  constructor(private backendService: BackendService){
      this.sdata={
          type:this.s_category,
          name: null,
          lifecycle: null,
          place: null,
          phoneNumber: null,
          email: null,
          minPrice: null,
          minInv: null,
          maxInv: null,
          outdoor: null,
          accommodation: null,
          fireworks: null,
          events: null,
          preparations: null,
          parking: null,
          password: null,
      }
  }
    updatePlace(place){
        if(place!=null) {
            this.sdata.place = place;
        }else{
            //are eroare
        }
    }

    onSubmit():void{
        this.backendService.postResults('/suppliers/search',this.sdata)
            .subscribe((data : SupplierRespModel)=>{
            this.sdataArr=data.results;
            this.sdataArrCount=data.count;
            this.searchDone.emit(data);
        },
                error => {
                    console.log('am eroarea: ', error);
                    this.sdataArr = [];
                    this.searchDone.emit(null);
                });
        }
}
