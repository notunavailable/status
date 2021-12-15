import React from 'react';
import styles from '../styles/home.module.css';
import { useCookies } from "react-cookie"

export default function Home() {
  const [cookie, setCookie] = useCookies(["user"])

  const handleSignIn = async () => {
    try {
      const response = await yourLoginFunction(username) //handle API call to sign in here.
      const data = response.data

      setCookie("user", JSON.stringify(data), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      })
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className = {styles.page}>
      <div>
        <h1 className = {styles.title}>Home</h1>
        <label htmlFor="username">
        <input type="text" placeholder="enter username" />
      </label>
      </div>
    </div>
  )
}

//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