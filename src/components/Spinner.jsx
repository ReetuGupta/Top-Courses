import "../index.css";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-5">
      <div className="spinner"></div>
      <div className="text-lg font-medium mt-5">Loading...</div>
    </div>
  );
}
