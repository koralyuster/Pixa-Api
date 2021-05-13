import { Component, OnInit } from '@angular/core';
import { ImgApiService } from '../../services/img-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  imgAr: any[] = [];
  sortSelect: string = "tags";
  constructor(private imgSer: ImgApiService) { }

  sortChange() {
    this.imgSer.sortImg(this.sortSelect);
  }

  //update in the service the array that conect to this array: (conection of 2 arrays)
  ngOnInit(): void {
    this.imgAr = this.imgSer.getImgAr();
    let url = 'https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=flower&image_type=photo&pretty=true';
    this.imgSer.apiList(url);
  }

}
