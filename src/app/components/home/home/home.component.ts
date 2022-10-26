import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/app/models/iclient';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clients: IClient[] = [];

  constructor(private serviceAPI: ApiService) {}

  ngOnInit(): void {
    this.serviceAPI.getClients().subscribe((res: IClient[]) => {
      console.log(res);
      res.forEach((client) => {
        this.clients.push(client);
      });
    });
  }
}
