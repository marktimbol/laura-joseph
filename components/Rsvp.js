import React, { Component } from 'react';
import Heading from './Heading';
import axios from 'axios';
import swal from 'sweetalert';

class Rsvp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            attending: '',
            message: ''
        }
    }

    _onSubmit(e) {
        console.log('this._onSubmitRsvp');
        e.preventDefault();

        let api_url = 'https://api.theamores.info';
        axios.post(`${api_url}/rsvp`, {
            name: this.state.name,
            email: this.state.email,
            attending: this.state.attending,
            message: this.state.message
        }).then(response => {
            swal({
                title: 'The Amores',
                text: 'Your RSVP was submitted.',
                icon: 'success'
            });            
        }).catch(error => {
            swal({
                title: 'The Amores',
                text: 'Oops. Something went wrong. Please try again later.',
                icon: 'error'
            });
        })
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="rsvp h-auto md:h-64 bg-grey flex items-center justify-center">
                    <div className="w-5/6 md:w-2/3 mx-auto bg-white p-8 md:p-8" style={{ opacity: .9 }}>
                        <Heading alignCenter>
                            Be Our Guest
                        </Heading>
                        <p className="text-center text-lg mt-6">Guests are limited by the number indicated on your invitation.</p>
                        <p className="text-center text-lg mt-2">We will be pleased to receive your response on 15th of December 2018.</p>

                        <form onSubmit={e => this._onSubmit(e)}>
                            <div className="flex flex-col md:flex-row my-12">
                                <div className="flex-1 mr-0 md:mr-2">
                                    <div className="form-group mb-6">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="text-lg w-full border-b px-2 py-2 outline-none" 
                                            placeholder="Full Name"
                                            onChange={e => this.setState({ name: e.target.value })}
                                        />
                                    </div> 
                                    <div className="form-group mb-6">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="text-lg w-full border-b px-2 py-2 outline-none" 
                                            placeholder="Email"
                                            onChange={e => this.setState({ email: e.target.value })}
                                        />
                                    </div>   
                                    <div className="form-group">
                                        <label className="text-lg text-grey-darkest">You are attending?</label>
                                        <div className="mt-4 flex md:block flex-col md:flex-row">
                                            <label className="mr-0 md:mr-4 mb-4">
                                                <input type="radio" name="attending" className="mr-0 md:mr-2 text-lg" onClick={e => this.setState({ attending: 'Accept with pleasure' })} /> 
                                                Accept with pleasure
                                            </label>
                                            <label className="mr-0 md:mr-4">
                                                <input type="radio" name="attending" className="mr-0 md:mr-2 text-lg" onClick={e => this.setState({ attending: 'Decline with regret' })}/> 
                                                Decline with regret
                                            </label>
                                        </div>
                                    </div>                                                                                   
                                </div>
                                <div className="flex-1 ml-0 md:ml-2 mt-4 md:mt-0">
                                    <textarea name="message" className="text-lg w-full h-full border px-2 py-2 outline-none" placeholder="Your Message" onChange={e => this.setState({ message: e.target.value })}></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button 
                                    className="text-lg uppercase tracking-wide bg-black hover:bg-grey-darkest px-2 py-4 text-white w-64"
                                    onClick={e => this._onSubmit(e)}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <style jsx>{`
                    .rsvp {
                        height: 700px;
                        background: url('/static/images/rsvp-bg.jpg');
                        background-size: cover;
                    }
                `}</style>
            </React.Fragment>            
        )
    }
}

export default Rsvp;