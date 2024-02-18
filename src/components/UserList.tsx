"use client";

import UserItem from "./UserItem";

const UserList = () => {
  return (
    <div className="flex flex-col items-center mt-2 gap-2 pb-3">
      <UserItem index={1} name={"Name"} />
      <UserItem index={2} name={"Name"} />
      <UserItem index={3} name={"Name"} />
      <UserItem index={52} name={"You"} />
      <UserItem index={52} name={"You"} />
      <UserItem index={52} name={"You"} />
      <UserItem index={52} name={"You"} />
      <UserItem index={52} name={"You"} />
      {/* <UserItem index={52} name={"You"} /> */}
    </div>
  );
};

export default UserList;
