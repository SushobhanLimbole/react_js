import Card from 'react-bootstrap/Card';
import './Cards.css';

export default function Cards() {
    return (
        <Card className='card' >
            <Card.Body>
                <Card.Title>
                    <div className='card-content'>
                        <h2>1</h2>
                        <h2>Chhava</h2>
                        <h2>Shivaji Sawant</h2>
                        <div className='card-buttons-container'>
                            <button className='card-button'>
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                            <button className='card-button'>
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}