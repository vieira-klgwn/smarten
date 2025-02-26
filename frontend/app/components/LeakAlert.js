export default function LeakAlert({ leakDetected }) {
    return (
        <div className={`mb-10 p-4 w-full max-w-md text-center rounded-lg ${leakDetected ? "  bg-red-500 text-white" : "bg-green-500 text-white"}`}>
            {leakDetected ? "⚠️ Leak Detected!" : "✅ No Leak"}
        </div>
    );
}
