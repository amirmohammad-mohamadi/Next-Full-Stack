import React from "react";
import { useData } from "./useData";
import Link from "next/link";

interface IUsersTable {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: IUsersTable) => {
  const data = await useData(sortOrder);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
