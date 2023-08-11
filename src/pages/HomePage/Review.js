const Review = (props) => {
    return (
        <div className={`review w-96 h-80 bg-white text-black p-8 rounded shadow-2xl`}>
            <h1 className="font-bold text-lg capitalize">one bank is a truly great bank</h1>
            <p className="py-4 text-gray-600">
                These tests are frequently used as pre-employment assessments for
                occupations requiring basic mathematical skills.
            </p>
            <div className="flex space-x-4 items-center">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXBhbnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60"
                alt="review photo"
                className="w-20 h-20 object-cover rounded-full" />
                <div>
                    <h2 className="text-lg font-bold">Ife xxo</h2>
                    <span className="text-gray-600">Head of sales at based</span>
                </div>
            </div>
        </div>
    )
}

export default Review;