import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'completed',
  pure: false
})

export class CompletedPipe implements PipeTransform {

  transform(input: Project[], completenessFilter){
    let output: Project[] = [];
    switch (completenessFilter){
      case "completed":
        for(let i=0; i<input.length; i++){
          if(input[i].fundsActual >= input[i].fundsGoal){
            output.push(input[i]);
          }
        }
        break;
      case "incomplete":
        for(let i=0; i<input.length; i++){
          if(input[i].fundsActual < input[i].fundsGoal){
            output.push(input[i]);
          }
        }
        break;
      default:
        output = input;
        break;
    }
    return output;
  }

}
