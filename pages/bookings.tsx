import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function Bookings() {
  const [data, setData] = useState<
    | null
    | "test"
    | {
        from: string;
        to: string;
        roundtrip: boolean;
      }[]
  >("test");
  useEffect(() => {
    const storage = localStorage.getItem("bookings");
    setData(storage ? JSON.parse(storage) : null);
  }, [setData]);
  return (
    <Layout page="bookings">
      <img
        src="/time-machine.webp"
        alt=""
        className="w-full h-96 object-bottom object-cover"
      />
      <div className="mx-auto max-w-screen-md w-full -translate-y-52 -mb-44">
        <h1 className="font-bold text-white text-5xl  mb-8">Bookings</h1>
        <div className="space-y-8">
          {data == "test" ? (
            <div className="rounded-xl bg-gray-100 shadow-2xl p-6">
              Loading...
            </div>
          ) : data == null ? (
            <div className="rounded-xl bg-gray-100 shadow-2xl p-6">
              No bookings found! Create one on{" "}
              <Link href="/">
                <a className="underline decoration-purple-600 decoration-2">
                  the homepage
                </a>
              </Link>
              .
            </div>
          ) : (
            data.map((v, i) => (
							<div className="rounded-xl bg-gray-100 shadow-lg px-6 py-4 flex justify-between items-center" key={i}>
								<div>Departs from <span className="font-medium">{v.from}</span> and goes to <span className="font-medium">{v.to}</span></div>
								<div className={`rounded-full px-2 border ${v.roundtrip ? "border-green-500 bg-green-200/50" : "border-red-500 bg-red-200/50"} text-sm`}>Roundtrip</div>
            
            </div>
						))
          )}
        </div>
      </div>
    </Layout>
  );
}
