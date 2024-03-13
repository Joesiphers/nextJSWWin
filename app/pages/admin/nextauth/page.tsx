"use client"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <form action={() => signIn("Credentials",formdata )}>
        <label>Email address</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
        </form>
      <button onClick={() => signIn("Credentials" )}>Sign in</button>
    </>
  )
