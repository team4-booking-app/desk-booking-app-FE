import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Desks {
  deskId: number;
  deskName: string;
  roomId: number;
}
@Component({
  selector: 'app-desk-dropdown',
  templateUrl: './desk-dropdown.component.html',
  styleUrls: ['./desk-dropdown.component.scss'],
})
export class DeskDropdownComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  desksURL = 'https://team4-backend-stage-app.herokuapp.com/api/v1/available';
  getDesks() {
    return this.http.get<Desks>(this.desksURL);
  }

  roomSelect() {}
}
