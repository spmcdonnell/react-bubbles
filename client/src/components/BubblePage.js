import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
    const [colorList, setColorList] = useState([]);
    // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property

    useEffect(() => {
        axiosWithAuth()
            .get(`http://localhost:5000/api/colors`)
            .then(res => {
                setColorList(res.data);
            })
            .catch(err => {
                console.log('Tried to GET at /api/colors but what happened was:', err.response);
            });
    }, []);

    function updateColors(action, colorData) {
        const filterColors = colorList.filter(color => color.id !== colorData.id);

        if (action === 'edit') {
            const updatedColors = [...filterColors, colorData];

            updatedColors.sort(function(a, b) {
                return parseFloat(a.id) - parseFloat(b.id);
            });

            setColorList(updatedColors);
        } else {
            setColorList(filterColors);
        }
    }

    return (
        <>
            <ColorList colors={colorList} updateColors={updateColors} />
            <Bubbles colors={colorList} />
        </>
    );
};

export default BubblePage;
