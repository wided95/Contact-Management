import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>Hello {user?.name}</h1>
    </div>
  );
};

export default Profile;
