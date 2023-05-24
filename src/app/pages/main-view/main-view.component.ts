import { Board } from "./../../models/board.model";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board("Test board", [
    new Column("Ideas", ["Some random idea", "Another idea"]),
    new Column("Research", ["Lorem Ipsum", "foo"]),
    new Column("Todo", ["Get to work", "Go home"]),
    new Column("Done", ["Get up", "Walk dog"]),
  ]);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
