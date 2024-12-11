import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-postal-50">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-6xl font-serif text-postal-800">
          PostalVerse
        </h1>
        <p className="text-xl text-postal-600 font-serif">
          A Vintage Social Experience
        </p>
        <div className="space-x-4">
          <Link href="/auth/login" className="vintage-button">
            Login
          </Link>
          <Link href="/auth/register" className="vintage-button">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}