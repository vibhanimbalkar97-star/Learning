import { useState } from "react";

const ShowHidePassword = () => {
  const [user, setUser] = useState({
     active:true
  });

  const handleStatus = () => {
    const newStatus = { ...user };
    newStatus.active = false;
    setUser(newStatus);
    console.log(newStatus)
  };

  return (
    <div>
      <p>
        {user.active}
      </p>
      <button onClick={handleStatus}>Toggle User Status</button>
    </div>
  );
};

export default ShowHidePassword;
