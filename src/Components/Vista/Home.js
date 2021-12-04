import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Button } from '@material-ui/core';

export const Home = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Reporte de las areas y los empleados
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Reporte
                    </CardSubtitle>
                    <CardText>
                        Para visualizar el reporte de las areas y los empleados en formato PDF presione el boton "Visualizar" y para descargarlo presione el boton "Descargar".
                    </CardText>
                    <Button style={{ margin: 10 }}
                        color='primary'
                        variant='contained'
                        href='//localhost:3000/Informe'
                    >
                        Visualizar
                    </Button>
                        <Button
                            color='secondary'
                            variant='contained'
                        >
                            Descargar
                        </Button>
                </CardBody>
            </Card>
        </div>
    )
}
