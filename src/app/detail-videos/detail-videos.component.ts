import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import SwiperCore, { EffectCube, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

declare const ePayco: any;

@Component({
  selector: 'app-detail-videos',
  templateUrl: './detail-videos.component.html',
  styleUrls: ['./detail-videos.component.scss']
})
export class DetailVideosComponent implements OnInit {
  class_product = [];
  nameProduct;
  descriptionProduct;
  amount;
  imageProduct;
  urlVideoProduct;
  auth : any = [];
  idUser?;
  idProduct?;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer, public dialog: MatDialog) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.getProductsById(id);
    this.loadScript();
  }

  ngOnInit(): void {
    this.auth = JSON.parse(sessionStorage.getItem('current_user'));

    if (this.auth) {
      this.idUser = this.auth.user.id_user;
    }
  }

  public loadScript() {
    const nodeCheckout2 = document.createElement('script');
    nodeCheckout2.src = `https://checkout.epayco.co/checkout.js`;
    nodeCheckout2.type = 'text/javascript';
    nodeCheckout2.async = true;
    nodeCheckout2.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(nodeCheckout2);
  }

  pay() {
    this.auth = JSON.parse(sessionStorage.getItem('current_user'));
    if (!this.auth) {
      this.openLogin();
    } else {

      var handler = ePayco.checkout.configure({
        key: environment.epaycoCredentials.key,
        test: true
      });

      const data = {
        //Parametros compra (obligatorio)
        name: this.nameProduct,
        description: this.descriptionProduct,
        invoice: btoa(this.idUser + ':' + this.idProduct + ':' + Math.floor(Date.now() / 1000)),//Math.random()* 1000,
        currency: "cop",
        amount: this.amount,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "es",

        //Onpage="false" - Standard="true"
        external: "false",


        //Atributos opcionales
        extra1: this.idUser,
        extra2: this.idProduct,
        confirmation: environment.urlConfirmation,
        response: environment.urlResponse,

        //Atributos cliente
        name_billing: "Andres Perez",
        address_billing: "Carrera 19 numero 14 91",
        type_doc_billing: "cc",
        mobilephone_billing: "3050000000",
        number_doc_billing: "100000000",

        //atributo deshabilitación metodo de pago
        methodsDisable: ["SP", "CASH", "DP"]

      }
      console.log(data)
      handler.open(data);
    }

  }

  getProductsById(idProduct) {
    this.productService.getProductsById(idProduct).subscribe(
      (res) => {     
        this.idProduct = res.data[0].id_product;  
        this.nameProduct = res.data[0].name;
        this.descriptionProduct = res.data[0].description;
        this.amount = res.data[0].amount;
        this.imageProduct = res.data[0].image;
        this.urlVideoProduct = this.transformUrl(res.data[0].url_video);
        this.class_product = res.data.map((obj) => {
          return {
            description: obj.description,
            title: obj.class_title,
            detail: obj.class_detail,
          };
        });      
      },
      (error) => {
        console.log(error);
      }
    );
  }

  transformUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      height: 'auto',
      width: '400px',
    });
  }

}
