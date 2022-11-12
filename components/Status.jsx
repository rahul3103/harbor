import TickInCircle from "../public/icons/tick_in_circle.svg";
import Clone from "../public/icons/clone.svg";
import Killed from "../public/icons/killed.svg";
import StandingUp from "../public/icons/standing_up.svg";
import Attention from "../public/icons/attention.svg";
import TickInSquare from "../public/icons/tick_in_square.svg";

function Status({ status }) {
  let Icon = StandingUp;
  let textColor = "text-amber-450";
  if (status === "ALL") {
    Icon = TickInSquare;
    textColor = "text-blue-50";
  }
  if (status === "RUNNING") {
    Icon = TickInCircle;
    textColor = "text-green-50";
  }
  if (status === "CLONING") {
    Icon = Clone;
    textColor = "text-purple-450";
  }
  if (status === "FAILED") {
    Icon = Attention;
    textColor = "text-red-450";
  }
  if (status === "KILLED") {
    Icon = Killed;
    textColor = "text-gray-175";
  }

  return (
    <div className={`flex items-center space-x-1.5 ${textColor}`}>
      <Icon className="h-3.5 w-3.5" />
      <span className="text-sm font-medium lowercase first-letter:capitalize">
        {status}
      </span>
    </div>
  );
}

export default Status;
