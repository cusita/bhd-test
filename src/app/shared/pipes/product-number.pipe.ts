import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productNumberPipe' })
export class ProductNumber implements PipeTransform {
  transform( value: string, lengthToSee: number ): string {
    const nameLength = value.length;
    return '**** ' + value.substring(nameLength - lengthToSee, nameLength);
  }
}
