import React from 'react';
import '../../../styles/addListing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const AddListing = () => {
    return (
        <div className="addListing-section mt-5">
            <div className="advertise">
                <div class="heading-section ftco-animate">
                    <h3 class="mb-1 text-center">Looking for roommate?</h3>
                    <p>Be amazed at the response rate - rent your room within days</p>
                    <p className="p-btn"><a href="www.renterbd.com" className="btn outlin-btn rounded-pill mt-2 px-4 py-3">Add Your Room</a></p>
                </div>
            </div>
            <div className="advertise">
                <div class="heading-section ftco-animate">
                    <h3 class="mb-1 text-center">Looking for room?</h3>
                    <p>Most people with rooms for rent search the rooms wanted for suitable roommates.</p>
                    <p className="p-btn"><a href="www.renterbd.com" className="btn outlin-btn rounded-pill mt-2 px-4 py-3">Advertise for free</a></p>
                </div>
            </div>
        </div>
    );
};

export default AddListing;