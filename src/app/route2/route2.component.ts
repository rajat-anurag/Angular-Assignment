import { Component, OnInit } from '@angular/core';
import { MockproductList } from "src/mock-objects/product-array";
import { MockProduct} from "src/models/product";
import { MockProductService } from '../mock-product.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  constructor(private productService:MockProductService){
    this.productArray = MockproductList;
    console.log(this.productArray);
  }
  searchText:string='';





  ngOnInit(): void {
    this.productService.getProductList().subscribe(data=>{
      this.tempProductList=data;
    })
    
  }
  tempProductList:any[]=[]
  name = 'Max';
  //default value
  viewLayout = 'grid';
  productArray:MockProduct[];
  filterTypes =['Price low to high','Price high to low'];
  priceTypes=['All Products','<=Rs500','RS 500-1000'];



  changePrice(value: any){
    console.log(value);
   
    if(value == '<=Rs500'){
    this.productService.priceRangeOne().then((data:any)=>{
      this.tempProductList=data;
    })

 
 

    }
    if(value == 'RS 500-1000'){
      this.productService.priceRangeTwo().then((data:any)=>{
        this.tempProductList=data;
      })
  
   
  
      }
  
      if(value == 'All Products'){
        this.productService.priceRangeThree().then((data:any)=>{
          this.tempProductList=data;
        })
      }  
  }




  changeView(value: any){
    console.log(value);
    if(value == 'Price low to high'){
      
      this.productService.sortProductListAsc().then((data:any)=>{
        this.tempProductList=data;
      })
  

 

    }
    if(value == 'Price Range(Rs 1-500)'){
    this.productService.priceRangeOne().then((data:any)=>{
      this.tempProductList=data;
    })

 

    }
    if(value == 'Price high to low'){
      console.log("found low to high")
      
   
    this.productService.sortProductListDes().then((data:any)=>{
      this.tempProductList=data;
    })
 


    }
    

  }
  filterProductList(){
  
    let val=this.searchText;
    this.productService.filterProductList(val)
    .then((data)=>{
      this.tempProductList=data;
    })
  }

  sortProductList(){

  }
 
  layoutView(value: any){
    console.log(value);
    this.viewLayout = value;
  }
 

  

}
