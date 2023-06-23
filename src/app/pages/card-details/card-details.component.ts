import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {

  cardImage: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtvBu16sbG5CIpXqTO7k03JmjOouJivut3NEFOTmHx6Yp4H_8zacUwgnovjZP7RwDqbE&usqp=CAU';

  cardDate: string = 'June 22, 2023';

  cardTitle: string = 'Card Title';

  cardDescription: string =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit aliquid quaerat fuga facere id, saepe nobis provident voluptatum culpa eius?';
  constructor() {}

  ngOnInit(): void {}
}
