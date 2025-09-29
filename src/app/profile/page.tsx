import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
// This assumes your authOptions are defined in the handler file
// Make sure the path is correct for your project structure
import { authOptions } from "@/app/lib/auth";
import SignOutButton from '@/app/components/SignOutButton';

export default async function ProfilePage() {
  // Get the session on the server
  const session = await getServerSession(authOptions);

  // If there is no session, redirect to the homepage
  // Middleware should handle this, but it's good practice for safety
  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>

      <div className="mt-6 flex flex-col items-center">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? 'User profile picture'}
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
        <h2 className="mt-4 text-2xl font-semibold">{session.user.name}</h2>
        <p className="text-gray-600">{session.user.email}</p>
      </div>

      <SignOutButton />
    </div>
  );
}