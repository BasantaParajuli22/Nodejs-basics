
//not found page handler
const notFound = ( req, res, next ) =>{
    res.status(404).json( {err:'Page couldnot be Found OK'});

}
export default notFound;