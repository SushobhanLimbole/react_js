import { allCastlesSlides } from '../ALLCastles/CastlesSlides';
import { unescoSlides } from '../ALLUNESCO/UnescoSlides';
import abruzzo from '../assets/Italy/Abruzzo.jpg';
import aostaValley from '../assets/states data/aosta.jpg';
import apulia from '../assets/states data/apulia.jpg';
import basilicata from '../assets/states data/basilicata.jpg';
import calabria from '../assets/states data/calabria.jpg';
import campania from '../assets/states data/campania.jpg';
import emilia from '../assets/states data/emilia.jpg';
import friuli from '../assets/states data/fruilia.jpg';
import lazio from '../assets/states data/lazio.jpg';
import liguria from '../assets/states data/liguria.jpg';
import lombardy from '../assets/states data/lombardy.jpg';
import marche from '../assets/states data/marche.jpg';
import molise from '../assets/states data/molise_.jpg';
import piedmont from '../assets/states data/piedmon_.jpg';
import sardinia from '../assets/states data/sardinia.jpg';
import sicily from '../assets/states data/sicily_.jpg';
import southTyrol from '../assets/states data/south.jpg';
import trentino from '../assets/states data/trentino.jpg';
import tuscany from '../assets/states data/tuscany.jpg';
import umbria from '../assets/states data/umbria.jpeg';
import veneto from '../assets/states data/veneto_2.jpg';


export const statesInfo = [
    {
        image: abruzzo,
        name: 'Abruzzo',
        desc: "Known for its diverse landscapes including mountains, national parks, and Adriatic coastline, offering outdoor activities and historic towns like L'Aquila",
        banner: "Experience rugged mountain landscapes, charming medieval villages, and the Adriatic coast's pristine beaches.",
        title: "Natural Wonders and Historic Villages: Exploring Abruzzo",
        longDesc: "Abruzzo, a region of rugged mountains and picturesque villages, captivates with its natural beauty and rich traditions. The majestic Apennines provide a stunning backdrop for outdoor adventures such as skiing, hiking, and wildlife spotting in national parks like Gran Sasso and Majella. Historic towns like L'Aquila and Sulmona charm with their medieval architecture and vibrant festivals. The Adriatic coast offers sandy beaches and crystal-clear waters for seaside relaxation. Abruzzo's culinary scene delights with hearty dishes like arrosticini and saffron-infused specialties. Whether exploring ancient castles or enjoying the tranquility of mountain landscapes, Abruzzo promises an authentic and enchanting experience.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[0]]
            }
        ],
    },
    {
        image: aostaValley,
        name: 'Aosta Valley',
        desc: "Located in the Alps, known for its skiing resorts, scenic valleys, and Mont Blanc views, with a mix of French and Italian cultures",
        banner: "Explore alpine wonders and medieval charm in Italy's smallest region, nestled in the heart of the Alps.",
        title: "Alpine Charms and Cultural Treasures: Exploring the Aosta Valley",
        longDesc: "Nestled in the heart of the Alps, the Aosta Valley is a picturesque region that offers a harmonious blend of stunning natural landscapes and rich cultural heritage. Towering peaks, including Europe's highest, Mont Blanc, provide a dramatic backdrop for outdoor adventures such as hiking, skiing, and mountaineering. Amidst this breathtaking scenery, charming medieval villages like Courmayeur and Aosta beckon with their cobblestone streets, ancient Roman ruins, and well-preserved castles. ",
        content: [],
    },
    {
        image: apulia,
        name: 'Apulia',
        desc: "Famous for its whitewashed trulli houses in Alberobello, olive groves, coastal towns like Bari and Lecce, and the historic port city of Brindisi",
        banner: "Delight in sun-soaked landscapes, whitewashed hill towns, and the unique trulli houses of Italy's southeastern tip.",
        title: "Sun-Kissed Shores and Historic Charm: Discovering Apulia",
        longDesc: "Apulia, a region of sun-kissed shores and historic charm, captivates with its scenic landscapes and rich cultural heritage. The picturesque town of Alberobello, with its unique trulli houses, offers a glimpse into traditional architecture. The baroque splendor of Lecce, known as the 'Florence of the South,' impresses with its ornate churches and historic buildings. Apulia's coastline, with its pristine beaches and crystal-clear waters, provides a perfect setting for relaxation and water sports. The region's culinary delights, featuring dishes like orecchiette and burrata, reflect its agricultural abundance. Whether exploring ancient olive groves or enjoying seaside leisure, Apulia promises a delightful and enriching escape.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[13],unescoSlides[14]]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[1]]
            }
        ],
    },
    {
        image: basilicata,
        name: 'Basilicata',
        desc: "Home to the ancient city of Matera with its cave dwellings (Sassi), rugged landscapes of Lucanian Dolomites, and the Pollino National Park",
        banner: "Discover ancient cave dwellings, dramatic mountain scenery, and the timeless allure of Matera's Sassi districts.",
        title: "Ancient Cave Dwellings and Scenic Beauty: Discovering Basilicata",
        longDesc: "Basilicata, a region of ancient cave dwellings and scenic beauty, offers a unique and captivating journey through history and nature. Matera, a UNESCO World Heritage site, impresses with its Sassi cave dwellings and stunning rock churches. The picturesque town of Maratea, nestled between mountains and the Tyrrhenian Sea, provides breathtaking views and tranquil beaches. Basilicata's rugged landscapes and national parks, such as Pollino and Appennino Lucano, invite outdoor enthusiasts for hiking and wildlife spotting. The region's culinary scene delights with hearty dishes like peperoni cruschi and lamb specialties. From exploring ancient caves to enjoying scenic vistas, Basilicata promises a memorable and enriching experience.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[7]]
            }
        ],
    },
    {
        image: calabria,
        name: 'Calabria',
        desc: "Known for its rugged mountains, extensive coastline along the Ionian and Tyrrhenian Seas, and historic towns like Reggio Calabria and Tropea",
        banner: "Relax on pristine beaches, explore ancient Greek ruins, and savor traditional Calabrian cuisine in Italy's sun-drenched south.",
        title: "Coastal Beauty and Ancient Heritage: Exploring Calabria",
        longDesc: "Calabria, a region of dramatic coastlines and ancient heritage, offers a captivating blend of scenic beauty and rich traditions. The stunning beaches of Tropea and Capo Vaticano, with their turquoise waters and white sands, provide idyllic settings for relaxation and water sports. The ancient town of Reggio Calabria, home to the famous Riace Bronzes, showcases a wealth of archaeological treasures. Calabria's mountainous interior, with its national parks and picturesque villages, invites outdoor adventures and cultural exploration. The region's culinary delights, featuring dishes like 'nduja and swordfish, reflect its vibrant food culture. Whether exploring ancient ruins or enjoying coastal leisure, Calabria promises a diverse and enchanting experience.",
        content: [
            {
                nav: 'Castles',
                slides: [allCastlesSlides[20]]
            }
        ],
    },
    {
        image: campania,
        name: 'Campania',
        desc: "Famous for Naples, the Amalfi Coast, Pompeii, and Mount Vesuvius; rich in history, art, and UNESCO sites like the Royal Palace of Caserta",
        banner: " From vibrant Naples to the stunning Amalfi Coast and historic Pompeii, dive into southern Italy's vibrant culture and history.",
        title: "Coastal Splendor and Ancient Ruins: Discovering Campania",
        longDesc: "Campania, a region of stunning coastal beauty and rich history, offers a captivating blend of scenic landscapes and cultural treasures. Naples, the vibrant capital, entices with its historic center, bustling markets, and delectable cuisine, including pizza and sfogliatella. The Amalfi Coast, with its dramatic cliffs and charming towns like Positano and Amalfi, provides a breathtaking backdrop for leisurely drives and seaside relaxation. The ancient ruins of Pompeii and Herculaneum offer a fascinating glimpse into Roman life. The island of Capri, with its azure waters and glamorous allure, invites luxury escapes. From exploring ancient sites to indulging in coastal beauty, Campania promises an unforgettable journey.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[10],unescoSlides[17],unescoSlides[22],unescoSlides[23],unescoSlides[29],]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[11],allCastlesSlides[2],allCastlesSlides[5]]
            }
        ],
    },
    {
        image: emilia,
        name: 'Emilia-Romagna',
        desc: "Renowned for its culinary delights (Parmesan cheese, balsamic vinegar), historic cities (Bologna, Ravenna, Modena), and motor racing (Ferrari)",
        banner: " Savor Italy's gastronomic heartland with world-renowned cuisine like Bolognese pasta and Parmigiano Reggiano cheese.",
        title: "Gastronomic Delights and Cultural Treasures: Exploring Emilia-Romagna",
        longDesc: "Emilia-Romagna, a region renowned for its culinary excellence and cultural heritage, invites visitors to savor its rich flavors and historic charm. Bologna, the vibrant capital, is famed for its medieval towers, porticoes, and delectable cuisine, including mortadella, tortellini, and tagliatelle al ragù. The city of Parma offers a taste of Italy's culinary treasures with its world-famous Parmigiano Reggiano and Prosciutto di Parma. Ravenna's stunning mosaics and Ferrara's Renaissance architecture reflect the region's artistic wealth. The coastal towns of Rimini and Riccione provide lively beach escapes. Whether indulging in gourmet delights or exploring historic sites, Emilia-Romagna offers a feast for the senses.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[12],unescoSlides[15],unescoSlides[21],unescoSlides[57],unescoSlides[58],]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[14],allCastlesSlides[16],allCastlesSlides[18],allCastlesSlides[6]]
            }
        ],
    },
    {
        image: friuli,
        name: 'Friuli-Venezia Giulia',
        desc: "Known for its alpine scenery, Adriatic beaches, Trieste's cultural heritage, and the UNESCO-listed vineyard landscapes of Collio",
        banner: "Delight in a blend of Italian, Slovenian, and Austrian influences amidst stunning Adriatic coastline and lush countryside.",
        title: "Crossroads of Cultures and Natural Wonders: Discovering Friuli Venezia Giulia",
        longDesc: "Friuli Venezia Giulia, a region at the crossroads of cultures and landscapes, offers a fascinating blend of history, nature, and gastronomy. Trieste, with its Habsburg architecture and vibrant café culture, reflects its Austro-Hungarian past. The region's diverse landscapes range from the rugged Julian Alps to the pristine beaches of the Adriatic coast. Wine enthusiasts will enjoy the renowned vineyards of the Collio region, known for its exceptional white wines. The rich culinary heritage, featuring dishes like frico and jota, showcases a fusion of Italian, Austrian, and Slovenian influences. From exploring ancient Roman ruins in Aquileia to relaxing in seaside resorts, Friuli Venezia Giulia promises a multifaceted and enriching experience.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[27],unescoSlides[52]]
            }
        ],
    },
    {
        image: lazio,
        name: 'Lazio',
        desc: "Home to Rome, Italy's capital, and Vatican City; rich in ancient Roman ruins (Colosseum, Roman Forum), Renaissance art, and Mediterranean coastline",
        banner: "Marvel at ancient Rome's iconic landmarks, Vatican City's treasures, and the scenic countryside of central Italy.",
        title: "Eternal City and Scenic Countryside: Discovering Lazio",
        longDesc: "Lazio, a region of historic grandeur and scenic beauty, offers a captivating blend of ancient ruins, vibrant cities, and picturesque landscapes. Rome, the Eternal City, dazzles with iconic landmarks such as the Colosseum, Vatican City, and the Trevi Fountain. Beyond the bustling capital, the serene countryside reveals charming towns like Tivoli, known for its stunning villas and gardens, and Viterbo, with its medieval walls and thermal baths. The coastal towns of Ostia and Sperlonga provide relaxing seaside escapes. Lazio's rich culinary heritage, featuring dishes like cacio e pepe and porchetta, delights food enthusiasts. Whether exploring Rome's ancient wonders or enjoying rural tranquility, Lazio promises a journey through history and beauty.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[1],unescoSlides[30],unescoSlides[38],unescoSlides[34],]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[0],allCastlesSlides[9]]
            },
        ],
    },
    {
        image: liguria,
        name: 'Liguria',
        desc: "Famous for the Italian Riviera with charming towns like Cinque Terre, Genoa's maritime history, and the beautiful Portofino peninsula",
        banner: "Discover the enchanting Italian Riviera, where colorful villages cling to rugged cliffs above the sparkling Ligurian Sea.",
        title: "Coastal Beauty and Culinary Delights: Exploring Liguria",
        longDesc: "Liguria, with its stunning coastline and vibrant culture, offers an irresistible blend of scenic beauty and culinary delights. The picturesque Cinque Terre, with its colorful villages perched on rugged cliffs, is a highlight for travelers seeking breathtaking views and hiking trails. Genoa, the region's capital, boasts a rich maritime history and the largest medieval old town in Europe. Ligurian cuisine, famous for pesto, focaccia, and seafood dishes, delights food enthusiasts. The elegant resort towns of Portofino and Santa Margherita Ligure provide luxurious escapes. Whether exploring historic Genoa or soaking up the sun on the Riviera, Liguria promises a captivating coastal experience.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[20],unescoSlides[40]]
            }
        ],
    },
    {
        image: lombardy,
        name: 'Lombardy',
        desc: "Italy's financial and fashion capital, Milan, lakes like Como and Garda, the art city of Bergamo, and cultural sites like Mantua and Cremona",
        banner: "Experience the bustling fashion capital of Milan and serene lakeside retreats in Italy's economic powerhouse",
        title: "Urban Sophistication and Natural Beauty: Unveiling Lombardy",
        longDesc: "Lombardy, a region of dynamic cities and serene landscapes, seamlessly blends urban sophistication with natural beauty. Milan, the fashion and financial capital, dazzles with its high-end shopping, the Gothic masterpiece of the Duomo, and Leonardo da Vinci's 'The Last Supper.' Beyond the city, Lake Como and Lake Garda offer idyllic retreats with their crystal-clear waters and charming lakeside towns. The Bergamo Alps and Valtellina valleys invite outdoor enthusiasts for skiing and hiking adventures. Lombardy's diverse culinary scene, featuring risotto, ossobuco, and world-famous cheeses, ensures a delightful gastronomic journey. From cosmopolitan Milan to tranquil lakes, Lombardy captivates with its multifaceted allure.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[2],unescoSlides[11],unescoSlides[41],unescoSlides[42]]
            }
        ],
    },
    {
        image: marche,
        name: 'Marche',
        desc: "Known for its hilltop towns, Renaissance art in Urbino, coastline with sandy beaches, and natural parks like Monte Conero and Sibillini Mountains",
        banner: "Explore a lesser-known gem boasting pristine beaches, historic towns, and Renaissance art along the Adriatic coast",
        title: "Coastal Beauty and Artistic Heritage: Discovering Marche",
        longDesc: "Marche, a region of scenic coastal beauty and artistic heritage, offers a delightful blend of seaside charm and cultural treasures. The Adriatic coast, with its sandy beaches and crystal-clear waters, provides a perfect setting for relaxation and water sports. The historic city of Urbino, a UNESCO World Heritage site, showcases Renaissance splendor with its Ducal Palace and artistic masterpieces. The picturesque hill towns of Ascoli Piceno and Macerata captivate with their medieval architecture and vibrant festivals. Marche's rolling hills and fertile valleys produce exquisite wines and olive oils, adding to its culinary allure. From exploring ancient fortresses to enjoying seaside leisure, Marche promises a diverse and enchanting experience.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[28]]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[17]]
            }
        ],
    },
    {
        image: molise,
        name: 'Molise',
        desc: "A region of pristine nature, medieval villages like Campobasso and Termoli, agricultural traditions, and the Molise National Park",
        banner: "Uncover Italy's best-kept secret with quaint villages, untouched nature reserves, and a taste of authentic rural life",
        title: "Untouched Beauty and Timeless Traditions: Discovering Molise",
        longDesc: "Molise, a hidden gem of untouched beauty and timeless traditions, offers a serene escape with its unspoiled landscapes and rich cultural heritage. The region's rolling hills and lush forests provide a picturesque setting for outdoor activities such as hiking and cycling. Historic towns like Campobasso and Isernia showcase medieval charm and vibrant festivals. Molise's coastline, with its pristine beaches and clear waters, offers a peaceful retreat. The region's culinary delights, featuring dishes like cavatelli and pampanella, reflect its agricultural roots. From exploring ancient ruins to savoring traditional cuisine, Molise promises an authentic and tranquil journey through Italy's lesser-known treasures.",
        content: [],
    },
    {
        image: piedmont,
        name: 'Piedmont',
        desc: "Famous for the Alps, the Shroud of Turin, gourmet cuisine (Barolo wine, truffles), elegant Turin, and historic towns like Asti and Alba",
        banner: "Indulge in culinary delights and scenic vineyards in this region famed for its truffles and Barolo wine",
        title: "Elegance and Gastronomy: Discovering Piedmont",
        longDesc: "Piedmont, a region of refined elegance and rich traditions, captivates visitors with its rolling vineyards, historic palaces, and culinary excellence. The city of Turin, with its grand squares and the Mole Antonelliana, offers a glimpse into Italy's royal past. Wine lovers are drawn to the renowned vineyards of Barolo and Barbaresco, while food enthusiasts savor the region's truffles, chocolates, and robust cuisine. Scenic drives through the Langhe and Monferrato hills reveal picturesque villages and stunning landscapes. Whether indulging in a gourmet meal or exploring the opulent residences of the House of Savoy, Piedmont offers a sophisticated and flavorful escape.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[18],unescoSlides[36],unescoSlides[49],unescoSlides[53],]
            }
        ],
    },
    {
        image: sardinia,
        name: 'Sardinia',
        desc: " Known for its stunning beaches, rugged interior, prehistoric Nuraghe structures, and cities like Cagliari and Alghero",
        banner: "Escape to turquoise waters, rugged coastlines, and Bronze Age ruins on Italy's second-largest island known for its unique traditions",
        title: "Pristine Beaches and Ancient Wonders: Discovering Sardinia",
        longDesc: "Sardinia, a region of pristine beaches and ancient wonders, offers a captivating blend of natural beauty and rich history. The Costa Smeralda, with its crystal-clear waters and luxurious resorts, provides a perfect setting for seaside relaxation. The ancient Nuragic civilization left behind fascinating archaeological sites, such as the Su Nuraxi di Barumini. Sardinia's rugged landscapes and national parks, such as Gennargentu and Asinara, invite outdoor adventures and wildlife spotting. The region's culinary delights, featuring dishes like porceddu and pane carasau, reflect its agricultural abundance. Whether exploring ancient ruins or enjoying coastal leisure, Sardinia promises an unforgettable and enriching escape.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[26]]
            }
        ],
    },
    {
        image: sicily,
        name: 'Sicily',
        desc: "Italy's largest island with diverse attractions: Mount Etna, Greek temples in Agrigento, Baroque cities like Palermo and Catania, and beaches.",
        banner: " From Mount Etna's volcanic landscapes to Palermo's bustling markets and ancient Greek temples, Sicily offers a mosaic of history and natural beauty",
        title: "Island Splendor and Cultural Riches: Discovering Sicily",
        longDesc: "Sicily, a region of island splendor and cultural riches, captivates with its diverse landscapes and rich history. The ancient city of Palermo dazzles with its Arab-Norman architecture and bustling markets. The Valley of the Temples in Agrigento offers a fascinating glimpse into ancient Greek civilization. Mount Etna, Europe's highest and most active volcano, provides thrilling adventures and stunning vistas. Sicily's charming towns, such as Taormina and Syracuse, offer a blend of historic charm and coastal beauty. The region's culinary delights, featuring dishes like arancini and cannoli, reflect its vibrant food culture. From exploring ancient ruins to enjoying island leisure, Sicily promises a captivating and diverse journey.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[23],unescoSlides[25],unescoSlides[32],unescoSlides[35],unescoSlides[39],unescoSlides[48],unescoSlides[56],]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[19]]
            },
        ],
    },
    {
        image: southTyrol,
        name: 'South Tyrol',
        desc: "South Tyrol, nestled in the Italian Alps, is characterized by its stunning mountain scenery and rich cultural heritage blending Italian and Austrian traditions. ",
        banner: "Experience a blend of Austrian and Italian cultures amid the stunning Dolomite mountains, perfect for outdoor adventures and Alpine relaxation",
        title: "Alpine Serenity and Adventure: Discovering South Tyrol",
        longDesc: "South Tyrol, nestled in the heart of the Dolomites, is a paradise for outdoor enthusiasts and cultural explorers alike. Bolzano, its capital, blends Austrian and Italian influences seen in its architecture and cuisine. The charming town of Merano is known for its spa resorts and botanical gardens. The Dolomites offer year-round activities such as skiing, hiking, and mountaineering amid breathtaking alpine scenery. South Tyrolean cuisine delights with hearty dumplings, speck ham, and flavorful apple strudel. Whether exploring medieval castles or enjoying wellness retreats, South Tyrol invites visitors to experience its alpine charm and cultural diversity.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[43]]
            }
        ],
    },
    {
        image: trentino,
        name: 'Trentino',
        desc: "A region of contrasts with the Dolomites, German-speaking towns like Bolzano, Alpine lakes, and ski resorts",
        banner: "Immerse yourself in Alpine beauty and Tyrolean culture in this region known for its dramatic mountains and charming villages",
        title: "Alpine Splendor and Cultural Harmony: Exploring Trentino-Alto Adige/Südtirol",
        longDesc: "Trentino-Alto Adige/Südtirol, a region of dramatic alpine beauty and rich cultural diversity, offers a unique blend of Italian and Austrian influences. The majestic Dolomites provide a spectacular backdrop for outdoor activities such as skiing, hiking, and climbing. Picturesque towns like Bolzano and Trento showcase a harmonious mix of medieval and modern architecture. The region's culinary scene delights with hearty dishes, fine wines, and delectable pastries, reflecting its dual heritage. Scenic drives through the vineyards and orchards of South Tyrol reveal breathtaking landscapes. Whether savoring traditional Tyrolean cuisine or exploring historic castles, Trentino-Alto Adige/Südtirol promises an enchanting alpine adventure.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[44]]
            }
        ],
    },
    {
        image: tuscany,
        name: 'Tuscany',
        desc: "Famous for Florence's Renaissance art, Pisa's Leaning Tower, medieval towns like Siena and San Gimignano, and vineyards of Chianti",
        banner: "Bask in the Renaissance splendor of Florence, rolling vineyards of Chianti, and the timeless beauty of its hilltop towns",
        title: "Renaissance Splendor and Rolling Hills: Discovering Tuscany",
        longDesc: "Tuscany, a region of timeless beauty and cultural richness, captivates with its rolling hills, historic cities, and artistic heritage. Florence, the cradle of the Renaissance, dazzles with masterpieces like Michelangelo's David and the Uffizi Gallery. The medieval city of Siena charms with its Gothic architecture and the famous Palio horse race. The picturesque countryside, dotted with vineyards and olive groves, invites leisurely drives and wine tastings in Chianti. The towns of Pisa, with its iconic Leaning Tower, and Lucca, with its well-preserved city walls, offer further exploration. From the artistic treasures of Florence to the serene landscapes of Val d'Orcia, Tuscany promises an unforgettable journey through history and nature.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[3],unescoSlides[5],unescoSlides[6],unescoSlides[9],unescoSlides[16],unescoSlides[37],unescoSlides[47],]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[12],allCastlesSlides[13],allCastlesSlides[7],]
            }
        ],
    },
    {
        image: umbria,
        name: 'Umbria',
        desc: "Known as Italy's 'green heart' , with hill towns like Perugia and Assisi (St. Francis' birthplace), art treasures, and scenic landscapes",
        banner: "Discover the 'Green Heart of Italy,' dotted with medieval hill towns, verdant valleys, and spiritual centers like Assisi",
        title: "Green Heart of Italy: Exploring Umbria",
        longDesc: "Umbria, known as the green heart of Italy, enchants with its lush landscapes, medieval hill towns, and rich cultural heritage. Perugia, the region's capital, boasts a vibrant arts scene and historic charm, while Assisi, the birthplace of St. Francis, draws pilgrims with its stunning basilica and spiritual atmosphere. The picturesque town of Orvieto, perched on a volcanic plateau, impresses with its magnificent cathedral and underground caves. Umbria's rolling hills and verdant valleys provide a serene backdrop for hiking, cycling, and culinary adventures. From savoring traditional dishes like truffle pasta to exploring ancient Etruscan sites, Umbria offers a tranquil and enriching escape.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[33]]
            }
        ],
    },
    {
        image: veneto,
        name: 'Veneto',
        desc: "Venice's canals and St. Mark's Basilica, Verona's Roman amphitheater, Palladian villas, Dolomites' skiing, and Prosecco wine region.",
        banner: "From romantic Venice to historic Verona, uncover art, culture, and the scenic landscapes of Italy's northeast",
        title: "Venetian Splendor and Scenic Vistas: Discovering Veneto",
        longDesc: "Veneto, a region of unparalleled beauty and cultural wealth, entices visitors with its iconic cities and serene landscapes. Venice, the jewel of the Adriatic, enchants with its canals, St. Mark's Basilica, and the opulent Doge's Palace. Verona, the city of Romeo and Juliet, offers a romantic atmosphere with its well-preserved Roman Arena and charming piazzas. The picturesque hills of the Prosecco wine region invite wine lovers for delightful tastings. From the artistic treasures of Padua to the stunning landscapes of the Dolomites, Veneto presents a diverse array of experiences. Whether cruising along Venetian canals or exploring historic towns, Veneto captivates with its timeless charm.",
        content: [
            {
                nav: 'UNESCO Sites',
                slides: [unescoSlides[4],unescoSlides[8],unescoSlides[19],unescoSlides[31],unescoSlides[52],unescoSlides[54],unescoSlides[56],]
            },
            {
                nav: 'Castles',
                slides: [allCastlesSlides[3],allCastlesSlides[15],allCastlesSlides[4],allCastlesSlides[9],allCastlesSlides[10],allCastlesSlides[15],]
            }
        ],
    }
];