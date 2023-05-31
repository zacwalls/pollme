'use client';
import { useSession, signIn, signOut } from "next-auth/react"

export function Navbar() {
    const { data: session } = useSession()

    if (session) {
        return (
            <div className="flex items-center justify-between w-full max-w-5xl">
                <h1 className="text-2xl font-bold">
                    Welcome, {session?.user?.name}
                </h1>
                <button
                    className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500"
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-between w-full max-w-5xl">
            <h1 className="text-2xl font-bold">
                Welcome, Guest
            </h1>
            <button
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500"
                onClick={() => signIn()}
            >
                Sign In
            </button>
        </div>
    )
}