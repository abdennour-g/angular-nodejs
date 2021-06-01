import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  b: boolean = true;
  diapos: string[] = [
    "assets/img/d1.jpg",
    "assets/img/d2.jpg",
    "assets/img/d3.jpg",
  ];
  diapos2: string[] = [
    "assets/img/d4.jpg",
    "assets/img/d5.jpg",
    "assets/img/d6.jpg",
    "assets/img/d7.jpg",
  ];
  constructor() {}

  ngOnInit(): void {}
}
