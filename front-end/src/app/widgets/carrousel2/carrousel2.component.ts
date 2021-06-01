import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carrousel2",
  templateUrl: "./carrousel2.component.html",
  styleUrls: ["./carrousel2.component.scss"],
})
export class Carrousel2Component implements OnInit {
  cards = [
    {
      title: "Card Title 1",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content.",

      img: "assets/img/img1.png",
    },
    {
      title: "Card Title 2",
      description:
        "This card has supporting text below as a natural lead-in to additional content.",

      img: "assets/img/img2.png",
    },
    {
      title: "Card Title 3",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",

      img: "assets/img/img3.png",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",

      img: "assets/img/img1.png",
    },
    {
      title: "Card Title 5",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",

      img: "assets/img/img1.png",
    },
    {
      title: "Card Title 6",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",

      img: "assets/img/img3.png",
    },
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
