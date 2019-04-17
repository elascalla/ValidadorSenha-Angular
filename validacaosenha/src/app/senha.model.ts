export class Senha {
    constructor(
      public senha?:string,
      public pontuacao?: string,
      public complexidade?: string
    ){
      
    }
  
    static fromJson(jsonData: any): Senha {
      return Object.assign(new Senha(), jsonData);
    }
  }