import { Component } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddCategoryDialogComponent } from "../add-category-dialog/add-category-dialog.component";

@Component({
  selector: "app-add-categories",
  templateUrl: "./add-categories.component.html",
  styleUrls: ["./add-categories.component.scss"]
})
export class AddCategoryComponent {
  category: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      data: { name: this.name, category: this.category }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = {
    //   id: 1,
    //   title: "create category"
    // };
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
    //   width: "250px",
    //   data: { name: this.name, category: this.category }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("The dialog was closed");
    //   this.category = result;
    // });
  }
}
