'use client';

import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // Render a placeholder or nothing while the session is being determined
    // This prevents the hydration mismatch
    return <div className="h-8 w-8 rounded-full bg-gray-700 animate-pulse"></div>;
  }

  if (status === 'authenticated' && session) {
    return (
      <Link href="/profile">
        <img
          src={session.user?.image ?? '/default-avatar.png'}
          alt={session.user?.name ?? 'User'}
          className="h-8 w-8 rounded-full cursor-pointer"
        />
      </Link>
    );
  }

  // status === 'unauthenticated'
  return (
    <button
      onClick={() => signIn('google')}
      className="px-4 py-1.5 bg-blue-500 text-white font-semibold rounded-md text-sm hover:bg-blue-600"
    >
      Sign In
    </button>
  );
}