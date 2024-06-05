export default async function isAuthenticated(req,res,next){
    console.log('[isAuthenticated] userID ' + req.session.userId)
    if(req.session.userId){
        return next()
    } else{
        return res.redirect("/login")
    }
  }