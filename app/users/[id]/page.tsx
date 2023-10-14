import { Metadata } from "next";
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

// use dynamic Metadata
export async function generateMetadata(): Promise<Metadata> {
  // const user = await fetch("");

  return {
    title: "user.name",
    description: "user.description",
  };
}
