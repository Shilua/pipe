import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], filtro:string): any[] {
  if (filtro == '') {
    return value
  }
  return value.filter(
    item => (<string>item.motivo).indexOf(filtro)> -1
  );
  }

}
