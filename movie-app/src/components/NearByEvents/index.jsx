import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nearByEventsThunk } from '../../store/nearByEventsSlice';

const NearByEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state?.nearByEvents?.nearByEvents)

  useEffect(() => {
    dispatch(nearByEventsThunk())
  }, [dispatch]);

  return (
    <>
      <div>
        <h3 className="text-center text-white text-2xl font-bold  relative top-2.5" >
          NearBy Events
        </h3>
        <div className="flex flex-row  gap-16 w-350
            max-w-full rounded-2xl mx-auto py-10 px-4">
          {events && events.map(event => {
            return (

              <div key={event.id} className="flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full h-48 object-cover"
                  src={event.image}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    {event?.title}
                  </h2>

                  <p className="text-gray-600 mb-6 text-center">
                    {event?.description}
                  </p>

                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-semibold">📅 Date:</span> {event?.date}
                    </p>

                    <p>
                      <span className="font-semibold">⏰ Time:</span> {event?.time}
                    </p>

                    <p>
                      <span className="font-semibold">📍 Location:</span> {event?.location}
                    </p>

                    <p>
                      <span className="font-semibold">👤 Organizer:</span> {event?.organizer}
                    </p>

                    <p>
                      <span className="font-semibold">💰 Price:</span>{" "}
                      {event?.price ? `₹${event.price}` : "Free"}
                    </p>
                  </div>
                </div>
              </div>)
          })}
        </div></div>
    </>
  )
}

export default NearByEvents;