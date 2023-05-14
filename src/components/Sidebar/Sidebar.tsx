import React from 'react';
import "./sidebar.scss";
import Nav from "../Nav/Nav";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M18.004 4.45751H27.4845C27.8559 4.45751 28.2208 4.47395 28.5857 4.50353C29.4568 4.57585 30.2918 4.15509 30.729 3.39902C31.5409 1.9855 30.6139 0.20381 28.99 0.065745C28.4936 0.0230108 27.9907 0 27.4845 0H18.0698C8.23432 0 -0.0692763 8.04719 -0.000244028 17.8794C0.0326285 22.7346 2.01813 27.1231 5.20019 30.3085C8.41183 33.5201 12.8496 35.5056 17.7542 35.5056H27.4845C27.9907 35.5056 28.4936 35.4826 28.99 35.4431C30.6139 35.3051 31.5409 33.5201 30.729 32.1099C30.2951 31.3538 29.4568 30.933 28.5857 31.0053C28.2208 31.0349 27.8559 31.0514 27.4845 31.0514H17.7542C10.3119 31.0514 4.27976 24.9108 4.46056 17.4323C4.63478 10.1708 10.7458 4.45751 18.004 4.45751Z" fill="#30325E"/>
                        <path d="M5.12489 27.1658L1.91982 35.3577C1.40372 36.6758 2.78108 37.9349 4.04667 37.3037L13.0307 32.8363L5.12489 27.1658Z" fill="#30325E"/>
                        <path d="M34.8021 10.4633C34.2433 9.9045 33.6187 9.40484 32.9383 8.98407C32.4978 8.70794 31.9751 8.62905 31.4721 8.75396C30.9626 8.88216 30.5419 9.20103 30.2789 9.65796C30.1145 9.94723 30.0258 10.2727 30.0258 10.5981C30.0258 11.2654 30.3676 11.8801 30.9429 12.2384C32.8594 13.435 34.0066 15.4961 34.0066 17.7512C34.0066 20.0062 32.8627 22.064 30.9429 23.2639C30.0586 23.8194 29.7661 24.9535 30.2822 25.8477C30.624 26.4394 31.2585 26.8043 31.9422 26.8043C32.294 26.8043 32.6391 26.7056 32.9383 26.5216C35.9954 24.6248 37.8231 21.3474 37.8231 17.7512C37.8198 14.9997 36.7482 12.4094 34.8021 10.4633Z" fill="#34C471"/>
                        <path d="M28.8128 20.4105C27.3467 20.4105 26.1567 19.2205 26.1567 17.7544C26.1567 16.2883 27.3467 15.0983 28.8128 15.0983C30.279 15.0983 31.4689 16.2883 31.4689 17.7544C31.4689 19.2205 30.279 20.4105 28.8128 20.4105Z" fill="#4F3FF0"/>
                        <path d="M45.2359 17.7544C45.2359 24.135 41.873 29.7233 36.8271 32.856C36.4655 33.0796 36.0645 33.1848 35.6667 33.1848C34.8942 33.1848 34.1381 32.7804 33.7207 32.0638C33.1158 31.0086 33.4774 29.6806 34.5096 29.0363C38.2702 26.6892 40.7784 22.5111 40.7784 17.7577C40.7784 13.0043 38.2735 8.82295 34.5096 6.47585C33.8193 6.04194 33.4248 5.3023 33.4248 4.54295C33.4248 4.17149 33.5234 3.79346 33.7207 3.44829C34.3485 2.35693 35.7588 1.99204 36.8271 2.65935C37.9941 3.38584 39.0723 4.23724 40.0355 5.20697C43.2504 8.41533 45.2359 12.8531 45.2359 17.7544Z" fill="#DF3670"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_132">
                            <rect width="45.2359" height="37.4714" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className="search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#9FB4CD" />
                    <path d="M16.5303 15.4697L16 14.9393L14.9393 16L15.4697 16.5303L16.5303 15.4697ZM18.9697 20.0303C19.2626 20.3232 19.7374 20.3232 20.0303 20.0303C20.3232 19.7374 20.3232 19.2626 20.0303 18.9697L18.9697 20.0303ZM15.4697 16.5303L18.9697 20.0303L20.0303 18.9697L16.5303 15.4697L15.4697 16.5303Z" fill="#9FB4CD"/>
                </svg>
            </div>
            <Nav />
        </div>
    );
};


export default Sidebar;