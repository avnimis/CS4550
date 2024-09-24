import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/Sheep.jpg" width={200} />
            <div>
              <h5>
                Sheep Shearing and Maintenace  
              </h5>
              <p className="wd-dashboard-course-title">
                Barn handling development 
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/chicken.jpg" width={200} />
            <div>
              <h5>
                Coop preperation course 
              </h5>
              <p className="wd-dashboard-course-title">
                CS1210 
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/mines.jpg" width={200} />
            <div>
              <h5>
                Rocks and Minerals
              </h5>
              <p className="wd-dashboard-course-title">
                Enviornmental Sciences 
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/fish.jpg" width={200} />
            <div>
              <h5>
                Fishing 101
              </h5>
              <p className="wd-dashboard-course-title">
                Marine Biology
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/desert.jpg" width={200} />
            <div>
              <h5>
                Climate Change in humid climates
              </h5>
              <p className="wd-dashboard-course-title">
                Enviornmental Sciences
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/dinosaurs.jpg" width={200} />
            <div>
              <h5>
                Raising dinosaurs
              </h5>
              <p className="wd-dashboard-course-title">
                Paleontology
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
