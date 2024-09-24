export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols= {50} rows= {8}>
          The assignment is available online Submit a link to the landing page 
          of your Web application running on Netlify. The lanfing page should 
          include the following: Your full name and section Links to each of
          the lab assignments Link to the Kanbas application Links to all 
          relevant source code repositories the Kanbas application should 
          include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option selected value = "ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option selected value = "Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option selected value = "Online">Online</option>
              </select>
              <p>Online Entry Options</p>
              <div id="wd-online-entry-options">
                <div>
                  <input type="checkbox" name="check-entry" id="wd-text-entry" />
                  <label htmlFor="wd-chkbox-text">Text Entry</label><br />
                </div>
                <div>
                  <input type="checkbox" name="check-entry" id="wd-website-url" />
                  <label htmlFor="wd-chkbox-website">Website Url</label><br />
                </div>
                <div>
                  <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                  <label htmlFor="wd-chkbox-media">Media Recordings</label><br />
                </div>
                <div>
                  <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                  <label htmlFor="wd-chkbox-annotation">Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" name="check-entry" id="wd-file-uploads" />
                  <label htmlFor="wd-chkbox-upload">File Uploads</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              Assign to
              <br />
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <label htmlFor= "wd-due-date">Due</label>
              <br/>
              <input type="date" id="wd-text-fields-due" value="05/13/2024"/>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <label htmlFor = "wd-available-from">Avaible from</label>
              <br/>
              <input type="date" id="wd-text-fields-due" value="05/13/2024"/>
            </td>
            <td>
              <label htmlFor = "wd-available-from">Until</label>
              <br/>
              <input type="date" id="wd-text-fields-due" value="05/13/2024"/>
            </td>
          </tr>
        </table>
      </div>
  );}
  
  