import './style.css';
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function Unidade(){

    const [nome, setNome] = useState('')
    const [cpf_cnpj, setCpf_cnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [num_resid, setNum_resid] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        const dado ={
            nome:nome, 
            cpf_cnpj:cpf_cnpj, 
            telefone:telefone, 
            email:email, 
            end_cep:cep, 
            end_rua:rua, 
            end_bairro:bairro, 
            end_uf:estado, 
            end_cidade:cidade, 
            end_numero:num_resid, 
        }
    
        try {
          await fetch("http://localhost:8080/unidade/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
          },
            body: JSON.stringify(dado)
          })
          
          setNome('')
          setCpf_cnpj('')
          setTelefone('')
          setEmail('')
          setCep('')
          setRua('')
          setBairro('')
          setEstado('')
          setCidade('')
          setNum_resid('')

          return;
        } catch (error) {
            return console.log(error.message);
        }
    }
    return(
        <div className='c_unidade'>
            <Menu/>
            <div className='containerUnidade'>
                <h1 className='titulo'>Cadastro de Unidade</h1>
                <div className='cadastro'>
                    <form name='cadastroUnidades' onSubmit={handleSubmit}>
                        <div className='coluna'>
                            {/* configurar campos com utf8 */}
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='nome'
                                className='input'
                                type='text'
                                placeholder='Nome'
                                label="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                             <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='cpf_cnpj'
                                className='input'
                                type='text'
                                placeholder='CPF/CNPJ'
                                label="CPF/CNPJ"
                                value={cpf_cnpj}
                                onChange={(e) => setCpf_cnpj(e.target.value)}
                            />
                            {/* não mexi aqui */}
                            <NumberFormat 
                                format="(##) #####-####" 
                                id='telefone'
                                mask="_"
                                label="Telefone"
                                placeholder='Telefone/Celular'
                                value={telefone} 
                                onValueChange = { ( valores )  =>  { 
                                    const  {value}  =  valores ; 
                                    setTelefone ( value  ) ;                                 
                                } } 
                            />     
                        </div>

                        <div className='coluna'>
                            <TextField
                                variant="outlined"
                                // style={{zIndex: }}
                                className='input'
                                id='email'
                                type='text'
                                label="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='cep' 
                                className='input'
                                type='text'
                                placeholder='CEP'
                                label="CEP"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='rua'
                                className='input'
                                type='text'
                                placeholder='Rua'
                                label="Rua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </div>

                        <div className='coluna'>
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='bairro'
                                className='input'
                                type='text'
                                placeholder='Bairro'
                                label="Bairro"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='estado'
                                className='input'
                                type='text'
                                placeholder='Estado'
                                label="Estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            />
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='cidade'
                                className='input'
                                type='text'
                                placeholder='Cidade'
                                label="Cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                        </div>

                        <div className='coluna'>
                            <TextField
                                // style={{zIndex: }}
                                variant="outlined"
                                id='num_resid'
                                className='input'
                                type='text'
                                placeholder='N° Residencial/Empresarial'
                                label="N° Residencial/Empresarial"
                                value={num_resid}
                                onChange={(e) => setNum_resid(e.target.value)}
                            />
                        </div>

                        <div className="bt-container">
                            <button type="submit" className="cadastrar" id="botao_cad">ENVIAR</button>
                        </div>                                                  
                    </form>

                </div>
            </div>
            

        </div>
    )
};

export default Unidade