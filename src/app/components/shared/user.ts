export class User{
    readonly id: number;
    readonly email: any;
    readonly username: any;
    readonly password: any;
    readonly name:{
        firstname:string;
        lastname:string;
    }
    readonly address:{};
    readonly phone: number;

     constructor (id:number){
         this.id = id;
         }
   }