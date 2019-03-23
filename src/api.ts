import { Type } from './models/type';

export class Api {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public async getType(type: string): Promise<Type | null> {
    const response = await fetch(this.url + `/type/${type}`);

    if (response.ok) {
      return await response.json();
    }

    return null;
  }
}
