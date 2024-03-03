import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold">Welcome to the Enterprise Agile Assistant</h1>
      <p className="mt-3 text-2xl">
        Your assistant for SAFe Practice and Agile Coaching.
      </p>

      <div className="mt-10 space-y-5">
        <div className="flex items-center justify-center">
          {/* Replace with your logo */}
          <Image
            src="/next.svg" // Update the path to your actual logo image
            alt="SAFe Logo"
            width={300}
            height={100}
            priority
          />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Features Coming Soon:</h2>
          <ul className="mt-3 list-disc list-inside">
            <li>SAFe Readiness Assessment Tool</li>
            <li>PI Planning Facilitator</li>
            <li>Change Management Companion</li>
            <li>Lean-Agile Learning Pathways</li>
            <li>Real-Time ChatGPT Integration for Interactive Guidance</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
