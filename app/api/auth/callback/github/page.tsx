import { signInS } from "./signin";

export default async  function Tech() {
  return (
    <div className="">
      <div>
        <p className="text-4xl m-2">
          contact GuangZhou WanWei email : joe@wwin.cn
        </p>
        <form action={signInS}>
          <button type="sumit">G33itHub</button>
        </form>
      </div>
    </div>
  );
}
