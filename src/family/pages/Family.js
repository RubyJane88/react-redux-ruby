import React, {useEffect} from 'react';
import FamilyForm from "../../shared/FamilyForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchFamily} from "../family-actions";

function Family() {
    const dispatch = useDispatch();
    const {family, isLoading} = useSelector( s => s.familyReducer);

    useEffect(() => {
        dispatch(fetchFamily())
    }, [dispatch]);

    return (
        <div>
            <h1> Our Family Tree </h1>
            <FamilyForm/>

            <ul>
                <h2> Loading...please wait</h2> :

            </ul>

        </div>
    )

}

export default Family
