import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Barcode} from '../../../shared/models/barcode';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-barcode-form',
  templateUrl: './barcode-form.component.html',
  styleUrls: ['./barcode-form.component.scss',
  ]
})
export class BarcodeFormComponent implements OnInit, OnDestroy, OnChanges {

  title = 'Scan something';
  private data = new BehaviorSubject<Barcode[]>([]);
  @Input() barcodes: Barcode[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.title = (this.barcodes && this.barcodes.length > 0) ? 'History of scans' : 'Scan something';
  }

  goToProduct(code: string) {
    console.log('truc');
    this.router.navigate(['/product', code]);
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

}
