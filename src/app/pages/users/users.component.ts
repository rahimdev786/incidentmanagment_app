import { Component } from '@angular/core';
import { CommanpageComponent } from "../commanpage/commanpage.component";

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  imports: [CommanpageComponent]
})
export class UsersComponent {

}
