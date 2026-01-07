import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

function Profile() {
  const [user, setUser] = useState(null);
console.log(user?.profilePic)
  useEffect(() => {
    api.get("/users/profile")
      .then((res) =>{ 
        console.log(res.data.user)
        setUser(res.data.user)})
      .catch(() => alert("Unauthorized"));
  }, []);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Your Profile</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      {user.profilePic && (
        <img
          src={`${user.profilePic}`}
          width="150"
          alt="profile"
         
        />
      )}
    </div>
  );
}

export default Profile;