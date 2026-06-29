import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

const TicketQRCode = () => {

    const bookedTicket = useSelector(state => state.bookMovieTicket?.transaction);

    return (
        <>
            <h1 className="text-center text-2xl">Ticket QR Code</h1>
            <div className="bg-white p-4 flex justify-center m-4 ">
                <QRCode
                    value={JSON.stringify(bookedTicket)}
                    size={180}
                />

                <div className="text-left m-2">

                    <p>
                        Movie:
                        {bookedTicket.movieTitle}
                    </p>

                    <p>
                        Name:
                        {bookedTicket.name}
                    </p>

                    <p>
                        Show:
                        {bookedTicket.date}
                    </p>

                    <p>
                        Show:
                        {bookedTicket.showtime}
                    </p>
                    <p>
                        Seat:
                        {bookedTicket.seatType}
                    </p>

                    <p>
                        Tickets:
                        {bookedTicket.ticketCount}
                    </p>

                    <p>
                        Total:
                        ₹{bookedTicket.totalPrice}
                    </p>
                </div>
            </div>
        </>
    )
}

export default TicketQRCode;