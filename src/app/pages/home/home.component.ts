import { Component, OnInit, OnChanges } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { DataCard } from 'src/app/types/datacard.type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bigCard: DataCard = {
    id: '',
    image: '',
    date: '',
    title: '',
    description: '',
  };
  smallCardList: DataCard[] = [];
  constructor() {}

  ngOnInit(): void {
    const bigCardResult = dataFake.filter((article) => article.id === '1')[0];
    const smallCardList = dataFake;

    this.bigCard = bigCardResult;
    this.smallCardList = smallCardList;
  }
}
