import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {
  public cards : string [] = [];

  constructor(private HttpClient : HttpClient) {

    this.HttpClient.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .subscribe((res : any) => {
      console.log(res);
      res.data.forEach((element: any) => {
        this.cards.push(element.name);
        console.log(element);
      });
    }
    )
  }

  ngOnInit(): void {
  }

}
