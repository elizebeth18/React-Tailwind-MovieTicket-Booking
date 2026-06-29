const SuccessPop = ({ close }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">

                <div className="text-5xl mb-3">
                    🎉
                </div>

                <h2 className="text-xl font-bold">
                    Booking Successful
                </h2>

                <p className="text-gray-600 mt-2">
                    Your ticket has been booked successfully.
                </p>

                <button
                    onClick={() => {
                        close();
                    }}
                    className="mt-5 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
                >
                    OK
                </button>

            </div>

        </div>

    )
}

export default SuccessPop;