import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataSource = {
    datasets:[
        {
            data: [380,90,100,50],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#99ff33',
                '#ff9900',
                '#00ffcc',
                '#99ff99',
                '#cc66ff',
                '#cc6699',
                '#3366cc',
                '#660066',
            ],
        }
    ],
    labels: ['Rent','Eat Out','Groceries','Movies']
  };

  public d3data = [{title: "Eat out", budget: 25},
  {title: "Rent", budget: 380},
  {title: "Groceries", budget: 100},
  {title: "Movies", budget: 50},
  ];

  constructor() { }
}
