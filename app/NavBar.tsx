"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: sessionData } = useSession();

  const renderLoading = () => {
    return <span className="loading loading-ring loading-md"></span>;
  };

  const renderUser = () => {
    return (
      <div className="ml-auto flex gap-3 align-middle">
        {/* <Image
          alt={sessionData?.user?.name || ""}
          src={sessionData?.user?.image || ""}
          width={30}
          height={30}
        /> */}
        <h3 className="text-lg text-cyan-950">{sessionData?.user?.name}</h3>
        <Link className="btn btn-error btn-sm" href="/api/auth/signout">
          Sign Out
        </Link>
      </div>
    );
  };
  const renderUserTab = () => {
    switch (status) {
      case "loading":
        return renderLoading();
      case "authenticated":
        return renderUser();
      default:
        return <Link href="/api/auth/signin">Login</Link>;
    }
  };

  return (
    <div className="flex bg-slate-200 p-3 gap-3">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      {renderUserTab()}
    </div>
  );
};

export default NavBar;
