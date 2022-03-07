import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public categories: any;
  public currentCategory?: number;

  constructor(private catalogueService: CatalogueService,private router:Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.catalogueService.getResource("/categories")
    .subscribe(
      data=>{this.categories = data;},
      error=>{console.log(error);}
    )
  }

  public getProductsByCat(c:any){
    this.currentCategory = c;
    this.router.navigateByUrl("/products/2/"+c.id);
  }

  public onSelectedProducts(){
    this.currentCategory = undefined;
    this.router.navigateByUrl("/products/1/0");
  }

}
