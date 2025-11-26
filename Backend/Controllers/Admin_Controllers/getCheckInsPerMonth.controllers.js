import Booking from "../../Model/booking.model.js";


const getCheckInsPerMonth = async (req,res) => {
    try {
        const result = await Booking.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: "$checkIn" },
                        month: { $month: "$checkIn" }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    year: "$_id.year",
                    month: "$_id.month",
                    count: 1
                }
            },
            { $sort: { year: 1, month: 1 } } // Sort by year and month
        ]);
        res.json(result)
        console.log(result);
    } catch (error) {
        console.error("Error fetching check-ins:", error);
    }
};

export default getCheckInsPerMonth

