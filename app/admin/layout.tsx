import React from "react";

interface IAdminLayout {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
