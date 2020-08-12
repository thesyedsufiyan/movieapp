import React from 'react';
import '../dropdown/Dropdown.component.css'

export default function Dropdown() {
    // const [dropdown, setDropdown] = useState('');

    // const MOVIE_DATA = 'http://www.omdbapi.com/?s=man&type=series&apikey=3ec28278';

    // useEffect(() => {
    //     fetch('MOVIE_DATA')
    //         .then(response = response.json())
    //         .then(jsonResponse => {
    //             setDropdown(Response.search)
    //         });
    // }, []);

    // const dropdownData = () => {

    // }


    return (
        <div>
            <select className='select' >
                <option value='all'> -select-</option>
                <option value='all'> all</option>
                <option value='all'> series</option>
                <option value='all'> movie</option>
                <option value='all'> episode</option>
            </select>
        </div>
    )
}
// all-http://www.omdbapi.com/?s=man&apikey=3ec28278
//  movie -http://www.omdbapi.com/?s=man&type=movie&apikey=3ec28278
