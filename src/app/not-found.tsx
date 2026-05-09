import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-void">
      <div className="text-center px-6 max-w-md">
        <div className="text-[10rem] font-extrabold leading-none gradient-lime-text mb-4 select-none">
          404
        </div>
        <h2 className="headline-sub !text-text-primary mb-4">Signal Lost</h2>
        <p className="body-sm mb-10">
          The page you&apos;re looking for doesn&apos;t exist. It may have been taken down or the
          coordinates were wrong.
        </p>
        <Link href="/" className="btn-cinematic inline-flex">
          Return to Base
        </Link>
      </div>
    </div>
  );
}
