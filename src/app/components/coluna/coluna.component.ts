import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-coluna",
  templateUrl: "./coluna.component.html",
  styleUrls: ["./coluna.component.css"],
})
export class ColunaComponent implements OnInit {
  @Input() titulo: string = "";
  constructor() {}

  ngOnInit(): void {}
}
