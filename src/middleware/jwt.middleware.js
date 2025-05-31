import jwt from 'jsonwebtoken';

const jwtAuth=(req,res,next)=>{
    //1.Read the token
    const token=req.headers['authorization'];
    console.log(token);

    //2. if no token,return the error 

    if(!token){
        return res.status(401).send("Unauthorized");
    }

    //3. check if token in valid
    try{
        const payload=jwt.verify(
            token,
            'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz'
        );
        console.log(payload);
        
    }
    catch(err){
        console.log(err);
        return res.status(401).send("Unauthorized");
    }
    next();
};

export default jwtAuth;