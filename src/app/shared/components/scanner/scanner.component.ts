import { Component, OnInit, OnDestroy } from '@angular/core';

declare var Quagga: any;

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit, OnDestroy {

  // Barcode scanner configuration.
  private quaggaConfig: any = {
    numOfWorkers: 6,
    locate: false,
    inputStream: {
      type: 'LiveStream',
      constraints: {
        facingMode: 'environment'
      },
      area: {
        top: '0%',
        right: '0%',
        left: '0%',
        bottom: '0%'
      },
      singleChannel: true
    },
    decoder: {
      readers: [
        'ean_reader',
        'ean_8_reader'
      ],
      multiple: false,
      debug: {
        showCanvas: true,
        showPatches: true,
        showFoundPatches: true,
        showSkeleton: true,
        showLabels: true,
        showPatchLabels: true,
        showRemainingPatchLabels: true,
        boxFromPatches: {
          showTransformed: true,
          showTransformedBox: true,
          showBB: true
        }
      }
    }
  };

  constructor() { }

  ngOnInit() {
    // Initialize QuaggaJS barcode scanner.
    Quagga.init(this.quaggaConfig, (err) => {
      if (err) {
        console.log(err);

        return;
      }

      console.log('Quagga initialized and ready to scan.');

      // Start scanning barcodes.
      Quagga.start();
    });
  }

  ngOnDestroy() {
    // Stop the barcode scanner when the component is destroyed.
    Quagga.stop();
  }

}
