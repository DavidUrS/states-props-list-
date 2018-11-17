import React from 'react';
import './Animals.css';

const Animals = (props)=> {
    //const Animals = ({animals})=> { ES LO MISMO
    const {animals} = props;
    const listAnimals = animals.map(animal=>{
        return(
            <div className={'Animals'} key={animal.id}>
                <p>name: {animal.name} -- type: {animal.type}</p>
            </div>
        )
    })

    return(
        <div className={'Animals-list'}>
            {listAnimals}
        </div>
    )
}

export default Animals;