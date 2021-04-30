import React from 'react';
import AsesoriaInmobiliaria from '../../images/asesoria-inmobiliaria.jpg';
import ConsultoriaTradicional from '../../images/consultoria-tradicional.jpg';
import ConsultoriaIntegral from '../../images/consultoria-integral.jpg';
import FinanciamientoProcompite from '../../images/financiamiento-procompite.jpg';
import ConsultoriaAdministrativa from '../../images/consultoria-administrativa.jpg';
import Factoring from '../../images/factoring.jpg';
import AsesoriaLegal from '../../images/asesoria-legal.jpg';
import AsesoriaParaObtenerFinanciamientos from '../../images/asesoria-para-obtener-financiamientos.jpg';


const consultoria = [
    {   img : AsesoriaInmobiliaria, 
        casos : 'Asesoria Inmobiliaria',
        informacion : `Te asesoramos en todo el proceso para la obtención del financiamiento procompite en la región y/o localidad que te encuentres. Elaboramos tu plan de negocios bajo los criterios establecidos en las bases del concurso procompite.`,
    },
    {   img : ConsultoriaTradicional, 
        casos : 'Consultoria Tradicional',
        informacion : `-Ten un administrador a un costo accesible:
        El servicio consiste en tener un administrador para ordenar las finanzas y proyectar los costos. Con este servicio podrás saber la situación real de tu empresa y tener proyecciones para crecer. Te ofrecemos asesoría constante y seguimiento a tus ingresos y gastos de manera semanal, realizando 2 visitas al mes para ver de manera presencial el crecimiento de tu negocio.`,
    
    },
    {   img : ConsultoriaIntegral, 
        casos : 'Consultoria Integral',
        informacion : `Nuestro servicio de Consultoría integral abarca todos los temas de tu empresa, vemos la parte legal, financiera, contable, adminstrativa, marketing y ventas. Proporcionándote un estado real sobre tu empresa y resaltando los puntos que debes mejorar para seguir creciendo. Identificamos los problemas y proponemos soluciones.`,
    },
    {   img : FinanciamientoProcompite, 
        casos : 'Financiamiento Procompite',
        informacion : `Te asesoramos en todo el proceso para la obtención del financiamiento procompite en la región y/o localidad que te encuentres. Elaboramos tu plan de negocios bajo los criterios establecidos en las bases del concurso procompite.`,
    },
    {   img : ConsultoriaAdministrativa, 
        casos : 'Consultoria Administrativa',
        informacion: `-Ten un administrador a un costo accesible:
        El servicio consiste en tener un administrador para ordenar las finanzas y proyectar los costos. Con este servicio podrás saber la situación real de tu empresa y tener proyecciones para crecer. Te ofrecemos asesoría constante y seguimiento a tus ingresos y gastos de manera semanal, realizando 2 visitas al mes para ver de manera presencial el crecimiento de tu negocio.`,
    },
    {   img : Factoring, 
        casos : 'Factoring',
        informacion: `Nuestro Servicio de Factoring te ofrece liquidez en 48 horas.
        Contamos con Factoring Nacional para las facturas entre empresas dentro del pais.
        Y Factoring para Comercio Internacional para las Importaciones y Exportaciones.`,
    },
    {   img : AsesoriaLegal, 
        casos : 'Asesoria Legal',
        informacion: `Nuestro servicio de Asesoría legal te ayuda en:
        -Negociacion de deudas ante Entidades Financieras, SAT, SUNAT y otros
        -Evitar Remates Judiciales
        -Problemas Contractuales
        -Problemas Hipotecarios
        -Recuperación de cartera morosa.
        -Registro de Marca y nombre comercial
        -Patentes`,
    },
    {   img : AsesoriaParaObtenerFinanciamientos, 
        casos : 'Asesoria para obtener Financiamientos',
        informacion: `Nuestro servicio te ayuda a obtener FINANCIAMIENTO para :
        -Leasing (vehicular, Maquinaria y Equipos).
        -Compra de local comercial o industrial.
        -Compra de Terreno comercial o industrial.
        -Capital de Trabajo.`,
    },
]


const Card = () => {
    return (
        <div>
            <div>
                {
                    consultoria.map( ({img, casos, informacion}) => (
                        <div key={casos}>
                            <div>
                                <img src={img} alt={casos}/>
                            </div>
                            <div>
                                <h3>{casos}</h3>
                                <div>
                                    <p>{informacion}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;
