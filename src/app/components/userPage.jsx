import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
const { id } = useParams();
 const [user, setUser] = useState();
    useEffect(() => {
      user.fetchAll().then((data) => setUser(data));
    }, [id]);

  return (
    <div>
     {user.map(user => (
       <Link key={user.id} to={`/users/${user.id}`}>
         <p>{user.name}</p>
       </Link>
     ))}

     {
       user && (
         <>
         <h1>{user.name}</h1>
         <p>{user.rate}</p>
         </>
       )
     }
    </div>
  );
};

UserPage.propTypes = {
    users: PropTypes.array
};
export default UserPage;
