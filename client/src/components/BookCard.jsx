function BookCard({ book, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-700">by {book.author}</p>
        <p className="text-gray-500 text-sm">Pages: {book.pages}</p>
        <p className="text-gray-400 text-xs">Status: {book.status}</p>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-2">
        <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => onEdit(book)}>Edit</button>
        <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => onDelete(book)}>Delete</button>
        <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={() => onStatusChange(book, 'wantToRead')}>Want to Read</button>
        <button className="px-3 py-1 bg-yellow-500 text-white rounded" onClick={() => onStatusChange(book, 'reading')}>Reading</button>
        <button className="px-3 py-1 bg-gray-700 text-white rounded" onClick={() => onStatusChange(book, 'completed')}>Completed</button>
      </div>
    </div>
  );
}

export default BookCard;
