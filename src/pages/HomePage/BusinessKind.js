const BusinessKind = (props) => {
    return (
        <div className="relative h-60 flex-grow">
            <img src={props.src}
            alt="business kind"
            className="w-full h-full object-cover rounded relative" />
            <div className="absolute flex items-end justify-between bottom-0 py-2 hover:bg-opacity-0 transition ease duration-500 px-2 w-full h-full bg-black bg-opacity-20 text-white">
                <span className="capitalize leading-tight font-semibold text-lg w-24">{props.type}</span>
                <button class="material-symbols-outlined rounded-full bg-sky-600 w-12 p-2 h-12 block text-center active:scale-90">
                arrow_outward
                </button>
            </div>
        </div>
    )
}

export default BusinessKind;