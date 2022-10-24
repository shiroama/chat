import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { getAuth } from "firebase/auth";
import { UserAuth } from "../Contexts/AuthContext";
import axios from "axios";


const auth = getAuth()
const Chats = () => {
  const history = useNavigate();
  const { user } = UserAuth();
  const { loading, setLoading } = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  const getFile = async (url) => {
    const reponse = await fetch(url);
    const data = await reponse.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id:": "2ae5e139-6ccc-4689-a5d8-d86f8ef2f038",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        FormData.append("email", user.email);
        FormData.append("userName", user.displayName);
        FormData.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios.post('https://api.chatengine.io/users/',
          formdata,{header: {"private-key":"ebb2b8e5-7132-4185-96a6-f7fd69b98023"}}
        ) . then(() => setLoading(false))
          .catch((error) => console.log(error))
      })
    })
  }, [user, history]);

  if(!user || loading) return 'loading...';
  
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Fake Message</div>
        <div  className="logout-tab">
          Log out
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="2ae5e139-6ccc-4689-a5d8-d86f8ef2f038"
        userName={user.emai}
        userSecret={user.uid}
      />
    </div>
  );
}
export default Chats;
