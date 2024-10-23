import { Link, useParams, useLocation } from "react-router-dom";


export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
       {links.map((link) => (
         <div>
           <Link to={`/Kanbas/Courses/${cid}/${link}`}
            className={`list-group-item ${pathname.includes(link) ? " active text-black border-0 bg-transparent" : "list-group-item text-danger border-0"}`}
            id={`wd-course-${link.toLowerCase}-link`}>
            {link}
          </Link>
        </div>
      ))}
    </div>
  );
}