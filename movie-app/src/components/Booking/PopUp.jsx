const Popup = ({ onClose }) => {
    return (

        <div
            className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
          "
        >
            <div
                className="
              bg-white
              p-6
              rounded-xl
              shadow-xl
              w-96
            "
            >
                <h2 className="text-2xl font-bold mb-4">
                    Booking Successful 🎉
                </h2>

                <p className="text-gray-600 mb-4">
                    Your movie ticket has been booked.
                </p>

                <button
                    onClick={onClose}
                    className="
                w-full
                bg-red-500
                text-white
                py-2
                rounded-lg
              "
                >
                    Close
                </button>

            </div>
        </div>



    )
}

export default Popup;