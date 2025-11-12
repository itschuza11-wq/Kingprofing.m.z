import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center p-8 rounded-lg shadow-md border border-gray-100">
        <h1 className="text-5xl font-extrabold text-red-600 mb-3">Welcome Owner</h1>
        <p className="text-2xl italic text-gray-600">from <span className="font-semibold">M.A</span></p>

        <div className="mt-6">
          <Link href="/" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
