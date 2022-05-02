import './style.css';
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';

function Concessionaria(){

    const [cnpj, setCnpj] = useState('')
    const [nome, setNome] = useState('')
    const [segmento, setSegmento] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [num_resid, setNum_resid] = useState('')
    const [telefone, setTelefone] = useState('')
    const [inscricao_est, setInscricao_est] = useState('')
    const [inscricao_unic, setInscricao_unic] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        const dado ={
            cnpj:cnpj,
            nome:nome,
            segmento:segmento,
            cep:cep,
            rua:rua,
            bairro:bairro,
            cidade:cidade,
            uf:estado,
            numero:num_resid,
            telefone:telefone,
            inscricao_estadual:inscricao_est,
            inscricao_especial:inscricao_unic
        }
    
        try {
          await fetch("http://localhost:8080/concessionaria/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
          },
            body: JSON.stringify(dado)
          })
          
          setCnpj('')
          setNome('')
          setSegmento('')
          setCep('')
          setRua('')
          setBairro('')
          setCidade('')
          setEstado('')
          setNum_resid('')
          setTelefone('')
          setInscricao_est('')
          setInscricao_unic('')
          
          return;
        } catch (error) {
            return console.log(error.message);
        }
    }
    return(
        <div className='c_concessionaria'>
            <Menu/>
            <div className='containerConcessionaria'>
                <h1 className='titulo'>Cadastro de Concessionaria</h1>
                <div className='cadastro'>
                    <form name='cadastroConcessionaria' onSubmit={handleSubmit}>
                        <div className='coluna'>
                            <input
                                id='cnpj'
                                type='text'
                                placeholder='CNPJ'
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                            />
                             <input
                                id='nome'
                                type='text'
                                placeholder='Nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                             <input
                                id='segmento'
                                type='text'
                                placeholder='Segmento'
                                value={segmento}
                                onChange={(e) => setSegmento(e.target.value)}
                            />                        
                        </div>
                        <div className='coluna'>
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
                             <input
                                id='bairro'
                                type='text'
                                placeholder='Bairro'
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />
                        </div>
                        <div className='coluna'>
                            <input
                                id='cidade'
                                type='text'
                                placeholder='Cidade'
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                             <input
                                id='estado'
                                type='text'
                                placeholder='Estado'
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            />
                             <input
                                id='num_resid'
                                type='string'
                                placeholder='N° Residencial/Empresarial'
                                value={num_resid}
                                onChange={(e) => setNum_resid(e.target.value)}
                            />
                        </div>
                        <div className='coluna'>
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
                             <input
                                id='inscricao_est'
                                type='text'
                                placeholder='Inscrição Estadual'
                                value={inscricao_est}
                                onChange={(e) => setInscricao_est(e.target.value)}
                            />
                             <input
                                id='inscricao_unic'
                                type='text'
                                placeholder='Insc. Uni. Reg. Esp. Proc..'
                                value={inscricao_unic}
                                onChange={(e) => setInscricao_unic(e.target.value)}
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

export default Concessionaria