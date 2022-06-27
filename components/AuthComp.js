import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="mt-5 py-4 w-100">
        <Link href="/signup/steptwo">
          <button
            className="text-white block text-xl rounded-md border-white border-2  text-center w-full p-3"
            onClick={() => signOut()}
          >
            Sign out.
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className=" py-4 w-100">
      <Link href="/signup/steptwo">
        <button
          className="text-white block text-xl rounded-md border-white border-2  text-center w-full p-3"
          onClick={() => signIn()}
        >
          Sign in using Google/GitHub.
        </button>
      </Link>
    </div>
  );
}
