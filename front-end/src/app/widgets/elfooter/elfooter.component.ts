import { Component, Input, OnInit } from "@angular/core";
import { UlFooter } from "src/app/models/entities";

@Component({
  selector: "app-elfooter",
  templateUrl: "./elfooter.component.html",
  styleUrls: ["./elfooter.component.scss"],
})
export class ElfooterComponent implements OnInit {
  @Input() tab_el_footer: UlFooter = {
    title: "Qui sommes nous",
    li: [
      "Présentaion",
      "Missions & valeurs",
      "gouvernance & organisation",
      "ressources humains",
      "publication",
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
