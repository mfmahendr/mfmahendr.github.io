export default function Advertisement() {
  return (
    <div
      className="mt-6 border-2 border-black p-4 text-center relative bg-[linear-gradient(rgba(210,180,140,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(210,180,140,0.3)_1px,transparent_1px)] 
             bg-[length:20px_20px]"
    >
      <p className="text-xs uppercase font-bold mb-1">ADVERTISEMENT</p>
      <div className="border border-black p-2 relative">
        <p className="text-sm italic">"Seeking backend expertise?"</p>
        <p className="text-lg font-bold mt-1">ENGAGE THIS DEVELOPER</p>
        <p className="text-xs mt-1">
          Available for consultation and development work
        </p>
      </div>
    </div>
  );
}
