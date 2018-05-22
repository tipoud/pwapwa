import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ean: string;
  productInfos: [{
    label: string,
    value: string
  }];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe( params => {
        this.ean = params['code'];
        this.showProduct();
      });
  }

  showProduct() {
    this.productInfos = [{label: 'Name', value: 'lorem ipsum' },
      {label: 'Reference', value: this.ean },
      {label: 'Description', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' +
        ' Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ' +
        'ultricies sed, dolor.'}
    ];
  }
}
