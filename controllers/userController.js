export function registerUser(req, res){
    console.log('start registerUser', req.body)

    // TODO: deze data moet naar de database met de user model.
    
    res.redirect('/login')
}