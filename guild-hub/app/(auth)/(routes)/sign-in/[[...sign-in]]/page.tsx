"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton showName />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton mode="modal" />
      </SignedOut>
    </div>
  );
}
