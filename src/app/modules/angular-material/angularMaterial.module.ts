import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule,
  MatListModule,
  MatDialogActions,
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MatDialogContent
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogActions,
    MatDialogModule,
    MatDialogContent
  ]
})
export class AngularMaterialModule {}
