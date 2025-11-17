export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Kingprofit</h1>

      <a
        href="/login"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Login
      </a>
    </div>
  );
}
