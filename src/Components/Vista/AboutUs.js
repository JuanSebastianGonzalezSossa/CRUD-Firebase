import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardColumns } from 'reactstrap';
import Imagenes from '../assets/Imagenes';

export const AboutUs = () => {
    return (
        <div >
            <CardColumns>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={Imagenes.Evelin}
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Evelin Yuliana Hernandez Rodriguez
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Politécnico Colombiano Jaime isaza Cadavid
                        </CardSubtitle>
                        <CardText>
                            Estudiante de ingenieria informatica - asignatura : Programación Distribuida y Paralela.
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={Imagenes.Sebas}
                        top
                        width="100%"
                    />
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Juan Sebastian Gonzalez Sossa
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Politécnico Colombiano Jaime isaza Cadavid
                        </CardSubtitle>
                        <CardText>
                            Estudiante de ingenieria informatica
                        </CardText>
                    </CardBody>
                </Card>
            </CardColumns>
        </div>
    )
}

