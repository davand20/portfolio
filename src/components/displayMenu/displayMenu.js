import { useEffect, useRef, useState } from 'react'
import './displayMenu.css'

export default function DisplayMenu({ info, title }) {

    const [selected, setSelected] = useState(0);
    const items = useRef(info);
    const prevSelected = useRef(0);
    const displayMenuDiv = useRef(document.createElement('div'));

    useEffect(() =>{
            displayMenuDiv.current.getElementsByClassName("displayMenu__item__wrapper")[prevSelected.current].classList.remove("displayMenu__item__wrapper-selected");
            displayMenuDiv.current.getElementsByClassName("displayMenu__item__wrapper")[selected].classList.add("displayMenu__item__wrapper-selected");
            prevSelected.current = selected;
    },[selected])

    function DisplayMenuItem({ item, index }) {
        return (
            <div className='displayMenu__item__wrapper'>
                <div className='displayMenu__item' onClick={() => setSelected(index)}>
                    <h2 className='displayMenu__item__name'>{item.name}</h2>
                    <p className='displayMenu__item__position'>{item.position}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='displayMenu' ref={displayMenuDiv}>
            <div className='displayMenu__items'>
                {items.current.map((item, index) => <DisplayMenuItem item={item} index={index} key={index} />)}
            </div>
            <div className='displayMenu__details'>
                <p className='displayMenu__details__title'>{title}</p>
                <ul className='displayMenu__details__list'>
                    {items.current[selected].details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
            </div>
        </div>
    )
}