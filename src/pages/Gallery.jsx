import React from 'react';
import Tableau from '../components/Tableau'
import Personne_1 from '../media/img/personne_1.jpg'
import Personne_2 from '../media/img/personne_2.jpg'
import Personne_3 from '../media/img/personne_3.jpg'

const Gallery = () => {
    return (
        <div className=" mx-auto container block md:block lg:flex justify-between my-16">
            <Tableau image={Personne_1} title="Zohaber" text="Lorem ipsum dolor sit amet, consectetur adip."/>
            <Tableau image={Personne_2} title="Nirvina" text="Corporis error veritatis sapiente in incidunt."/>
            <Tableau image={Personne_3} title="Siligom" text="Natus exercitationem reprehenderit amet."/>

        </div>
    );
};

export default Gallery;
