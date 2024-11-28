import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-othercomponent',
  templateUrl: './othercomponent.component.html',
  styleUrls: ['./othercomponent.component.css']
})
export class OthercomponentComponent {
  @HostBinding('class.expanded')
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
