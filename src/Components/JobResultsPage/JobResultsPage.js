import React from 'react';

import '../../Styles/JobResultsPage/JobResultsPage.css';

const JobResultsPage = () => {
    return (
        <div className='JobResults'>
            <div className='JobTitleDiv'><h2 className='JobTitle'>Python Developer</h2></div>
            <div className='CompanyNameLocation'>
            <span class="material-symbols-outlined">
pin_drop
</span>
                <h3 className='CompanyName'>Microsoft -</h3>
                <h3 className='CompanyLocation'>&nbsp;Pune, Maharashtra</h3>
            </div>
            <div className='JobDescDiv'>
                <div className='jobDesc'>
                    <h3>Job Description</h3>
                    <span class="material-symbols-outlined">description</span>
                </div>
                
                <p className='JobDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='ApplyLinkDiv'>
                <p className="ApplyLink">Apply Link</p>
            </div>
        </div>
    );
}

export default JobResultsPage;