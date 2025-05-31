  import UserModel from "../user/user.model.js";
  
 const BasicAuthorizer=(req,res,next)=>{

    //1. Check if authorization header is empty
     const authHeader=req.headers["authorization"];
     if(!authHeader){
        res.status(401).send("No authorization details is found");

     }
      console.log(authHeader);
     //2.extract credention (  [Basic quewtrydjdasjfhjah])
     const base64Credentials=authHeader.replace("Basic ",'');
     console.log(base64Credentials);
     //3.Decode Credentials

     const decoded_cred=Buffer.from(base64Credentials,"base64").toString("utf8");
     console.log(decoded_cred);

     const cred=decoded_cred.split(':');

     const user=UserModel.getAll().find(u=>u.email==cred[0] && u.password==cred[1]);

     if(user){
        next();
     }
     else{
        res.status(401).send("Incorrect Credentials");
     }


 }
 export default BasicAuthorizer;