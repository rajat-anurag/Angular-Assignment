import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MockproductList } from 'src/mock-objects/product-array';
import { MockProduct } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  productArray:MockProduct[]=MockproductList;

  constructor() { 
    this.productArray=MockproductList;
  }
  public getProductList(){
    return of(this.productArray);
  }
  public filterProductList(searchString:string):Promise<any>{
    return of(this.productArray.filter(
      product=>product.productName.toLowerCase().indexOf(searchString)>-1)
    ).toPromise();
  }
  sortProductListDes():Promise<any>{
    return of(this.productArray.sort( (a:any,b:any) =>  (b.price) - (a.price))).toPromise();
    
  }
  sortProductListAsc():Promise<any>{
    return of(this.productArray.sort( (a:any,b:any) =>  (a.price) - (b.price))).toPromise();
    
  }

  priceRangeOne():Promise<any>{
    return of(this.productArray.filter(
      (product:any)=>(product.price >=0 && product.price <=500 ))
    ).toPromise();
  }
  priceRangeTwo():Promise<any>{
    return of(this.productArray.filter(
      (product:any)=>(product.price >=500 && product.price <=1000 ))
    ).toPromise();
  }

  priceRangeThree():Promise<any>{
    return of(this.productArray.filter(
      (product:any)=>(product.price >=0 ))
    ).toPromise();
  }

}
