import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Card } from "react-bootstrap";

export default function DeleteCards() {
    return (
        <Card className='card' >
            <Card.Body>
                <Card.Title>
                    <div className='card-content'>
                        <div className="checkbox"><Checkbox size="large" checked={true}  sx={{
                            color: "black",
                            transition: 'background-color 0.4s ease-in', // Set color to violet when enabled
                            '&:hover': {
                                backgroundColor: 'rgba(151, 79, 239 , 0.265)',
                            },
                            '&.Mui-checked': {
                                color: 'rgb(151, 79, 239)', // Keep color when checked
                                '&:hover': {
                                    backgroundColor: 'rgba(151, 79, 239 , 0.265)', // Remove hover background color
                                },
                                '&.Mui-focusVisible': {
                                    outline: '2px solid black', // Set outline to black when focused
                                },
                            },
                        }} /></div>
                        <h2>1</h2>
                        <h2>Chhava</h2>
                        <h2>Shivaji Sawant</h2>
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}