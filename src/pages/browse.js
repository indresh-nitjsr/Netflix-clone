import React from 'react';
import { BrowseContainer } from '../containers/browse';
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-filter';



export default function Browse() {
    //we need to series and films
    const {series} = useContent('series');
    const {films} = useContent('films');

    //we needs slides
    const slides = selectionFilter({series, films});

    //pass it to the browser container


    return <BrowseContainer slides={slides}/>;
}