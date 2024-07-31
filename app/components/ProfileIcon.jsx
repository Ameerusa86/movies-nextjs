"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const ProfileIcon = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex gap-5">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
        />
        <button
          className="text-white bg-amber-600 rounded-lg px-2"
          onClick={() => signOut("github")}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      className="text-white bg-amber-600 rounded-lg px-2"
      onClick={() => signIn("github", { callbackUrl: "/" })}
    >
      Sign In
    </button>
  );
};

export default ProfileIcon;
