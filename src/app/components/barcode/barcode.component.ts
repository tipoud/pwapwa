import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppConstants} from '../../shared/utils/app-constants';
import {Barcode} from '../../shared/models/barcode';
import {Router} from '@angular/router';

declare var Quagga: any;

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit, OnDestroy {

  private _codeConsecutiveScans: number;
  private _lastScannedCode: string;
  public title = 'BarCode';
  rightIcon = 'far fa-trash-alt';
  barcodes: Barcode[] = [];
  onNavButtonClick = () => { this.barcodes = []; };

  constructor(private router: Router) {
    this._codeConsecutiveScans = 0;
  }

  ngOnInit() {
    // Event triggered when a barcode is detected on the video stream.
    Quagga.onDetected((data) => {
      const code = data.codeResult.code;

      if (this._lastScannedCode === code) {
        // If the scanned code is the same as the one of the precedent scan,
        // increment the consecutive scans number of this code.
        this._codeConsecutiveScans++;

        // If the same code have been scanned for a defined number of times,
        // redirect to the product details page with the code.
        if (this._codeConsecutiveScans === AppConstants.GRANTED_CONSECUTIVE_SCANS) {
          const barcode = this._convertQuaggaDataToBarcode(data.codeResult);
          this.barcodes.push(barcode);
          this.barcodes = this.barcodes.slice();
        }
      } else {
        // If the scanned code defers from the precedent one,
        // reinit the scan detection.
        this._lastScannedCode = code;
        this._codeConsecutiveScans = 0;
      }
    });
  }
  goToProduct(code: string) {
    this.router.navigate(['/product', code]);
  }

private _convertQuaggaDataToBarcode(quaggaData: any): Barcode {

  const barcode = new Barcode();

  barcode.code = quaggaData.code;
  barcode.format = quaggaData.format;

  return barcode;
}

  ngOnDestroy() {

    // Unregister the callbacks defined for the component when it is destroyed.
    Quagga.offDetected(this.offDetected);
  }
  offDetected() {
    return;
  }

}

