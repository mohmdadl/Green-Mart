'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })} // Redirect to home on sign out
      className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
    >
      Sign Out
    </button>
  );
}