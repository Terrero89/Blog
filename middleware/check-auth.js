export default
//!MIDDLEWARE IS USED TO ADD LOGIC BETWEEN ROUTES.
//this will dispatch initAuth to persist with the token even when refreshes
function(context){
 
      context.store.dispatch("initAuth",context.req) //dispatch the context.req tht is part of the server request.
    }

