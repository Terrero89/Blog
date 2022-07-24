export default
//!MIDDLEWARE IS USED TO ADD LOGIC BETWEEN ROUTES.
//middleware that will check for authentication and reroute
//is used along with isAuthenticated getter to check for status of that getter and know when to re route
function(context){

    if(!context.store.getters.isAuthenticated){
    
      context.redirect('/admin/auth')
    }

}
