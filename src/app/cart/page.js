import { Suspense } from "react";
import CartClient from "./CartClient";

const Cartpage = () => {
  return (
    <div className="xl:max-w-[1180px] max-w-[1000px] mx-auto ">
      <Suspense fallback={<div>Loading...</div>}>
        <CartClient />
      </Suspense>
    </div>
  );
};

export default Cartpage;
