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

const renderDespesas = () => {
    return (
        <Table responsive>
            <thead className="text-primary">
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Salario </td>
                    <td>R$ 1.000,00</td>
                    <td>01/01/2021</td>
                    <td className="td-actions text-right">
                        <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="default"
                            id="tooltip731609871"
                            type="button"
                        >
                            <i className="now-ui-icons business_bulb-63" />
                        </Button>
                        <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609871"
                        >
                            Mais Detalhes
                        </UncontrolledTooltip>
                        <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip923217206"
                            type="button"
                        >
                            <i className="now-ui-icons ui-2_settings-90" />
                        </Button>
                        <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                        >
                            Editar
                        </UncontrolledTooltip>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

function Despesa() {
  return (
    <Card className="card-chart">
        <CardHeader>
            <CardTitle tag="h4">Despesas</CardTitle>
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
            {renderDespesas()}
        </CardBody>
    </Card>
  );
}

export default Despesa;