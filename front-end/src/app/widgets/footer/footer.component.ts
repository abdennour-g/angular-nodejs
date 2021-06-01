import { Component, OnInit, Input } from "@angular/core";
import { UlFooter } from "src/app/models/entities";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  copyright: string = "2016 Copyright - tous droit réservés";
  @Input() tab_footer: UlFooter[] = [
    {
      title: "Qui sommes nous",
      li: [
        "Présentaion",
        "Missions & valeurs",
        "gouvernance & organisation",
        "ressources humains",
        "publication",
      ],
    },
    { title: "Nos projets", li: ["carte interactive"] },
    { title: "Nos metiers", li: ["Metiers & experiences", "Modèle integré"] },
    {
      title: "Presse",
      li: ["Communiqués de presse", "Dossiers de presse", "Revus de presse"],
    },
    {
      title: "Contactez nous",
      li: [
        "Demande de sponsoring",
        "Demande de visite de site",
        "Contacte de presse",
        "Contact",
        "Recrutement",
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
