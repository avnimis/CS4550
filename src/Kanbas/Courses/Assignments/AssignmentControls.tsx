import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
            <button id="wd-add-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>

            <span className="d-inline-flex align-items-center">
                <FaSearch className="position-relative me-2" color="gray" style={{ bottom: "1px" }} />
                <input id="wd-assignment-search" className="position-relative me-2" placeholder="Search..."/>
            </span>
        </div>
    )
}