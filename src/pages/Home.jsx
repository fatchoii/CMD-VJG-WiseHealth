import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          Welcome to CMD Cebu VjG WiseHealth
        </h1>
      </main>
    </>
  );
}