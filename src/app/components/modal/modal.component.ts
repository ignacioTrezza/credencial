import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isOpen$ = this.modalService.isOpen$;
  modalData$ = this.modalService.modalData$;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.close();
  }
} 