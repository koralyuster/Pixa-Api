import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { sortBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ImgApiService {
  img_ar: any[] = [];

  constructor(private apiSer: ApiService) { }

  //function that return info on one image:
  getImgAr(): any {
    return this.img_ar;
  }

  //function that push the data to the array:
  apiList(_url: any): void {
    this.img_ar.splice(0, this.img_ar.length);
    this.apiSer.apiGet(_url).subscribe((data: any) => {
      //check:
      console.log(data.hits);
      //to push the data: (without this row the data not print out on the screen)
      this.img_ar.push(...data.hits);
    })
  }

  //sort:
  sortImg(_sortOf: any): void {
    let new_ar = sortBy(this.img_ar, _sortOf);
    this.img_ar.splice(0, this.img_ar.length, ...new_ar);
    //sort from big to small(reverse):
    this.img_ar.reverse();
  }
}
