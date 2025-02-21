
//handling all middlware which passes next(error)
const errorHandler = (err, req, res, next ) =>{
    //if message and error given 
    if( err.status){
        return res.status(err.status).json( {errMessage: err.message});
    }

    res.status(400).json( {errMessage: err.message});
}

export default errorHandler;