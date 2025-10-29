import Advertisement from "./Advertisement";
import LearningSection from "./LearningSection";
import Pursuits from "./Pursuits";

export default function Interests() {
  return (
    <div className="md:col-span-4 flex flex-col">
      <div className="flex flex-col sm:flex-row md:flex-col gap-4">
        <Pursuits />
        <LearningSection />
      </div>

      <Advertisement />
    </div>
  );
}
