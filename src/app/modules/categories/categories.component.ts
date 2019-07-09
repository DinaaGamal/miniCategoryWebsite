import { Component, OnInit, Input } from "@angular/core";
import { CategoriService } from "src/app/services/categories.service";
import Category from "src/app/model/category";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Category[];
  bgColor: string;
  CategoriesService: CategoriService;
  category: Category | undefined;

  constructor(private _CategoriService: CategoriService) {
    this.CategoriesService = _CategoriService;
  }
  ngOnInit() {
    this.categories = this.CategoriesService.getAll();
  }

  search(searchText) {
    if (searchText !== "")
      this.categories = this.CategoriesService.search(searchText.value);
  }
  reset(searchText) {
    searchText.value = "";
    this.categories = this.CategoriesService.getAll();
  }
  deleteCategory(id) {
    this.CategoriesService.delete(id);
  }
}
