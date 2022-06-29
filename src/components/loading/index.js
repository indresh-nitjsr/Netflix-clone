import React from "react";
import {Spinner, Lockbody, Picture, ReleaseBody} from  './styles/loading';


export default function Loading( {src, ...restProps} ){
    return (
        <Spinner {...restProps}>
            <Lockbody/>
            <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
        </Spinner>
    )
}


Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}