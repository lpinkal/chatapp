import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: any): any {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log(items);
    return items.filter( (it) => {
      console.log(it.name);
      return it.name.toLowerCase().includes(searchText);
    });
  }
  }

