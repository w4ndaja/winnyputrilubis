import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Checkbox, GroupInput, NavLink, Spinner } from '../components';
import { useAuth, useForm } from '../hooks';

export const Login = () => {
    const { form, bindForm, errors, reset, post, loading } = useForm({ email: '', password: '' });
    const _useAuth = useAuth();
    const login = async e => {
        e.preventDefault();
        post('/login', {
            onSuccess: _useAuth.login
        });
    };
    return (
        <>
            {/* Breadcrumb Section Begin */ }
            <Breadcrumb>
                <NavLink to="/"><i className="fa fa-home" /> Beranda</NavLink>
                <span>Masuk</span>
            </Breadcrumb>
            {/* Breadcrumb Form Section Begin */ }
            {/* Register Section Begin */ }
            <div className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-form">
                                <h2>Masuk</h2>
                                <form onSubmit={ login }>
                                    <GroupInput label="Email *" type="email" name="email" value={ form.email } onChange={ bindForm } error={ errors.email } />
                                    <GroupInput label="Password *" name="password" type="password" value={ form.password } onChange={ bindForm } error={ errors.password } />
                                    <div className="group-input gi-check">
                                        <div className="gi-more">
                                            <Checkbox label="Ingat masuk" name="remember" onChange={ bindForm } />
                                            <Link to='/forgot-password' className="forget-pass">Lupa password</Link>
                                        </div>
                                    </div>
                                    <button type="submit" className="site-btn login-btn" disabled={ loading }>{ loading ? <Spinner width={ 21 } /> : 'Masuk' }</button>
                                </form>
                                <div className="switch-login">
                                    <Link to="/register" className="or-login">Atau daftar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Register Form Section End */ }
        </>
    );
};
