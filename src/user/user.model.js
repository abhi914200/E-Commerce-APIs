export const user = [{
    "id":1,
    "name":"admin",
    "email":"seller@gmail.com",
    "password":"password123",
    "type":"seller"
}];


export default class UserModel{
    constructor(id,name,email,password,type){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }
    static signUp(name,email,password,type){
        const id=user.length+1;
       const newUser=new  UserModel(id,name,email,password,type);
       user.push(newUser);
       return newUser;
    }
    static signIn(email,password){
        const userFound= user.find(user =>user.email==email && user.password==password);
        if(!userFound){
            return null;
        }
        return userFound;
    }

    static getAll(){
        return user;
    }
}


