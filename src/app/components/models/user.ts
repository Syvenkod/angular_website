export class User{
     constructor (readonly id: number,
        readonly email: any,
        readonly username: any,
        readonly password: any,
        readonly name:{
            firstname:string,
            lastname:string,
        },
        readonly address:{},
        readonly phone: number)
        {
         this.id = id;
         }
   }