import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={style.profileContainer}>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;