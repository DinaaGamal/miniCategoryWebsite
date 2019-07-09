// angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoriesComponent } from "./modules/categories/categories.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

//material

import { AngularMaterialModule } from "./modules/angular-material/angularMaterial.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { CategoriService } from "./services/categories.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCategoryComponent } from "./modules/categories/add-categories/add-categories.component";
import { AddCategoryDialogComponent } from "./modules/categories/add-category-dialog/add-category-dialog.component";
import { CategoryDetailsComponent } from "./modules/categories/category-details/category-details.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    AddCategoryComponent,
    AddCategoryDialogComponent,
    CategoryDetailsComponent,
    CategoryDetailsComponent
  ],
  entryComponents: [AddCategoryDialogComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoriService],
  bootstrap: [AppComponent]
})
export class AppModule {}
