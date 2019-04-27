import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-position-form',
  templateUrl: './invoice-position-form.component.html',
  styleUrls: ['./invoice-position-form.component.sass']
})
export class InvoicePositionFormComponent implements OnInit {

  test = "witaj swiecie";

  invoicePosition ={
    grossPrice: 10.8,
    taxValue: 8,
    description: "mleko",
    nettoPrice:10,
  }
  constructor() { }

  ngOnInit() {
  }

}
