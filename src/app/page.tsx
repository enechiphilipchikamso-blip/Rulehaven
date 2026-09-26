import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-8">
        <header className="flex items-center gap-3">
          <Image
            src="/brand/rulehaven-mark.svg"
            alt="Rulehaven"
            width={48}
            height={48}
            priority
            unoptimized
          />
          <span className="text-lg font-semibold tracking-tight">Rulehaven</span>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            Foundation
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Customer-controlled compliance infrastructure for supported Arbitrum dedicated chains.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            The Batch 01 foundation establishes the application runtime, local
            development services, and quality checks. No authenticated or
            compliance-changing operation is exposed here.
          </p>
        </section>

        <footer className="border-t pt-6 text-sm text-muted-foreground">
          Batch 01 · Project Foundation &amp; Repository Setup
        </footer>
      </div>
    </main>
  );
}