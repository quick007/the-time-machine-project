import type { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Layout(props: {
  children: ReactNode;
  page?: "about" | "bookings";
}) {
  return (
    <>
      <Head>
        <title>Time Machine Project!</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <nav className="z-40 flex h-14 top-0 text-gray-900 sticky items-center justify-between bg-gray-300/50  px-8   ring-gray-500/20 backdrop-blur-lg backdrop-filter">
          <Link href="/">
            <a className="flex items-center font-medium text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              4D Travel
            </a>
          </Link>
          <div className="flex space-x-8">
            <Link href="/about">
              <a
                className={
                  "flex items-center font-medium transition " +
                  (props.page == "about"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-800")
                }
              >
                Artist&apos;s Statement
              </a>
            </Link>
            <Link href="/bookings">
              <a
                className={
                  "flex items-center font-medium transition " +
                  (props.page == "bookings"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-800")
                }
              >
                Bookings
              </a>
            </Link>
          </div>
        </nav>
        <div className="flex-1">{props.children}</div>
        <div className="flex text-gray-900">
          <div className="mx-auto w-full max-w-screen-md pb-10 pt-5 mt-10 flex justify-between border-t border-gray-500">
            <div>
              <h3 className="font-medium">4D Travel</h3>
              <p className="text-sm max-w-xs mt-1 text-gray-800 leading-6">
                {" "}
                Traversing the world in 4D, rather than 3D, letting humans think
                about the 4th dimension in realistic terms. Doesn&apos;t support
                mobile.
              </p>
              <p className="mt-6 font-medium text-sm">Made by Lukas</p>
            </div>
            <div className="flex flex-col justify-end">
              <a
                href="https://github.com/quick007/the-time-machine-project"
                className=" underline decoration-zinc-600 dashed text-right"
              >
                Github
              </a>
              <Link href="/about">
                <a className=" underline decoration-zinc-600">
                  Artist&apos;s Statement
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
