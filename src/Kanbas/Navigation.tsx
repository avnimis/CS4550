import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrGroup } from "react-icons/gr"
import { BsEnvelopePaper } from "react-icons/bs"
import { CiClock2, CiYoutube } from "react-icons/ci";
import { MdOutlineAssignment, MdOutlineForum } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";


export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a><br />

      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link>

      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link>

        <Link to="/Labs" id="wd-labs-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <MdOutlineAssignment className="fs-1 text-danger" /><br />
        Labs </Link>

      <Link to="/Kanbas/Dashboard" id="wd-group-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <GrGroup className="fs-1 text-danger" /><br />
        Groups </Link>

      <Link to="/Kanbas/Dashboard" id="wd-calendar-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar </Link>

      <Link to="/Kanbas/Dashboard" id="wd-inbox-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <BsEnvelopePaper className="fs-1 text-danger" /><br />
        Inbox </Link>

      <Link to="/Kanbas/Dashboard" id="wd-history-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <CiClock2 className="fs-1 text-danger" /><br />
        History </Link>

      <Link to="/Kanbas/Dashboard" id="wd-studio-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <CiYoutube className="fs-1 text-danger" /><br />
        Studio </Link>

      <Link to="/Kanbas/Dashboard" id="wd-commons-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <MdOutlineForum className="fs-1 text-danger" /><br />
        Commons </Link>

      <Link to="/Kanbas/Dashboard" id="wd-help-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoIosHelpCircleOutline className="fs-1 text-danger" /><br />
        Help </Link>


    </div>
  );
}

