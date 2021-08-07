import { Pipe, PipeTransform } from '@angular/core';
import { capitalizeNames } from '../functions/capitalizeNames.function';

@Pipe({
  name: 'capitalizeProductName'
})
export class CapitalizeProductNamePipe implements PipeTransform {

  transform(productName: string): string {
    return capitalizeNames(productName);
  }

}
