import React, { useState } from 'react';
import { auth } from "../firebaseconfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Handle successful sign-up (e.g., redirect to a dashboard)
           < Navigate to={"/account"}/>
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error(error);
        }
    };

    return (
        <section class="position-relative py-4 py-xl-5" >
            <div class="container position-relative">
                <div class="row mb-5">
                    <div class="col-md-8 col-xl-6 text-center mx-auto"></div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 col-xl-4">
                        <div class="card">
                            <div class="card-body text-center d-flex flex-column align-items-center">
                                <div class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">...</div>
                                <h2 class="font-weight-bold">Sign Up</h2>
                                <form method="post" onSubmit={handleSignUp}>
                                    <div class="mb-3">
                                        <input class="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-primary d-block w-100" type="submit">Log in</button>
                                    </div>
                                    <p class="text-muted">Or Sign In</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful sign-in (e.g., redirect to a dashboard)
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error(error);
        }
    };

    return (
        <section class="position-relative py-4 py-xl-5" >
            <div class="container position-relative">
                <div class="row mb-5">
                    <div class="col-md-8 col-xl-6 text-center mx-auto"></div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 col-xl-4">
                        <div class="card">
                            <div class="card-body text-center d-flex flex-column align-items-center">
                                <div class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">...</div>
                                <h2 class="font-weight-bold">Log In</h2>
                                <form method="post" onSubmit={handleSignIn}>
                                    <div class="mb-3">
                                        <input class="form-control" type="email" name="email" value={email} placeholder="Email"onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-primary d-block w-100" type="submit">Log in</button>
                                    </div>
                                    <p class="text-muted">Or Create An Account</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { SignUp, SignIn, };