import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Breadcrumb, Checkbox, GroupInput, NavLink } from '../components';
import { useForm } from '../hooks';
import { authState } from '../store';

export const Register = () => {
    const { form, post, bindForm, errors, reset, resetError } = useForm({ name : '', email: '', password: '', password_confirmation : '' });
    const setAuth = useSetRecoilState(authState)
    const register = async e => {
        e.preventDefault();
        post('register', {onSuccess : data => {
            setAuth(data)
        }});
    };
    useEffect(() => {
        window.addEventListener('responded', e => {
            console.log(e)
        })
    }, [])
    return (
        <>
            {/* Breadcrumb Section Begin */ }
            <Breadcrumb>
                <NavLink to="/"><i className="fa fa-home" /> Beranda</NavLink>
                <span>Daftar</span>
            </Breadcrumb>
            {/* Breadcrumb Form Section Begin */ }
            {/* Register Section Begin */ }
            <div className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-form">
                                <h2>Daftar</h2>
                                <form onSubmit={ register }>
                                    <GroupInput name="name" type="text" label="Nama" value={ form.name } onChange={ bindForm } error={errors.name} />
                                    <GroupInput name="email" type="email" label="Alamat Email" value={ form.email } onChange={ bindForm } error={errors.email} />
                                    <GroupInput name="password" type="password" label="Kata Sandi" value={ form.password } onChange={ bindForm } error={errors.password} />
                                    <GroupInput name="password_confirmation" type="password" label="Konfirmasi Kata Sandi" value={ form.password_confirmation } onChange={ bindForm } error={errors.password_confirmation} />
                                    <button type="submit" className="site-btn login-btn">Daftar</button>
                                </form>
                                <div className="switch-login">
                                    <Link to="/login" className="or-login">Atau masuk</Link>
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
