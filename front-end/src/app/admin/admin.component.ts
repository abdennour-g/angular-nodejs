import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { Tache, Categorie } from "../models/entities";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  url: string = "http://127.0.0.1:202";
  taches: Tache[] = [];
  categories: Categorie[] = [];
  @Input() tache: Tache = new Tache();
  @Input() type_operation: string = "add";
  @Input() stat: string = "1";
  @Input() categ: string = "1";
  selectedValue = "";
  select(tache: Tache) {
    this.tache = tache;
  }
  getSelectedValue() {
    //alert("Selected value:" + this.stat);
    this.charger();
  }
  constructor(private httpclient: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.charger();
  }
  charger() {
    const tasks = this.httpclient.get(
      this.url + "/tache/categ/" + this.categ + "/statut/" + this.stat
    );
    const categs = this.httpclient.get(this.url + "/categ");
    tasks.subscribe((data) => {
      this.taches = data as Tache[];
    });
    categs.subscribe((data) => {
      this.categories = data as Categorie[];
    });
  }

  save2(form: NgForm, mod: any) {
    alert("type_op= " + this.type_operation + "\nid= " + this.tache.id_tache);
  }
  test(val: string) {
    alert(val);
  }
  title(): string {
    switch (this.type_operation) {
      case "add":
        return "NOUVELLE TACHE";
        break;
      case "update":
        return "MISE A JOUR DE LA TACHE N°: " + this.tache.id_tache;
        break;
      case "remove":
        return "SUPPRESSION DE LA TACHE N°: " + this.tache.id_tache;
        break;
      case "active":
        return "ACTIVATION DE LA TACHE N°: " + this.tache.id_tache;
        break;
      case "archive":
        return "ARCHIVACHE DE LA TACHE N°: " + this.tache.id_tache;
        break;
      default:
        return "";
        break;
    }
  }
  save(form: NgForm, mod: any) {
    let add = this.httpclient.post(this.url + "/tache", form.value);
    let update = this.httpclient.post(
      this.url + "/tache/" + this.tache.id_tache,
      form.value
    );
    let remove = this.httpclient.post(
      this.url + "/tache/del/" + this.tache.id_tache,
      form.value
    );
    let active = this.httpclient.post(
      this.url + "/tache/stat/active/" + this.tache.id_tache,
      form.value
    );
    let archive = this.httpclient.post(
      this.url + "/tache/stat/archive/" + this.tache.id_tache,
      form.value
    );
    let operation = eval(this.type_operation);
    operation.subscribe(
      (data) => {
        console.log("enregistrement avec succes !");
        //this.charger();
      },
      (error) => {
        console.log("erroooor");
      }
    );
    setTimeout(() => {
      mod.hide();
      // this.router.navigate(["/admin"]);
      this.charger();
    }, 200);
  }
  add(mod: any) {
    this.init();
    mod.show();
  }
  update(p: Tache, mod: any) {
    this.edit(p);
    mod.show();
  }
  active(id: number, mod: any) {
    this.act(id);
    mod.show();
  }
  archive(id: number, mod: any) {
    this.arch(id);
    mod.show();
  }
  remove(id: number, mod: any) {
    this.del(id);
    mod.show();
  }
  init() {
    this.tache = new Tache();
    this.type_operation = "add";
  }
  del(i: number) {
    this.tache.id_tache = i;
    this.type_operation = "remove";
  }
  act(i: number) {
    this.tache.id_tache = i;
    this.type_operation = "active";
  }
  arch(i: number) {
    this.tache.id_tache = i;
    this.type_operation = "archive";
  }
  edit(p: Tache) {
    this.tache = p;
    this.type_operation = "update";
  }
}
