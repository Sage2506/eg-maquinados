import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SectionContact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        mail:'',
        phone:'',
        subject:'',
        msg:''
      }
    }
    handleSubmit = () => {
        console.log('form submit:' , this.state)
    }
    handleInputChange = e => {
        this.setState({ [e.target.name] : e.target.value})
    }
    render() {
        const { handleInputChange } = this
        const {name, mail, phone, subject, msg} = this.state
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
                                    name="mail"
                                    value={mail}
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
                                    name="msg"
                                    value={msg}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    className="submit__btn"
                                    onClick={this.handleSubmit}
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