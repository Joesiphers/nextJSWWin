import { signIn, signOut, auth } from "@/auth";

export default async function Contact() {
  const github_action = async () => {
    "use server";
    await signIn("github");
  };
  const session = await auth();
  let user;
  if (session?.user?.name) {
    user = session.user.name;
    console.log("token insession", session.user.token);
  }
  console.log("session", session);
  return (
    <div className="">
      <p> {user ? "logged in as " + user : "please login "}</p>
      <div>
        <p className="text-4xl m-2">
          contact GuangZhou WanWei email : joe@wwin.cn
        </p>
        <form action={github_action}>
          <button type="sumit">GitHub</button>
        </form>
      </div>
      <div>
        <form
          action={async (formData) => {
            "use server";
            await signIn(
              "credentials",
              formData,
              { callbackUrl: "http://v9qy5n-3000.csb.app" }, //not redirect
            );
          }}
        >
          <label htmlFor="">
            Email
            <input name="email" type="email" />
          </label>
          <label htmlFor="email">
            Password
            <input name="password" />
          </label>
          <button type="submit"> Sign in </button>
        </form>
      </div>
      <div>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="sumit">Google</button>
        </form>
      </div>
    </div>
  );
}
