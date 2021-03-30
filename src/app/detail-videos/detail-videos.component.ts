import { Component, OnInit } from '@angular/core';
declare const ePayco: any;

@Component({
  selector: 'app-detail-videos',
  templateUrl: './detail-videos.component.html',
  styleUrls: ['./detail-videos.component.scss']
})
export class DetailVideosComponent implements OnInit {

  constructor() {
    this.loadScript();
  }

  ngOnInit(): void {
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

    var handler = ePayco.checkout.configure({
      key: '45b960805ced5c27ce34b1600b4b9f54',
      test: true
    });

    const data = {
      //Parametros compra (obligatorio)
      name: "Curso de Gastronomia",
      description: "Curso de bandeja paisa",
      invoice: Math.random(),
      currency: "cop",
      amount: "12000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "es",

      //Onpage="false" - Standard="true"
      external: "false",


      //Atributos opcionales
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      confirmation: "http://secure2.payco.co/prueba_curl.php",
      response: "http://secure2.payco.co/prueba_curl.php",

      //Atributos cliente
      name_billing: "Andres Perez",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["SP", "CASH", "DP"]

    }
    handler.open(data);

  }

}
