import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true
})
export class JoinPipe implements PipeTransform {

  transform(values: string[], separator: string): unknown {
    return values.join(separator);
  }

}
