import Review from "../Model/review.model"
const review = async(req,res)=>{
 const {reviewText,propertyID} = req.body;
 const userId = req.id
 try{
    const response= await Review.create
 }catch(err){

 }
}
export default review