"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <div className=" h-17 w-full bg-gray-900 text-white p-4 text-center">
        <nav className="flex">
          <div className="relative w-40 h-14">
            <Image
              src="/aqt.jpg"
              alt="random"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-between w-[80%] ml-20">
            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
            <ul className="flex ml-20 justify-between">
              <li className="p-2">
                <button onClick={() => router.push("/home")}>Home</button>
              </li>
              <li className="p-2">
                <button onClick={() => router.push("/about")}>About</button>
              </li>
              <li className="p-2">
                <button onClick={() => router.push("/contact")}>Contact</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex h-screen">
        <aside className="w-56 bg-gray-900 text-white p-4">
          <nav className="mt-4">
            <ul>
              <li className="p-2">
                <button onClick={() => router.push("/home")}>Home</button>
              </li>
              <li className="p-2">
                <button onClick={() => router.push("/about")}>About</button>
              </li>
              <li className="p-2">
                <button onClick={() => router.push("/contact")}>Contact</button>
              </li>
              <li className="mb-3">
                <button onClick={() => router.push("/overview")}>
                  Overview
                </button>
              </li>
              <li className="mb-3">
                <button onClick={() => router.push("/settings")}>
                  Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </>
  );
}
