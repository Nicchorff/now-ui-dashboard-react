import React, { useEffect, useState } from 'react';
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

const Cartao = ({ idUsuario }) => {
    
    const [cartoes, setCartao] = useState([]);
    idUsuario = "cedcec96-40eb-4b10-a88e-13eba9c8f233";

    useEffect(() => {
        fetch(`https://localhost:7022/api/cartao/user?idUsuario=${idUsuario}`)
            .then(response => response.json())
            .then(data => setCartao(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, [idUsuario]);

    return (
        <Card className="card-chart">
            <CardHeader>
                <CardTitle tag="h4">Cartoes</CardTitle>
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
                    {cartoes.map(cartao => (
                        <Col md={6} xs={12}>
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col md={10} className='text-left'>
                                            <CardTitle tag="h5">
                                                {cartao.nome}
                                            </CardTitle>
                                        </Col>
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
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <p>
                                        R$ {cartao.saldo.toFixed(2)}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>      
    );
};

export default Cartao;