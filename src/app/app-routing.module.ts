import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CategoriesComponent } from "./modules/categories/categories.component";
import { AddCategoryComponent } from "./modules/categories/add-categories/add-categories.component";
import { CategoryDetailsComponent } from "./modules/categories/category-details/category-details.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", redirectTo: "" },
      {
        path: "categories",
        component: CategoriesComponent
      },
      {
        path: "categories/add",
        component: AddCategoryComponent
      },
      {
        path: "categories/:id",
        component: CategoryDetailsComponent
      },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
