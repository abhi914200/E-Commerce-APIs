import {getDB} from '../config/mongodb.js';


export const user = [{
    "id":1,
    "name":"admin",
    "email":"seller@gmail.com",
    "password":"password123",
    "type":"seller"
}];


export default class UserModel{
    constructor(name,email,password,type){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }


    static getAll(){
        return user;
    }
}


