module.exports = (req, res, next) => {

    if(req.session.cliente != undefined){
       return res.redirect('../');
   }

   next();

}