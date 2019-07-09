import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Category from "../model/category";

@Injectable({
  providedIn: "root"
})
export class CategoriService {
  categories: Category[];
  categoryDeleted: Subject<string>;

  constructor() {
    this.categoryDeleted = new Subject<string>();
    this.categories = [
      {
        id: "1",
        cName: "Mobile Phones",
        items: [
          { id: "10", name: "iPhone4", code: "#123", price: "13,000" },
          { id: "11", name: "iPhone5", code: "#123", price: "14,000" },
          { id: "12", name: "iPhone6", code: "#123", price: "15,000" }
        ]
      },
      {
        id: "2",
        cName: "Watches",
        items: [
          { id: "13", name: "w1", code: "#143", price: "10,000" },
          { id: "14", name: "w2", code: "#133", price: "14,000" },
          { id: "15", name: "w3", code: "#153", price: "15,000" }
        ]
      },
      {
        id: "3",
        cName: "cars",
        items: [
          { id: "16", name: "c1", code: "#143", price: "10,000" },
          { id: "17", name: "c2", code: "#133", price: "14,000" },
          { id: "18", name: "c3", code: "#153", price: "15,000" }
        ]
      }
    ];
  }

  getAll() {
    return this.categories;
  }
  getById(categoryId: string) {
    console.log("inside the service");
    return this.categories.map(category =>
      category.items.find(c => c.id == categoryId)
    );
  }

  delete(categoryId: string) {
    const index = this.categories.findIndex(c => c.id === categoryId);
    if (index > -1) this.categories.splice(index, 1);
    this.categoryDeleted.next(categoryId);
  }
  add(category: string) {
    let newCategory = { id: "1000", cName: category, items: [] };
    this.categories.push(newCategory);
  }
  edit(category: Category) {
    const c = this.getById(category.id);
    Object.assign(c, category);
  }
  search(searchTxt: string) {
    return this.categories.filter(c =>
      c.cName.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
}
