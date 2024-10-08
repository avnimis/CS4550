export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <div>

        <input id="wd-name" className="form-control mb-2" value="A1 - ENV + HTML" /> <br />

        <textarea className="form-control mb-2" id="wd-description" cols={50} rows={8}>
          The assignment is available online
          
          Submit a link to the landing page of your Web application running on Netlify.
          
          The landing page should include the following: 
          Your full name and section 
          Links to each of the lab assignments 
          Link to the Kanbas application 
          Links to all relevant source code repositories 
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea><br />
      </div>

      <div id="wd-assignment-editor-rows" className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-row mb-4 text-nowrap">
          <label htmlFor="wd-points" className="form-label p-2 w-25">Points</label>
          <input id="wd-points" type="number" className="form-control" value={100} />
        </div>

        <div className="d-flex flex-row mb-4 text-nowrap">
          <label htmlFor="wd-group" className="form-label p-2 w-25">Assignment Group</label>
          <select id="wd-group" className="form-select">
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>

        <div className="d-flex flex-row mb-4 text-nowrap">
          <label htmlFor="wd-display-grade-as" className="form-label p-2 w-25">Display Grade as</label>
          <select id="wd-display-grade-as" className="form-select">
            <option selected value="Percentage">Percentage</option>
          </select>
        </div>

        <div className="d-flex flex-row mb-4 text-nowrap">
          <label htmlFor="wd-submission-type" className="form-label p-2 w-25"> Submission Type</label>

          <div className="rounded-box mb-3 p-3 w-100 border">
            <select id="wd-submission-type" className="form-select">
              <option selected value="Online">Online</option>
            </select>
            <label htmlFor="wd-online-entry-options" className="form-label mt-3">
              <b>Online Entry Options</b>
            </label>

            <div id="wd-online-entry-options">
              <div>
                <input type="checkbox" name="check-entry" id="wd-text-entry" className="form-check-input" />
                <label htmlFor="wd-chkbox-text" className="form-label mb-3 ms-3">Text Entry</label><br />
              </div>
              <div>
                <input type="checkbox" name="check-entry" id="wd-website-url" className="form-check-input" />
                <label htmlFor="wd-chkbox-website" className="form-label mb-3 ms-3">Website Url</label><br />
              </div>
              <div>
                <input type="checkbox" name="check-entry" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-chkbox-media" className="form-label mb-3 ms-3">Media Recordings</label><br />
              </div>
              <div>
                <input type="checkbox" name="check-entry" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-chkbox-annotation" className="form-label mb-3 ms-3">Student Annotation</label>
              </div>
              <div>
                <input type="checkbox" name="check-entry" id="wd-file-uploads" className="form-check-input" />
                <label htmlFor="wd-chkbox-upload" className="form-label mb-3 ms-3">File Uploads</label>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row mb-4 text-nowrap">
          <label htmlFor="wd-assign" className="form-label p-2 w-25">Assign</label>

          <div className="rounded-box mb-3 p-3 w-100 border">

            <label htmlFor="wd-assign-to" className="form-label mb-3"> <b> Assign To </b> </label>

            <input id="wd-assign-to" value="Everyone" className="form-control mb-3" />

            <label htmlFor="wd-due-date" className="form-label mb-3"> <b>Due</b> </label>
            <input type="date" id="wd-text-fields-due" value="05/13/2024" className="form-control mb-3" />

            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label mb-3"> <b>Avaible from</b></label>
                <input type="date" id="wd-text-fields-due" value="05/13/2024" className="form-control mb-3" />
              </div>

              <div className="col">
                <label htmlFor="wd-until" className="form-label mb-3"> <b>Until</b> </label>
                <input type="date" id="wd-text-fields-due" value="05/13/2024" className="form-control mb-3" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

