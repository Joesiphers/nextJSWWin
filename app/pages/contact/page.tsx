import { signInS } from "./signin";
/*        <form action={signInS ("github")}>
          <button type="sumit">GitHub</button>
        </form>
        */
export default async  function Tech() {
  return (
    <div className="">
      <div>
        <p className="text-4xl m-2">
          contact GuangZhou WanWei email : joe@wwin.cn
        </p>
      ?</div>
      <div>
        <p className="text-4xl m-2">
          Google
        </p>
        <form action={signInS}>
          <button type="sumit">Google</button>
        </form>
      </div>
    </div>
  );
}
