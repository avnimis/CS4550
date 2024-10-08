import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAssignment } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";


export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br /><br /><br />


      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoIosArrowDown />
            ASSIGNMENTS

            <div id="assignment-controls-buttons" className="float-end">
              <span className="rounded-box px-3 py-1"> 40% of Total</span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>

          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">

                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment color="green" />

                <div className="d-flex flex-column ms-3">
                  <a href="#/Kanbas/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold"> A1
                  </a>
                  <div className="wd-assignment-details mt-1">
                    <div className="wd-assignment-list-item pe-5 mb-0">
                      <span className="text-danger">Multiple Modules </span>
                      | <b>Not avaliable until</b> May 6 at 12:00am |
                      <br />
                      <b>Due</b> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
              </div>
              <LessonControlButtons />

            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">

                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment color="green" />

                <div className="d-flex flex-column ms-3">
                  <a href="#/Kanbas/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold"> A2
                  </a>
                  <div className="wd-assignment-details mt-1">
                    <div className="wd-assignment-list-item pe-5 mb-0">
                      <span className="text-danger">Multiple Modules </span>
                      | <b>Not avaliable until</b> May 13 at 12:00am |
                      <br />
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">

                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment color="green" />

                <div className="d-flex flex-column ms-3">
                  <a href="#/Kanbas/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold"> A3
                  </a>
                  <div className="wd-assignment-details mt-1">
                    <div className="wd-assignment-list-item pe-5 mb-0">
                      <span className="text-danger">Multiple Modules </span>
                      | <b>Not avaliable until</b> May 20 at 12:00am |
                      <br />
                      <b>Due</b> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
