import React from 'react'
import Logo from '../../Assets/images/logo.png'
import { ChildNav } from './ChildNav'

export const Navbar = (props) => {


    if(!props){
        console.log(props);
    }

    
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} width={110} alt="logo"></img>
                    </a>
                    <div className="col-6 col-xs-2 d-flex">
                        <div className="input-group">
                                <input className="form-control border-end-0 border" type="search" placeholder="Kitap veya Yazar Ara" id="example-search-input" />
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary bg-white border-start-0 border ms-n5" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <a href="/"><i className="fas fa-user fs-4"></i> </a>
                </div>
            </nav>
            <ChildNav></ChildNav>
        </div>
    )
}
