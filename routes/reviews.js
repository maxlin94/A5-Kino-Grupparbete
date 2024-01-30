import express from 'express';
import { FetchMovies } from '../utils/movieUtils.js';


const reviewRouter = express.Router();
const reviewList = await FetchMovies();

const lowreviewList = reviewList.data.filter(lowreview => lowreview.attributes.rating < 3);
console.log(lowreviewList);

reviewRouter.get('/', async (req, res) => {
    res.json(lowreviewList);

})





export default reviewRouter;