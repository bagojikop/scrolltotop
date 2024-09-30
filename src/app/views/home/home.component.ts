import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalDirective } from '../../directives/DecimalDirective/decimal.directive';

interface purchaseOrder {
  product: string;
  vch_date: string;
  price: string;
  GST: string;
  total: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, DecimalDirective],
  providers: [DecimalDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  selectedCar: number;
  purchaseList: any[] = [];
  entity!: purchaseOrder;
  idx: number = null;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  ngOnInit(): void {
    this.entity = <purchaseOrder>{};
  }

  getValue(entity) {
    console.log(entity);
  }

  total() {

      


    this.entity.total = (
      Number(this.entity.price || 0) + Number(this.entity.GST || 0)
    ).toFixed(2);
  }

  save() {
    if (!isNaN(this.idx)) {

      this.purchaseList.push(this.entity);
    } else {
      this.purchaseList[this.idx] = this.entity;
    }
  }
}
