import { Link, useNavigate } from "react-router-dom";
import { statesInfo } from "../ItalyMap/StatesData";

export const dropContent = [
    {
        heading: 'Choose a destination',
        para: 'UNESCO Sites,Castles,regions:in Italy every destination is a stunning experience.',
        columns: [
            {
                title: 'Regions',
                data: [
                    <Link to={`/state/${statesInfo[0].name.toLowerCase()}`} state={statesInfo[0]}>Abruzzo</Link>,
                    <Link to={`/state/${statesInfo[1].name.toLowerCase()}`} state={statesInfo[1]}>Aosta Valley</Link>,
                    <Link to={`/state/${statesInfo[2].name.toLowerCase()}`} state={statesInfo[2]}>Apulia</Link>],
                seeAll: true,
                seeAllRoute: '/region'
            },
            {
                title: 'UNESCO Sites',
                data: [<Link>Historic Centre of Rome</Link>, <Link>Isole Eolie</Link>, <Link>Villa Adriana</Link>],
                seeAll: true,
                seeAllRoute: '/unesco'
            },
            {
                title: 'Castles',
                data: [<Link>Castel Nuovo</Link>, <Link>Castello Estense</Link>, <Link>Castello di Amorosa</Link>],
                seeAll: true,
                seeAllRoute: '/castles'
            }
        ]
    },
    {
        heading: 'Think about everything',
        para: 'All the information you need to plan a trip to Italy or to know the basics to best visit it',
        columns: [
            {
                title: '',
                data: [
                    <Link to={`/information/${'how-to-travel'}`} state={1}>Travel to Italy</Link>,
                    <Link to={`/information/${'currency'}`} state={2}>Currency and Payments</Link>,
                    <Link to={`/information/${'phone-&-web'}`} state={3}>Phone & Web</Link>
                ],
                seeAll: false,
            }
        ]
    }
];