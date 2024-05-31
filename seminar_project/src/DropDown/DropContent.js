import { Link } from "react-router-dom";
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
                seeAllRoute: <Link to={`/unesco}`}>See all</Link>
            },
            {
                title: 'UNESCO Sites',
                data: [<Link>Historic Centre of Rome</Link>, <Link>Isole Eolie</Link>, <Link>Villa Adriana</Link>],
                seeAll: true,
                seeAllRoute: <Link to='/unesco' >See all</Link>
            },
            {
                title: 'Castles',
                data: [<Link>Castel Nuovo</Link>, <Link>Castello Estense</Link>, <Link>Castello di Amorosa</Link>],
                seeAll: true,
                seeAllRoute: <Link to='/castles' >See all</Link>
            }
        ]
    }
];