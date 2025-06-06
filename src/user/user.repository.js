import {getDB} from '../config/mongodb.js';

class UserRepository{
    
async signUp(newUser){
     
    try{
   // 1 Get the datatbase 
      const db=getDB();
   //2.Get the collection
     const collection=db.collection('users');
    //3. insert the document
     await  collection.insertOne(newUser);
       return newUser;
    }
    catch(err){
        console.log(err);
    }  
       
 }
    async signIn(email, password) {
        const db = getDB();
        const userCollection = db.collection('users');
        const userFound = await userCollection.findOne({ email: email, password: password });
        if (!userFound) {
            return null;
        }
        return userFound;
    }
}

export default UserRepository;