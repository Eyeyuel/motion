import SharedLayout from "./components/SharedLayout";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    // </div>
    <>
      {/* <div className="h-[150vh] w-full bg-amber-800"></div> */}
      <div className="h-dvh flex justify-center items-center gap-40">
        <SharedLayout />
      </div>
    </>
  );
}
