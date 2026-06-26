import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

const TicketQRCode = () => {

    const transaction = useSelector(state => state.bookMovieTicket.transaction);

    console.log(transaction)
    return(
        <>
            <h1 className="text-center text-2xl">Ticket QR Code</h1>
        </>
    )
}

export default TicketQRCode;