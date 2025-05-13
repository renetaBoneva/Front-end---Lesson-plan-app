import { Link } from 'react-router-dom';
import './Error.css';

export function Error() {
    return <>
        <h2 className='errParagraph'>Something went wrong...</h2>
        <img src="errorPageImg.png" id="errorImg"/>
        <h2 className='errParagraph'>Go back to <Link to={`/`}>home page</Link></h2>
    </>;
}