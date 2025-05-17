import { useState } from 'react';
import BookList from './components/BookList';
import BookCard from './components/BookCard';
import BookForm from './components/BookForm';
import StatusTabs from './components/StatusTabs';

const mockBooks = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    status: "wantToRead",
    pages: 310,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    status: "reading",
    pages: 320,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    status: "completed",
    pages: 328,
  },
];

function App() {
  const [books, setBooks] = useState(mockBooks);
  const [currentStatus, setCurrentStatus] = useState('wantToRead');

  // Filter books by current status
  const filteredBooks = books.filter(book => book.status === currentStatus);

  // Placeholder callbacks
  const handleEdit = (book) => { alert(`Edit book: ${book.title}`); };
  const handleDelete = (book) => { alert(`Delete book: ${book.title}`); };
  const handleStatusChange = (book, newStatus) => { alert(`Change status for ${book.title} to ${newStatus}`); };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Book Tracker
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <StatusTabs currentStatus={currentStatus} onStatusChange={setCurrentStatus} />
        <div className="my-6">
          <BookForm />
        </div>
        <BookList
          books={filteredBooks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
        {/* Example BookCard usage, can be removed later */}
        {/* <BookCard /> */}
      </main>
    </div>
  )
}

export default App
