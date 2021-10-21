import React from 'react'
import Logo from '../../Assets/images/logo.png'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} width={110} alt="logo"></img>
                    </a>
                    <div className="col-6 col-xs-2 d-flex">
                        <div class="input-group">
                                <input class="form-control border-end-0 border" type="search" placeholder="Kitap veya Yazar Ara" id="example-search-input" />
                                <span class="input-group-append">
                                    <button class="btn btn-outline-secondary bg-white border-start-0 border ms-n5" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <a href="/"><i class="fas fa-user fs-4"></i> </a>
                </div>
            </nav>
        </div>
    )
}
