import Review from "./Review"

const AllReviews = () => {
    return (
        <div className=" w-[89%] m-auto">
        <h1 className="font-bold text-3xl text-black self-start ml-6">You're in a good <br/> company</h1>
        <div className="flex justify-center overflow-y-scroll space-x-2 py-4">
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    </div>   
    )
}

export default AllReviews;