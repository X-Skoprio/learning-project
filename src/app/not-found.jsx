import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 h-svh w-svw bg-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl md:text-6xl p-4 w-full flex justify-center">
        <span className="text-primary font-bold text-3xl md:text-6xl pr-2">Error 404 : </span> {" "} Page Not Found
      </h1>
    <Link href="/">
    <button className="btn-primary mt-10 md:mt-20">Retourner à la page d&apos;Accueil</button>
    </Link>
      
    </div>
  );
}
