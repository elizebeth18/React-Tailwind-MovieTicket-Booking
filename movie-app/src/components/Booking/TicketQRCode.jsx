import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

const TicketQRCode = () => {

    const transaction = {
      "id": "1821",
      "movieTitle": "Despicable Me 4",
      "name": "fsse",
      "email": "shantanu@gmail.com",
      "showtime": "12:00",
      "seatType": "normal",
      "ticketCount": 1,
      "date": "2026-06-28",
      "totalPrice": 200
    }
    //useSelector(state => state.bookMovieTicket.transaction);

    console.log(transaction)
    return(
        <>
            <h1 className="text-center text-2xl">Ticket QR Code</h1>
            <div className="bg-white p-4 flex justify-center m-4 ">
                    <QRCode
                        value={JSON.stringify(transaction)}
                        size={180}
                    />

                    <div className="text-left m-3">

                    <p>
                        Movie:
                        {transaction.movieTitle}
                    </p>

                    <p>
                        Name:
                        {transaction.name}
                    </p>

                    <p>
                        Show:
                        {transaction.date}
                    </p>

                    <p>
                        Show:
                        {transaction.showtime}
                    </p>
                    <p>
                        Seat:
                        {transaction.seatType}
                    </p>

                    <p>
                        Tickets:
                        {transaction.ticketCount}
                    </p>

                    <p>
                        Total:
                        ₹{transaction.totalPrice}
                    </p>
</div>
                </div>
        </>
    )
}

export default TicketQRCode;