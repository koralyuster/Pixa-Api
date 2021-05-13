import { Component, OnInit } from '@angular/core';
import { ImgApiService } from '../../services/img-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchInput: string = "";

  // sortSelect: string = "tags";

  constructor(private imgSer: ImgApiService) { }

  ngOnInit(): void {
  }

  // sortChange() {
  //   this.imgSer.sortImg(this.sortSelect);
  // }

  searchApi(): void {
    let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${this.searchInput}&image_type=photo&pretty=true`;
    this.imgSer.apiList(url)
  }

}
