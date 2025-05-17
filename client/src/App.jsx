import BookList from './components/BookList';
import BookCard from './components/BookCard';
import BookForm from './components/BookForm';
import StatusTabs from './components/StatusTabs';

function App() {
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
        <StatusTabs />
        <div className="my-6">
          <BookForm />
        </div>
        <BookList />
        {/* Example BookCard usage, can be removed later */}
        {/* <BookCard /> */}
      </main>
    </div>
  )
}

export default App
