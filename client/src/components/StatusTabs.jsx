const STATUS_LABELS = {
  all: "All",
  wantToRead: "Want to Read",
  reading: "Reading",
  completed: "Completed"
};

function StatusTabs({ currentStatus, onStatusChange }) {
  return (
    <div className="flex space-x-2 mb-4">
      {Object.entries(STATUS_LABELS).map(([status, label]) => (
        <button
          key={status}
          className={`px-4 py-2 rounded font-medium focus:outline-none transition-colors duration-150
            ${currentStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
          onClick={() => onStatusChange(status)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default StatusTabs;
