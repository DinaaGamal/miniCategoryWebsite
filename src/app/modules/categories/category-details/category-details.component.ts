import { Component, OnInit, Input, Pipe } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoriService } from "src/app/services/categories.service";
import Category from "src/app/model/category";

@Component({
  selector: "app-category-details",
  templateUrl: "./category-details.component.html",
  styleUrls: ["./category-details.component.scss"]
})
export class CategoryDetailsComponent implements OnInit {
  pageTitle = "Category Details";
  errorMessage = "";
  category: Category | undefined;
  nodeCategory;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoriService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      // console.log("param", param);
      const categoryId = +param;
      // console.log("categoryId", categoryId);
      this.getById(categoryId);
      console.log(this.nodeCategory);
    }
  }
  getById(categoryId) {
    this.nodeCategory = this.categoryService
      .getById(categoryId)
      .filter(item => item !== undefined)[0];
    console.log(this.nodeCategory);
  }

  onBack(): void {
    this.router.navigate(["/categories"]);
  }
}
