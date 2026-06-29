import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

const TicketQRCode = () => {

    const bookedTicket = useSelector(state => state.bookMovieTicket?.transaction);

    return (
        <>
            <div className="bg-white max-w-md mx-auto my-6 rounded-lg shadow-lg p-5">

                <h1 className="text-center text-2xl font-bold mb-5">
                    Ticket QR Code
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-6">

                    {/* QR Code */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <QRCode
                            value={JSON.stringify(bookedTicket)}
                            size={180}
                        />
                    </div>

                    {/* Ticket Details */}
                    <div className="space-y-2 text-sm w-full">

                        <p>
                            <span className="font-semibold">Movie:</span>{" "}
                            {bookedTicket.movieTitle}
                        </p>

                        <p className="capitalize">
                            <span className="font-semibold">Name:</span>{" "}
                            {(bookedTicket.name)}
                        </p>

                        <p>
                            <span className="font-semibold">Date:</span>{" "}
                            {bookedTicket.date}
                        </p>

                        <p>
                            <span className="font-semibold">Show Time:</span>{" "}
                            {bookedTicket.showtime}
                        </p>

                        <p className="capitalize">
                            <span className="font-semibold">Seat:</span>{" "}
                            {bookedTicket.seatType}
                        </p>

                        <p>
                            <span className="font-semibold">Tickets:</span>{" "}
                            {bookedTicket.ticketCount}
                        </p>

                        <p className="text-lg font-bold">
                            Total: ₹{bookedTicket.totalPrice}
                        </p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default TicketQRCode;