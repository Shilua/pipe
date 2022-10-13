import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasHasta'
})
export class DiasHastaPipe implements PipeTransform {

  transform(feriados: any[]): any[] {
    feriados.forEach(item =>{
      let fecha:Date = new Date(2022, item.dia, item.mes);

    })
    return [];
  }

}
