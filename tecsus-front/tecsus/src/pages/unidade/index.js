import './style.css';
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';

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
                            <input
                                id='nome'
                                type='text'
                                placeholder='Nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                             <input
                                id='cpf_cnpj'
                                type='text'
                                placeholder='CPF/CNPJ'
                                value={cpf_cnpj}
                                onChange={(e) => setCpf_cnpj(e.target.value)}
                            />
                            <NumberFormat 
                                format="(##) #####-####" 
                                id='telefone'
                                mask="_"
                                placeholder='Telefone/Celular'
                                value={telefone} 
                                onValueChange = { ( valores )  =>  { 
                                    const  {value}  =  valores ; 
                                    setTelefone ( value  ) ;                                 
                                } }
                            />
                             
                        </div>
                        <div className='coluna'>
                            <input
                                id='email'
                                type='text'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                id='cep'
                                type='text'
                                placeholder='CEP'
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                             <input
                                id='rua'
                                type='text'
                                placeholder='Rua'
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                             
                        </div>
                        <div className='coluna'>
                            <input
                                id='bairro'
                                type='text'
                                placeholder='Bairro'
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />
                            <input
                                id='estado'
                                type='text'
                                placeholder='Estado'
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            />
                             <input
                                id='cidade'
                                type='text'
                                placeholder='Cidade'
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                             
                        </div>
                        <div className='coluna'>
                            <input
                                id='num_resid'
                                type='text'
                                placeholder='N° Residencial/Empresarial'
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