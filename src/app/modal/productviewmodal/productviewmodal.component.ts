import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productviewmodal',
  templateUrl: './productviewmodal.component.html',
  styleUrls: ['./productviewmodal.component.css']
})
export class ProductviewmodalComponent implements OnInit {
  @Input() name;

  constructor(public activatedmodal : NgbActiveModal) { }

  ngOnInit() {
  }

}
