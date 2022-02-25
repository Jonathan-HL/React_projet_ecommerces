/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Panier from '../pages/Panier';
import aboutImg from '../assets/images/about.jpg'
import { NavLink } from 'react-router-dom';

function Articles(props) {
    console.log(props);
    const [title, setTitle] = useState('PRODUCT');
    const [filter, setfilter] = useState('Filter');


    const inputValue = e => {
        props.inputValue(e);
    };
    const submit = e => {
        props.submit(e);
    };
    const submitValeur = () => {
        if (props.articles.length === 0) {
            console.log('vide');
            setfilter('Veuilez faire un choix');
            // setArticles(nouveauArticles)
        }
        else {
            setfilter('Filter');
        }
    };
    const addCard = id => {
        props.click(id);
    };
    const changeLike = e => {
        props.like(e);
    };
    const imgEnvoie = id=> {
        props.zoom(id)
    }

    const fullpower= id =>{
        props.fullpower(id)
    }
    const Rage = id =>{
        props.Rage(id)
    }

    const Eveille=id=>{
        props.Eveille(id)
    }

    const Godz =id=>{
        props.Godz(id)
    }

    



    return (
        <div>
            <div className="">
                <img className='about-img w-100' src={aboutImg} alt="" />
                <h1 className='text-product'>{title}</h1>
                <span className="text-light">New Arrival Women Collection</span>
            </div>
            <div className='d-flex justify-content-between'>
                <h3 className='m-2'>Categories</h3>
                <h4>Nombre de productcs search: {props.articles.length} all</h4>
            </div>
            <div className='d-flex justify-content-between'>
                <h4>Nombre de productcs soldé: {props.solde} all</h4>
            </div>
            <div className="grandeDiv container ">
                <div className="listeProduct">
                    <ul class="list-group">
                        <li class="list-group-item"><a className='nav-link' onClick={e=>{fullpower(e)}} href="/">Full-Power</a></li>
                        <li class="list-group-item"><a className='nav-link' onClick={e=>{Rage(e)}} href="/">Rage</a></li>
                        <li class="list-group-item"><a className='nav-link' onClick={e=>{Eveille(e)}} href="/">Eveille</a></li>
                        <li class="list-group-item"><a className='nav-link' onClick={e=>{Godz(e)}} href="/">Godz</a></li>

                    </ul>
                    <h4>{filter}</h4>
                    <div className="search">
                        <form onSubmit={e => { submit(e); } }>
                            <label className="d-flex">
                                <input type="text" onInput={e => inputValue(e.target.value)} name="name" />
                            </label>
                            <button onClick={submitValeur}>
                                <i class="fas fa-search"></i>
                            </button>
                        </form>                    </div>

                </div>
                <div className='row'>
                    {props.articles.map(el => {
                        return (
                            <div className="col-xs-12 col-lg-4 map mx-3 ">
                                <div className='position-relative card'>
                                    <img src={el.liens} alt="" />
                                    <span className={el.toggle ? "new" : el.toggle == null ? "" : "sale"}>
                                        {el.statut}
                                    </span>
                                    <NavLink className="navlink" exact to="/zoom"  >
                                        <button className ="btn btn-success px-5" onClick={imgEnvoie} value={el.id}>Avoir plus d'infos</button>
                                         </NavLink>

                                    <button onClick={addCard} value={el.id} className='achatbtn btn btn-primary m-1'>Add to Cart</button>
                                    <button onClick={changeLike} value={el.id} className='btn btn-danger m-1' id="like"> ♥ </button>
                                </div>
                                <h3>{el.nom}</h3>
                                <span style={{ color: el.ancienPrix > 0 ? "red" : "black" }}> <span className='solde'>{el.ancienPrix}</span> ${el.prix}</span>
                            </div>);
                    })}
                </div>
                <div>

                </div>
            </div>


        </div>
    );
}

export default Articles;
