import './style.css';
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

    

    async function buscaCep(){
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dados = await response.json()
            setRua(dados.logradouro)
            setBairro(dados.bairro)
            setCidade(dados.localidade)
            setEstado(dados.uf)
            
        } catch (error) {
            return console.log(error.message);
        }
    }
    
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
                            <TextField
                                id='cnpj'
                                type='text'
                                required={true}
                                placeholder='XX.XXX.XXX/XXXX-XX'
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                                label="CNPJ"
                                variant="outlined"
                                className='input'
                            />
                             <TextField
                                id='nome'
                                type='text'
                                required={true}
                                placeholder='Nome Concessionaria'
                                value={nome}
                                label="Nome"
                                variant="outlined"
                                className='input'
                                onChange={(e) => setNome(e.target.value)}
                            /> 
                            <FormControl variant="outlined" className='select input'>
                                <InputLabel id="demo-simple-select-outlined-label">Segmento</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={segmento}
                                onChange={(e) => setSegmento(e.target.value)}
                                label="Segmento"
                                >
                                <MenuItem value={'Água'}>Água</MenuItem>
                                <MenuItem value={'Esgoto'}>Esgoto</MenuItem>
                                <MenuItem value={'Água/Esgoto'}>Água/Esgoto</MenuItem>
                                <MenuItem value={'Eletrica'}>Eletrica</MenuItem>
                                </Select>
                            </FormControl>                       
                        </div>
                        <div className='coluna'>
                            <TextField
                                id='cep'
                                required={true}
                                variant="outlined"
                                className='input'
                                type='text'
                                placeholder='CEP'
                                label="CEP"
                                value={cep}
                                onChange={e=>setCep(e.target.value)}
                                onBlur = {buscaCep}
                            />
                             <TextField
                                id='rua'
                                variant="outlined"
                                label="Rua"
                                className='input'
                                type='text'
                                disabled
                                value={rua}
                                
                            />
                             <TextField
                                id='bairro'
                                variant="outlined"
                                className='input'
                                type='text'
                                label="Bairro"
                                disabled
                                value={bairro}
                                
                            />
                        </div>
                        <div className='coluna'>
                            <TextField
                                id='cidade'
                                variant="outlined"
                                className='input'
                                type='text'
                                label="Cidade"
                                disabled                  
                                value={cidade}
                                
                            />
                             <TextField
                                id='estado'
                                variant="outlined"
                                className='input'
                                type='text'
                                label="Estado"
                                disabled
                                value={estado}
                            />
                             <TextField
                                id='num_resid'
                                required={true}
                                variant="outlined"
                                className='input'
                                type='string'
                                label="N° Residencial/Empresarial"
                                placeholder='N° Residencial/Empresarial'
                                value={num_resid}
                                onChange={(e) => setNum_resid(e.target.value)}
                            />
                        </div>
                        <div className='coluna'>
                            <NumberFormat 
                                format="(##) #####-####" 
                                variant="outlined"
                                required={true}
                                className='input'
                                id='telefone'
                                mask="_"
                                label="Telefone/Celular"
                                customInput={TextField}
                                placeholder='(99) 99999-9999'
                                value={telefone} 
                                onValueChange = { ( valores )  =>  { 
                                    const  {value}  =  valores ; 
                                    setTelefone ( value  ) ;                                 
                                } }
                            />
                             <TextField
                                id='inscricao_est'
                                variant="outlined"
                                className='input'
                                required={true}
                                type='text'
                                label="Inscrição Estadual"
                                placeholder='XXX.XXX.XXX.XXX'
                                value={inscricao_est}
                                onChange={(e) => setInscricao_est(e.target.value)}
                            />
                             <TextField
                                id='inscricao_unic'
                                variant="outlined"
                                className='input'
                                required={true}
                                type='text'
                                label="Inscrição Única Regime Especial Processo"
                                placeholder='Inscrição Única Regime Especial Processo'
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