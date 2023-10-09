import { sort } from "fast-sort";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const useData = async (sortOrder: string) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/xusers", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return {
    users,
    sortedUsers,
  };
};
