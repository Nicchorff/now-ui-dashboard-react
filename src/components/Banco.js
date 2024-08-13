import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";

const renderBancos = () => {
    return (
        <Col md={6} xs={12}>
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">
                        PicPay
                    </CardTitle>
                    <UncontrolledDropdown>
                        <DropdownToggle
                        className="btn-neutral btn-icon"
                        color="default"
                        >
                            <i className="now-ui-icons loader_gear" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                            <DropdownItem className="text-danger">
                                Remove data
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                    <p>
                        R$ 1.000,00
                    </p>
                </CardBody>
            </Card>
        </Col>
    );
}

function Banco() {
  return (
    <Card className="card-chart">
        <CardHeader>
            <CardTitle tag="h4">Bancos</CardTitle>
            <UncontrolledDropdown>
                <Button
                    className=" btn-icon"
                    color="info"
                    >
                    <i className="now-ui-icons ui-1_simple-add" />
                </Button>
            </UncontrolledDropdown>
        </CardHeader>
        <CardBody>
            <Row>
                {renderBancos()}
                {renderBancos()}
                {renderBancos()}
                {renderBancos()}
            </Row>
        </CardBody>
        <CardFooter>
            <div className="stats">
                <i className="now-ui-icons arrows-1_refresh-69" /> Just
                Updated
            </div>
        </CardFooter>
    </Card>
  );
}

export default Banco;