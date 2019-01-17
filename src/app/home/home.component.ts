import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Object;
  names = ["ali", "ahmed", "amr", "diaa"];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  learnMore() {
    alert("Hello My name is Ahmed Mahmoud");
  }
}
