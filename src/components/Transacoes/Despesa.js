import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  Table,
  Button,
  UncontrolledTooltip,
} from "reactstrap";


// const getDespesas = (idUsuario) => {
//     var despesas = [];
//     fetch('https://localhost:7022/api/transacao/usuario?idUsuario=' + idUsuario)
//     .then(response => response.json())
//     .then(data => data.forEach(element => {
//         if(element.tipoTransacao === 1)
//            despesas.push(element);  
//     }))
//     console.log(despesas);
//     return despesas;
// }

// const renderDespesas = () => {
//     return (
//         <Table responsive>
//             <thead className="text-primary">
//                 <tr>
//                     <th>Descrição</th>
//                     <th>Valor</th>
//                     <th>Data</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Salario </td>
//                     <td>R$ 1.000,00</td>
//                     <td>01/01/2021</td>
//                     <td className="td-actions text-right">
//                         <Button
//                             className="btn-round btn-icon btn-icon-mini btn-neutral"
//                             color="default"
//                             id="tooltip731609871"
//                             type="button"
//                         >
//                             <i className="now-ui-icons business_bulb-63" />
//                         </Button>
//                         <UncontrolledTooltip
//                             delay={0}
//                             target="tooltip731609871"
//                         >
//                             Mais Detalhes
//                         </UncontrolledTooltip>
//                         <Button
//                             className="btn-round btn-icon btn-icon-mini btn-neutral"
//                             color="info"
//                             id="tooltip923217206"
//                             type="button"
//                         >
//                             <i className="now-ui-icons ui-2_settings-90" />
//                         </Button>
//                         <UncontrolledTooltip
//                             delay={0}
//                             target="tooltip923217206"
//                         >
//                             Editar
//                         </UncontrolledTooltip>
//                     </td>
//                 </tr>
//             </tbody>
//         </Table>
//     );
// }

// function Despesa() {
//   return (
//     <Card className="card-chart">
//         <CardHeader>
//             <CardTitle tag="h4">Despesas</CardTitle>
//             <UncontrolledDropdown>
//                 <Button
//                     className=" btn-icon"
//                     color="info"
//                     >
//                     <i className="now-ui-icons ui-1_simple-add" />
//                 </Button>
//             </UncontrolledDropdown>
//         </CardHeader>
//         <CardBody>
//             {getDespesas("")}
//             {renderDespesas()}
//         </CardBody>
//     </Card>
//   );
// }

// export default Despesa;
const Despesa = ({ idUsuario }) => {
    
    const [transacoes, setTransacoes] = useState([]);
    idUsuario = "cedcec96-40eb-4b10-a88e-13eba9c8f233";

    useEffect(() => {
        fetch(`https://localhost:7022/api/transacao/usuario?idUsuario=${idUsuario}`)
            .then(response => response.json())
            .then(data => {
                const despesas = data.filter(element => element.tipoTransacao === 1);
                setTransacoes(despesas);
                console.log(despesas);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, [idUsuario]);

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
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transacoes.map(transacao => (
                            <tr key={transacao.id}>
                                <td>{transacao.descricao}</td>
                                <td>R$ {transacao.valor.toFixed(2)}</td>
                                <td>{new Date(transacao.data).toLocaleDateString()}</td>
                                <td className="td-actions text-right">
                                    <Button
                                        className="btn-round btn-icon btn-icon-mini btn-neutral"
                                        color="default"
                                        id={`tooltip${transacao.id}1`}
                                        type="button"
                                    >
                                        <i className="now-ui-icons business_bulb-63" />
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        target={`tooltip${transacao.id}1`}
                                    >
                                        Mais Detalhes
                                    </UncontrolledTooltip>
                                    <Button
                                        className="btn-round btn-icon btn-icon-mini btn-neutral"
                                        color="info"
                                        id={`tooltip${transacao.id}2`}
                                        type="button"
                                    >
                                        <i className="now-ui-icons ui-2_settings-90" />
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        target={`tooltip${transacao.id}2`}
                                    >
                                        Editar
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
        
    );
};

export default Despesa;