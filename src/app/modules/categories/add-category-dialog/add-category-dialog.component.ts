import { Component, OnInit, Inject, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DialogData } from "../../../model/DialogData";
import { CategoriService } from "src/app/services/categories.service";
// import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "add-category-dialog",
  templateUrl: "./add-category-dialog.component.html",
  styleUrls: ["./add-category-dialog.component.scss"]
})
export class AddCategoryDialogComponent implements OnInit {
  // form: FormGroup;
  description: string;
  // data: DialogData;
  @Input() category: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _CategoriService: CategoriService,

    private dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // this.description = data.description;
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   category: [name, []]
    // });
  }

  save(value) {
    console.log(value);
    this._CategoriService.add(value);
    this.router.navigate(["/categories"]);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
