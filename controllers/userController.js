export function registerUser(req, res){
    console.log('start registerUser', req.body)
    res.redirect('/login');
}