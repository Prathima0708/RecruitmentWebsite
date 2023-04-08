import React from 'react';
import backgrdImage from '../../images/pagetitle-bg.jpg'
const PageHeader = ({title,content,breadcrumb,className}) => {
    return (
        <div className="page-header-area bg-img" style={{backgroundImage:  backgrdImage}}>
            <div className="page-header-area-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="page-header-content-inner">
                                <div className="page-header-content">
                                    <h2>{title}</h2>
                                    <div>{content}</div>
                                    <div className="breadcrumb-wrapper">
                                        <span><a href={process.env.PUBLIC_URL + '/'} title="Homepage"><i className="ti ti-home" />&nbsp;&nbsp;Home</a></span>
                                        <span className="bread-sep">&nbsp;/&nbsp;</span>                                        
                                        {breadcrumb}
                                    </div>
                                    <div className={className}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;