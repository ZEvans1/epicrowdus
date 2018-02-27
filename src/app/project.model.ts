export class Project {
  public fundsActual: number = 0;
  constructor (public title: string,
              public description: string,
              public team: string[],
              public fundsPlan: string,
              public fundsGoal: number,) {}
}
