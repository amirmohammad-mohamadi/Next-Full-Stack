import React from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface IUsersPage {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: IUsersPage) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UsersTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
