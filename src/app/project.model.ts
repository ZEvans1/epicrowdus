export class Project {
  constructor (public title: string,
              public description: string,
              public team: string[],
              public fundsPlan: string,
              public fundsGoal: number,
              public fundsActual: number) {

              }
}
