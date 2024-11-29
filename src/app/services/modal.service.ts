import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private modalDataSubject = new BehaviorSubject<any>(null);

  isOpen$ = this.isOpenSubject.asObservable();
  modalData$ = this.modalDataSubject.asObservable();

  open(data: any) {
    this.modalDataSubject.next(data);
    this.isOpenSubject.next(true);
  }

  close() {
    this.isOpenSubject.next(false);
  }
} 