import { notFound } from "next/navigation";
import React from "react";

interface IUserDetailPage {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: IUserDetailPage) => {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
