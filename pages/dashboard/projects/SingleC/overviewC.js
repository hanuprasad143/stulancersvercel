// import node module libraries
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

// import sub components
import { CommonHeaderTabs , ProjectSummaryC, BudgetSectionC, UpcomingDeadlinesC, LaunchDateC, OverallProgressChartC, RecentActivityC }  from 'sub-components';

const ProjectOverview = () => {
    return (
        <Fragment>
            {/* page header tabs */}
            <CommonHeaderTabs />

            <Row>
                <Col md={8} xl={8} xs={12}>
                    <Row>
                        <Col xs={12} className="mb-4">
                            {/* project summary section */}
                            <ProjectSummaryC />
                        </Col>
                        <Col md={12} className="mb-4">
                            {/* project budget section */}
                            <BudgetSectionC />
                        </Col>
                        <Col md={12} className="mb-4">
                            {/* upcoming deadlines table section */}
                            <UpcomingDeadlinesC />
                        </Col>
                    </Row>
                </Col>
                <Col md={12} xl={4} xs={12}>
                    {/* launch date section */}
                    <LaunchDateC />

                    {/* overall progress chart  */}
                    <OverallProgressChartC />

                    {/* recent activities section  */}
                    <RecentActivityC />
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProjectOverview;
