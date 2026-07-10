import { useState } from "react";

const ShowHidePassword = () => {
  const [user, setUser] = useState({
     active:true
  });

  const handleStatus = () => {
    setUser(prev => ({
      ...prev,
      active: !prev.active
    }))
  };

  return (
    <div>
      {
       
        user.active ? 'Active' : 'Not active'
      }
      <button onClick={handleStatus}>Toggle User Status</button>
    </div>
  );
};

export default ShowHidePassword;
