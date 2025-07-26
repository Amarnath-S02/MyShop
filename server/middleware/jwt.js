import jwt from 'jsonwebtoken';

const JWT_SECRET=process.env.JWT_SECRET;

export const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader?.startsWith("Bearer")){
        res.status(403).res("Token is invalid");
    }

    
    const token=authHeader.split(" ") [1];
    
    try{
        const decoded=json.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }catch(e){

        res.status(401).json({message:"Token is invalid or Expired"});

    }

}

