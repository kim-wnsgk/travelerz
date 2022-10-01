import { getDefaultNormalizer } from '@testing-library/react';
import { useEffect } from 'react';

function Rank() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', appkey: 'PzN3Al1pUW607%2Bp8PljZ%2Bn6Ydai8ebJW88Jk5ADyk6jMfyBm1ScxHcm6nyMshehMTIjFS61RU%2Bg63znowzzvPw%3D%3D' }
    };

    const getData = async () => {
        fetch('/locationBasedList', options)
            //.then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>rank</h1>
        </div>
    );
}

export default Rank;