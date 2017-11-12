import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  _listFilter: string;

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;

  products: IProduct[];
  filteredProducts: IProduct[];
  showImage: boolean = false;
  errorMessage: string;

  constructor(private _productService: ProductService) {
    this.listFilter;
  }


  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle + message;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => {
          this.products = products
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error);

  }
}
