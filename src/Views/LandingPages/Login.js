/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 22/10/2023 - 12:32:01
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/10/2023
 * - Author          : DHANUSH
 * - Modification    :
 **/

import React from "react";
import axios from "axios";
import Urls from "../../Utilities/Urls";



function Login() {
  const [email, setEmail] = React.useState('');
  const [passWord, setPassWord] = React.useState('');

  const Authenticate = async () => {

    const body = {
      mail: email,
      passWord: passWord
    }

   await axios.post(Urls._baseUrl + Urls._login, body).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });



  }





  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-purple-600 text-white h-1/2 w-1/2 rounded-xl">
        <p className="flex justify-center font-bold p-2">
          Textile & Clothing - Login
        </p>
        <div className="flex flex-col flex justify-center items-center h-3/4">

          <div className="flex flex-col">
            <label className="text-xs">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="rounded-full px-4 text-slate-900"
              onChange={(e) => setEmail(e.target.value)} />

            <label className="mt-4 text-xs">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="rounded-full px-4 text-slate-900"
              onChange={(e) => setPassWord(e.target.value)} />
          </div>

          <button
            onClick={Authenticate}
            className=" mt-12 rounded-full border px-24 py-2 bg-white text-purple-600 text-xs font-bold hover:bg-purple-600 hover:text-white hover:border border-white"

          >
            Login
          </button>





        </div>
      </div>

    </div>
  );
}

export default Login;
