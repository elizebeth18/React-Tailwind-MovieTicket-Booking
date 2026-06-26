const Alert = ({ message, onClose }) => {
    return (
        <div className="
            fixed
            top-5
            right-5
            bg-green-500
            text-white
            px-6
            py-4
            rounded-lg
            shadow-lg
            flex
            items-center
            gap-4
        ">
            <span>{message}</span>

            <button
                onClick={onClose}
                className="
                    bg-white
                    text-green-600
                    px-3
                    py-1
                    rounded
                    font-bold
                "
            >
                ×
            </button>
        </div>
    );
};

export default Alert;