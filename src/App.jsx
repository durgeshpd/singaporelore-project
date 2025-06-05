import RaffleWidget from './components/RaffleWidget';
import CareDuelBanner from './components/CareDuelBanner';
import AwardsPanels from './components/AwardsPanels';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-12 text-center">
        <h1 className="text-5xl font-bold mb-4">SingaporeLore.com</h1>
        <p className="text-xl">Tales, hidden histories, and cultural insights of the city.</p>
      </header>

      <main className="container mx-auto p-4">
        <CareDuelBanner />
        <AwardsPanels />

        <section className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-3xl font-playfairDisplay mb-4">Welcome to SingaporeLore</h2>
          <p className="text-gray-700">
            Discover the rich tapestry of Singapore through shared stories,
            captivating photos, videos, poems, and vibrant street art.
            Join our community to explore the famous landmarks, uncover hidden gems,
            and delve into the cultural heart of this incredible city.
          </p>
          <p className="mt-4 text-gray-700">
            The Raffle Ticket Widget is positioned at the bottom right.
            Click the ticket icon to expand it and join our exciting raffle!
          </p>
        </section>
      </main>

      <RaffleWidget />
    </div>
  );
}

export default App;