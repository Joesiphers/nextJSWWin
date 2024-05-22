import { signIn, signOut } from "@/auth";

export default function Tech() {
  const github_action = async () => {
    "use server";
    await signIn("github", {
      callbackUrl: "https://v9qy5n-3000.csb.app/api/auth",
    });
  };
  return (
    <div className="">
      <div>
        <p className="text-4xl m-2">
          contact GuangZhou WanWei email : joe@wwin.cn
        </p>
        <form action={github_action}>
          <button type="sumit">GitHub</button>
        </form>
      </div>
    </div>
  );
}
