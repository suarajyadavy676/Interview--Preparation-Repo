const access = (roles)=>{
  return(req,res,next)=>{
    const currentUserRole = req.user.roles
    console.log(req.user)
    if(roles.includes(currentUserRole)){
      next()
    }else{
      return res.status(401).send("you are not acess this route")
    }
  }
}

module.exports = access