import React from "react";
import NotificationAlert from "react-notification-alert";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Banco from "components/Banco.js";
import Cartao from "components/Cartao";
import Renda from "components/Transacoes/Renda.js";
import Despesa from "components/Transacoes/Despesa";

function Home() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Olá { "Fulano" }</h2>
            <p className="category">
              Bem-vindo de volta! Aqui você pode visualizar suas informações.
            </p>
          </div>
        }
      />
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md={6} xs={12}>
            <Banco />
          </Col>
          <Col md={6} xs={12}>
            <Cartao />
          </Col>
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col md={6} className="ml-auto mr-auto text-center">
                      <CardTitle tag="h4">
                            Transações
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} xs={12}>
                        <Renda />
                    </Col>
                    <Col md={6} xs={12}>
                        <Despesa />
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
