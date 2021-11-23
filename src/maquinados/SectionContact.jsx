import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class SectionContact extends Component {
    constructor(props) {
      super(props);
      this.state = {
          contact : {
              send: true,
              name:'',
              email:'',
              phone:'',
              subject:'',
              message:''
        },
        emailError : ''
      }
    }
    handleSubmit = () => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(this.state.contact.email)){
            this.setState({ emailError: 'Formato de correo incorrecto'})
        } else {
            this.setState({ emailError: ''})
            axios.post('/send.php',this.state.contact).then( response => {
                if(response.data.sent){
                    alert("¡Correo enviado, en breve nos contactaremos contigo!")
                    this.setState({contact : {
                        send: true,
                        name:'',
                        email:'',
                        phone:'',
                        subject:'',
                        message:''}})
                }
            })

        }
    }
    handleInputChange = e => {
        switch(e.target.name){
            case 'phone': if( e.target.value.length < 11 ) { this.setState({ contact : { ...this.state.contact, [e.target.name] : e.target.value }}) }
                break;
            default:
                this.setState({ contact : { ...this.state.contact, [e.target.name] : e.target.value }})
        }
    }
    render() {
        const { handleInputChange } = this
        const {contact, emailError} = this.state
        const {name, email, phone, subject, message} = contact
        return (
            <section className="main__contact" id="informacion">
                <div className="container__grid-contact">

                    <div className="container__ubicacion">
                        <div className="txt__ubicacion">
                            <div className="bx__ubicacion">
                                <h2>Datos de Contacto</h2>
                                <p>Ubicación</p>
                                <p>Privada Narcisos 2247</p>
                                <p>Lomas Terrabella 22203</p>
                                <p>Tel Oficina: (664) 880-3571</p>
                                <p>Cel: (663) 211-5423</p>
                            </div>

                            <div className="bx__ubicacion">
                                <p>Cel: (663) 211-5423 </p>
                                <p>Edgar Garduño</p>
                                <p>Privada Narcisos 2247</p>
                                <p>Lomas Terrabella 22203</p>
                                <p>Email: edgar.garduno@</p>
                            </div>

                            <div className="bx__ubicacion">
                                <p>Cel: (664) 669-4274</p>
                                <p>Emilio Garduño</p>
                                <p>Privada Narcisos 2247</p>
                                <p>Lomas Terrabella 22203</p>
                                <p>Email: emilio.garduno@</p>
                            </div>
                        </div>
                    </div>

                    <div className="container__form-text" id="contacto">
                        <div className="container__form-size">
                            <div className="txt__form">
                                <h2>ContactoB</h2>
                            </div>
                            <form

                                noValidate autoComplete="off">
                                <TextField
                                    required
                                    label="Nombre"
                                    variant="filled"
                                    className="input__text"
                                    size="small"
                                    id="filled-size-small"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    required
                                    size="small"
                                    id="filled-size-small"
                                    label="Correo"
                                    variant="filled"
                                    className="input__text"
                                    name="email"
                                    value={email}
                                    error={emailError !== '' }
                                    helperText={emailError}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    required
                                    size="small"
                                    id="filled-size-small"
                                    label="Teléfono"
                                    variant="filled"
                                    className="input__text"
                                    name="phone"
                                    maxLength="10"
                                    type="number"
                                    value={phone}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    required
                                    size="small"
                                    id="filled-size-small"
                                    label="Asunto"
                                    variant="filled"
                                    className="input__text"
                                    name="subject"
                                    value={subject}
                                    onChange={handleInputChange}
                                />
                                <textarea
                                    aria-label="maximum height"
                                    className="input__text-area"
                                    name="message"
                                    value={message}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    className="submit__btn"
                                    onClick={this.handleSubmit}
                                    disabled={ name === '' || email === '' || phone === '' || subject === '' || message === '' }
                                >
                                    Enviar
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}