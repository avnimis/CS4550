import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>

      {isFaculty &&
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
      }
    </div>
  );
}

