import './style.css'
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function ContratoAgua(){
    const [concessionaria, setConcessionaria] = useState('')        //marcar como novo no cadastro 
    const [cnpj_concessionaria, setCnpj_concessionaria] = useState('') //marcar como novo no cadastro
    const [nome_cliente, setNome_cliente] = useState('')
    const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState('')    
    const [codigo_cliente, setCodigo_cliente] = useState('')
    const [pde_rgi, setPde_rgi] = useState('')
    const [hidrometro, setHidrometro] = useState('')
    const [tipo_ligacao, setTipo_ligacao] = useState('')
    const [tipo_fornecimento, setTipo_fornecimento] = useState('')
    const [n_fornecimento, setN_fornecimento] = useState('')
    const [valor_medio, setValor_medio] = useState('')
    const [nome_consumo, setNome_consumo] = useState('')
    const [cpf_cnpj_ci, setCpf_cnpj_ci] = useState('')
    const [cep_consumo, setCep_consumo] = useState('')
    const [rua_consumo, setRua_consumo] = useState('')
    const [bairro_consumo, setBairro_consumo] = useState('')
    const [cidade_consumo, setCidade_consumo] = useState('')
    const [estado_consumo, setEstado_consumo] = useState('')
    const [nResidencial_empresarial, setNResidencial_empresarial] = useState('')
    const [concessionariaId, setConcessionariaId] = useState('')
    const [unidadeId, setUnidadeId] = useState('')
    
    async function buscaCep(){
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep_consumo}/json/`)
            const dados = await response.json()
            setRua_consumo(dados.logradouro)
            setBairro_consumo(dados.bairro)
            setCidade_consumo(dados.localidade)
            setEstado_consumo(dados.uf)
            
        } catch (error) {
            return console.log(error.message);
        }
    }

    async function buscaUnidade(){
        try {
            const response = await fetch(`http://localhost:8080/unidades/${cpf_cnpj_cliente}`)
            
            const dados = await response.json()
            setNome_cliente(dados.nome)
            setUnidadeId(dados.id)
            console.log(dados)

        } catch (error) {
            return console.log(error.message);
        }
    }
    async function buscaConcessionaria(){
        try {
            const response = await fetch(`http://localhost:8080/concessionaria/${cnpj_concessionaria}`)
            const dados = await response.json()
            setConcessionaria(dados.nome)
            setConcessionariaId(dados.id)
            console.log(dados)

        } catch (error) {
            return console.log(error.message);
        }
    }

    async function handleSubmit(event){
        event.preventDefault()
        const dado ={
            unidade_nome:nome_cliente,
            concessionaria:concessionaria, 
            concessionaria_cnpj:cnpj_concessionaria,
            unidade_cnpj:cpf_cnpj_cliente, 
            codigo_cliente:codigo_cliente, 
            pde_rgi:pde_rgi, 
            hidrometro:hidrometro, 
            tipo_ligacao:tipo_ligacao, 
            tipo_fornecimento:tipo_fornecimento, 
            n_fornecimento:n_fornecimento, 
            valor_medio:valor_medio, 
            local_nome:nome_consumo, 
            local_cnpj:cpf_cnpj_ci, 
            local_cep:cep_consumo, 
            local_rua:rua_consumo, 
            local_bairro:bairro_consumo, 
            local_cidade:cidade_consumo, 
            local_estado:estado_consumo, 
            local_numero:nResidencial_empresarial,
            contrato_concessionaria_id:{id:concessionariaId},
            contrato_unidade_id: {id:unidadeId} 
        }

        try {
            await fetch("http://localhost:8080/contratoagua/cadastro", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
            },
              body: JSON.stringify(dado)
            })
            setConcessionaria('')
            setCnpj_concessionaria('')
            setNome_cliente('')
            setCpf_cnpj_cliente('')
            setCodigo_cliente('')
            setPde_rgi('')
            setHidrometro('')
            setTipo_ligacao('')
            setTipo_fornecimento('')
            setN_fornecimento('')
            setValor_medio('')
            setNome_consumo('')
            setCpf_cnpj_ci('')
            setCep_consumo('')
            setRua_consumo('')
            setBairro_consumo('')
            setCidade_consumo('')
            setEstado_consumo('')
            setNResidencial_empresarial('')
            return;
        } catch (error) {
            return console.log(error.message);
        }
    }
        
    
    return(
        <div className="c_contrato_agua">  
            <Menu/>
            <div className='containerAgua'>
                <h1 className="titulo">Cadastro de Contrato de Água</h1>
                <div className= "cadastro">
                    <form name="cadastro_contrato_agua" onSubmit={handleSubmit}>
                        <div className='coluna'>
                            <TextField
                                id="cnpj_concessionaria" 
                                className='input'
                                type="text" 
                                required={true}
                                label="CNPJ Concessionaria" 
                                placeholder="CNPJ Concessionaria" 
                                value={cnpj_concessionaria}
                                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                                onBlur = {buscaConcessionaria}
                                variant="outlined" 
                            />
                            <TextField
                                id="concessionaria" 
                                className='input'
                                type="text"
                                label="Concessionaria"  
                                disable
                                value={concessionaria}
                                variant="outlined"  
                            /> 
                            <TextField
                                id="cnpj_cpf_cliente"
                                className='input' 
                                type="text"
                                required={true} 
                                label="CNPJ/CPF Unidade" 
                                placeholder="CNPJ/CPF Unidade" 
                                value={cpf_cnpj_cliente}
                                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                                onBlur = {buscaUnidade}
                                variant="outlined" 
                            />
                            
                        </div>
                         
                        <div className='coluna'>
                            <TextField
                                id="nome_cliente" 
                                className='input'
                                type="text" 
                                label="Nome Cliente" 
                                disable
                                value={nome_cliente}
                                variant="outlined" 
                            />
                            <TextField
                                id="codigo_cliente"
                                className='input' 
                                type="text" 
                                required={true}
                                label="Cod.Cliente" 
                                placeholder="Cod.Cliente" 
                                value={codigo_cliente}
                                onChange={(e) => setCodigo_cliente(e.target.value)}
                                variant="outlined" 
                            />
                            <TextField
                                id="pde_rgi"       
                                className='input'    
                                type="text" 
                                required={true}
                                label="PDE/RGI"
                                placeholder="PDE/RGI"
                                value={pde_rgi}
                                onChange={(e) => setPde_rgi(e.target.value)} 
                                variant="outlined" 
                            />                            
                        </div> 

                        <div className='coluna'>
                            <TextField
                                id="hidrometro"
                                className='input'        
                                type="text" 
                                required={true}
                                label="Hidrometro" 
                                placeholder="Hidrometro"  
                                value={hidrometro}
                                onChange={(e) => setHidrometro(e.target.value)}
                                variant="outlined" 
                            />
                            <TextField
                                id="tipo_ligacao"
                                className='input'  
                                type="text" 
                                required={true}
                                label="Tipo de Ligação" 
                                placeholder="Tipo de Ligação" 
                                value={tipo_ligacao}
                                onChange={(e) => setTipo_ligacao(e.target.value)}
                                variant="outlined" 
                            />
                            <TextField
                                id="Tipo_fornecimento" 
                                className='input' 
                                type="text" 
                                required={true}
                                label="Tipo de Fornecimento"
                                placeholder="Tipo de Fornecimento"
                                value={tipo_fornecimento}
                                onChange={(e) => setTipo_fornecimento(e.target.value)} 
                                variant="outlined" 
                            />                          
                        </div> 

                        <div className='coluna'>
                            <TextField
                                id="n_fornecimento" 
                                className='input' 
                                type="text" 
                                required={true}
                                label="Numero de Fornecimento"
                                placeholder="Numero de Fornecimento"
                                value={n_fornecimento}
                                onChange={(e) => setN_fornecimento(e.target.value)} 
                                variant="outlined"
                            />
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="valor_medio" 
                                className='input' 
                                required={true} 
                                floatValue = {true}
                                value={valor_medio}
                                label="Valor Medio (R$)"
                                placeholder="Valor Medio (R$)"
                                customInput={TextField} 
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setValor_medio ( floatValue  ) ;                                 
                                } }
                                variant="outlined"
                            />
                        </div>

                            <p>Local de Consumo</p>
                            
                        <div className='coluna'>                              
                            <TextField
                                id="nome_consumo" 
                                className='input'
                                type="text" 
                                required={true}
                                label="Nome Consumidor"
                                placeholder="Nome Consumidor"
                                value={nome_consumo}
                                onChange={(e) => setNome_consumo(e.target.value)}
                                variant="outlined" 
                            />
                            <TextField
                                id="cpf_cnpj_ci" 
                                className='input'
                                type="text" 
                                required={true} 
                                label="CPF/CNPJ/CI"
                                placeholder="CPF/CNPJ/CI"
                                value={cpf_cnpj_ci}
                                onChange={(e) => setCpf_cnpj_ci(e.target.value)} 
                                variant="outlined"  
                            />
                           <TextField
                                id="cep_consumo" 
                                className='input'
                                type="text" 
                                required={true} 
                                label="CEP"
                                placeholder="CEP"
                                value={cep_consumo}
                                onChange={e=>setCep_consumo(e.target.value)}
                                onBlur = {buscaCep}
                                variant="outlined"
                            />
                        </div> 

                        <div className='coluna'>                           
                            <TextField
                                id="rua_consumo" 
                                className='input'
                                type="text" 
                                label="Rua"
                                disabled
                                value={rua_consumo}
                                variant="outlined"
                            />
                            <TextField
                                id="bairro_consumo" 
                                className='input'
                                type="text" 
                                label="Bairro"
                                disabled
                                value={bairro_consumo}
                                variant="outlined"
                            />
                            <TextField
                                id="cidade_consumo" 
                                className='input'
                                type="text" 
                                label="Cidade"
                                disabled
                                value={cidade_consumo}
                                variant="outlined" 
                            />
                        </div> 
                        <div className='coluna'> 
                            <TextField
                                id="estado_consumo" 
                                className='input'
                                type="text" 
                                label="Estado"
                                disabled
                                value={estado_consumo}
                                variant="outlined"
                            />                          
                            <TextField
                                id="nResidencial_Empresarial"
                                className='input'    
                                type="text" 
                                required={true}
                                label="Nª Residencial/Empresarial"
                                placeholder="Nª Residencial/Empresarial" 
                                value={nResidencial_empresarial}
                                onChange={(e) => setNResidencial_empresarial(e.target.value)}
                                variant="outlined"
                            />
                        </div> 
                               
                        <div className="bt-container">
                            <button type="submit" className="cadastrar" id="botao_cad">ENVIAR</button>
                            {/* <p>Cadastro realizado com exito</p> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContratoAgua