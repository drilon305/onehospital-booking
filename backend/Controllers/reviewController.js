import Review from '../models/ReviewSchema'
import Doctor from '../models/DoctorSchema'


export const getAllReviews = async (req, res) => {

    try {
        const reviews = await Review.find({})

        res.status(200).json({ success: true, message: 'Successful', data: reviews})
        
    } catch (error) {
        res.status(404).json({ success: false, message: 'Not found', data: reviews})
    }
}