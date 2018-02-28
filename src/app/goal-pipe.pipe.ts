import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'goalPipe',
  pure: false
})
export class GoalPipe implements PipeTransform {

  transform(input: Project[], goalSelection) {
    var output: Project[] = [];
    if (goalSelection === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].fundsGoal < 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(goalSelection === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].fundsGoal > 20000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
