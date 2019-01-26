export class Type {
  public relationships: TypeRelationships = new TypeRelationships();

  constructor(
    public type: string,
    public name: string,
    public shortName: string
  ) { }
}

export class TypeRelationships {
  public effectiveAgainst: Type[] =[];

  public weakAgainst: Type[] = [];

  public ineffectiveAgainst: Type[] = [];

  public resistantTo: Type[] = [];

  public counters: Type[] = [];
}