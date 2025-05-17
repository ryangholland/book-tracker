import BookCard from './BookCard';

function BookList({ books, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="space-y-4">
      {books.length === 0 ? (
        <p className="text-gray-500">No books in this category.</p>
      ) : (
        books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))
      )}
    </div>
  );
}

export default BookList;
