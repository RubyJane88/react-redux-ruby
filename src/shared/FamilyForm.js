import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux";
import {addFamily} from


function FamilyForm() {
    const dispatch = useDispatch();
    const [newFamily, setNewFamily] = useState({});

    const handleInputChange = (event) => {
        const familyForm = {...newFamily};
        const {id, value} = event.currentTarget;
        familyFromForm[id] = value;
        setNewFamily(familyFromForm);


    };

        const handleSubmit = (e) => {
            e.preventDefault(true);
            dispatch(addFamily(newFamily))
        };

    return(
        <div>

            <form onSubmit={handleSubmit}>
                <input placeholder={'First Name'} id={'firstName'} onChange={handleInputChange} />
                <input placeholder={'Middle Name'} id={'middleName'} onChange={handleInputChange} />
                <input placeholder={'Last Name'} id={'lastName'} onChange={handleInputChange} />
                <input placeholder={'Birth Place'} id={'birthPlace'} onChange={handleInputChange}/>
                <Button variant="primary" > Add</Button>
            </form>

        </div>
    )
}

export default FamilyForm
