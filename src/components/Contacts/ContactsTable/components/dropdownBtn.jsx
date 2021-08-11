import React from 'react';

const dropdownBtn = () => {
    return (
        <div className="dropdown dropdown-inline">
                        
        <a
            href="javascript:;"
            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
            data-toggle="dropdown"
        >
            
            <span className="svg-icon svg-icon-md">
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    className="svg-icon"
                >
                    
                    <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                    >
                        
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                            d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                            fill="#000000"
                        />
                        <path
                            d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                            fill="#000000"
                            opacity="0.3"
                        />
                    </g>
                </svg>
            </span>
        </a>
        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            
            <ul className="navi flex-column navi-hover py-2">
                
                <li className="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">
                    
                    Choose an action:
                </li>
                <li className="navi-item">
                    
                    <a href="#" className="navi-link">
                        
                        <span className="navi-icon">
                            <i className="la la-print" />
                        </span>
                        <span className="navi-text">Print</span>
                    </a>
                </li>
                <li className="navi-item">
                    
                    <a href="#" className="navi-link">
                        
                        <span className="navi-icon">
                            <i className="la la-copy" />
                        </span>
                        <span className="navi-text">Copy</span>
                    </a>
                </li>
                <li className="navi-item">
                    
                    <a href="#" className="navi-link">
                        
                        <span className="navi-icon">
                            <i className="la la-file-excel-o" />
                        </span>
                        <span className="navi-text">Excel</span>
                    </a>
                </li>
                <li className="navi-item">
                    
                    <a href="#" className="navi-link">
                        
                        <span className="navi-icon">
                            <i className="la la-file-text-o" />
                        </span>
                        <span className="navi-text">CSV</span>
                    </a>
                </li>
                <li className="navi-item">
                    
                    <a href="#" className="navi-link">
                        
                        <span className="navi-icon">
                            <i className="la la-file-pdf-o" />
                        </span>
                        <span className="navi-text">PDF</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default dropdownBtn;
