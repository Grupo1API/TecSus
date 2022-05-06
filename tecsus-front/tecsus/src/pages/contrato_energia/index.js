import './style.css'
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function ContratoEnergia(){
    const [concessionaria, setConcessionaria] = useState('')        //marcar como novo no cadastro 
    const [cnpj_concessionaria, setCnpj_concessionaria] = useState('') //marcar como novo no cadastro
    const [nome_cliente, setNome_cliente] = useState('')
    const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState('')
    const [codigo_identificador, setCodigo_identificador] = useState('')
    const [codigo_fiscal, setCodigo_fiscal] = useState('')
    const [grupo_sub, setGrupo_sub] = useState('')
    const [classe_sub, setClase_sub] = useState('')
    const [tp_fornecimento, setTp_fornecimento] = useState('')
    const [modalidade_taf, setModalidade_taf] = useState('')
    const [tensao_nominal, setTensao_nominal] = useState('')
    const [roteiro_leitura, setRoteiro_leitura] = useState('')
    const [medidor, setMedidor] = useState('')
    const [valor_medio, setValor_medio] = useState('')
    const [end_eletrico, setEnd_eletrico] = useState('')
    const [cpf_cnpj_ci, setCpf_cnpj_ci] = useState('')
    const [cep_consumo, setCep_consumo] = useState('')
    const [rua_consumo, setRua_consumo] = useState('')
    const [bairro_consumo, setBairro_consumo] = useState('')
    const [cidade_consumo, setCidade_consumo] = useState('')
    const [estado_consumo, setEstado_consumo] = useState('')
    const [nResidencial_empresarial, setNResidencial_empresarial] = useState('')
    
    async function handleSubmit(event){
        event.preventDefault()
        const dado ={
            concessionaria:concessionaria,          
            concessionaria_cnpj:cnpj_concessionaria,  
            nome_unidade:nome_cliente, 
            cpf_cnpj:cpf_cnpj_cliente, 
            codigo_identificador:codigo_identificador, 
            codigo_fiscal_operacao:codigo_fiscal, 
            grupo_subgrupo:grupo_sub, 
            classe_subclasse:classe_sub, 
            tp_fornecimento:tp_fornecimento, 
            modalidade_tarifaria:modalidade_taf, 
            tensao_nominal:tensao_nominal, 
            roteiro_leitura:roteiro_leitura, 
            num_medidor:medidor, 
            valor_medio:valor_medio, 
            endereco_eletrico:end_eletrico, 
            cnpj_cpf_ci:cpf_cnpj_ci, 
            local_cep:cep_consumo, 
            local_rua:rua_consumo, 
            local_bairro:bairro_consumo, 
            local_cidade:cidade_consumo, 
            local_estado:estado_consumo, 
            local_numero:nResidencial_empresarial, 
        }

        try {
            await fetch("http://localhost:8080/contratoenergia/cadastro", {
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
            setCodigo_identificador('')
            setCodigo_fiscal('')
            setGrupo_sub('')
            setClase_sub('')
            setTp_fornecimento('')
            setModalidade_taf('')
            setTensao_nominal('')
            setRoteiro_leitura('')
            setMedidor('')
            setValor_medio('')
            setEnd_eletrico('')
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
        <div className="c_contrato_energia">  
            <Menu/>
            <div className='containerEnergia'>
                <h1 className="titulo">Cadastro de Contrato de Energia</h1>
                <div className= "cadastro">
                    <form name="cadastro_contrato_Energia" onSubmit={handleSubmit}>
                        <div className='coluna'>
                            <TextField
                                id="concess ionaria" 
                                className='input'
                                type='text'
                                required={true}
                                label="Concessionária"
                                placeholder="Concessionaria"
                                value={concessionaria}
                                onChange={(e) => setConcessionaria(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                id="cnpj_concessionaria" 
                                className='input'
                                type='text'
                                required={true} 
                                label="CNPJ Concessionária"
                                placeholder="CNPJ Concessionaria" 
                                value={cnpj_concessionaria}
                                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                id="nome_cliente" 
                                className='input'
                                type="text" 
                                required={true}
                                label="Nome Cliente"
                                placeholder="Nome Cliente" 
                                value={nome_cliente}
                                onChange={(e) => setNome_cliente(e.target.value)}
                                variant="outlined"
                            />
                        </div> 

                        <div className='coluna'>
                            <TextField
                                id="cnpj_cpf_cliente"
                                className='input'
                                type="text" 
                                required={true}
                                label="CNPJ/CPF cliente"
                                placeholder="CNPJ/CPF cliente" 
                                value={cpf_cnpj_cliente}
                                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                id="cnpj_cpf_cliente"
                                className='input'
                                type="text" 
                                required={true}
                                label="CNPJ/CPF cliente"
                                placeholder="CNPJ/CPF cliente" 
                                value={cpf_cnpj_cliente}
                                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                id="codigo_fiscal"  
                                className='input'                            
                                type="text"
                                required={true} 
                                label="Código Fiscal Operação"
                                placeholder="Código Fiscal Operação"
                                value={codigo_fiscal}
                                onChange={(e) => setCodigo_fiscal(e.target.value)} 
                                variant="outlined"
                            />
                        </div> 

                        <div className='coluna'>
                            <TextField
                                id="grupo_sub" 
                                className='input'                             
                                type="text" 
                                label="Grupo/Subgrupo" 
                                placeholder="Grupo/Subgrupo"  
                                value={grupo_sub}
                                onChange={(e) => setGrupo_sub(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                id="classe_sub"  
                                className='input'   
                                type="text" 
                                label="Classe/Subclasse"
                                placeholder="Classe/Subclasse" 
                                value={classe_sub}
                                onChange={(e) => setClase_sub(e.target.value)} 
                                variant="outlined"
                            />
                            <TextField
                                id="tp_fornecimento" 
                                className='input' 
                                type="text" 
                                required={true}
                                label="TP Fornecimento"
                                placeholder="TP Fornecimento"
                                value={tp_fornecimento}
                                onChange={(e) => setTp_fornecimento(e.target.value)} 
                                variant="outlined" 
                            />
                        </div>

                        <div className='coluna'>
                            <TextField
                                id="modalidade_taf" 
                                className='input' 
                                type="text" 
                                label="Modalidade Tarifaria"
                                placeholder="Modalidade Tarifaria"
                                value={modalidade_taf}
                                onChange={(e) => setModalidade_taf(e.target.value)}  
                                variant="outlined" 
                            />
                            <TextField
                                id="tensao_nominal"
                                className='input'  
                                type="text" 
                                label="Tensão Nominal"
                                placeholder="Tensão Nominal"
                                value={tensao_nominal}
                                onChange={(e) => setTensao_nominal(e.target.value)} 
                                variant="outlined"   
                            />
                            <TextField
                                id="roteiro_leitura" 
                                className='input' 
                                type="text" 
                                label="Roteiro de Leitura"
                                placeholder="Roteiro de Leitura"
                                value={roteiro_leitura}
                                onChange={(e) => setRoteiro_leitura(e.target.value)} 
                                variant="outlined"  
                            />
                        </div>

                        <div className='coluna'>
                            <TextField
                                id="medidor" 
                                className='input' 
                                type="text" 
                                label="Nª Medidor"
                                placeholder="Nª Medidor"
                                value={medidor}
                                onChange={(e) => setMedidor(e.target.value)}  
                                variant="outlined"
                            />
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="valor_medio" 
                                className='input'  
                                floatValue = {true}
                                value={valor_medio}
                                required={true}
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
                                id="end_eletrico" 
                                className='input' 
                                type="text" 
                                required={true}
                                label="End.Eletrico"
                                placeholder="End.Eletrico"
                                value={end_eletrico}
                                onChange={(e) => setEnd_eletrico(e.target.value)}   
                                variant="outlined"    
                            />                                
                            <TextField
                                id="Cpf_cnpj_ci" 
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
                                onChange={(e) => setCep_consumo(e.target.value)}
                                variant="outlined"   
                            /> 
                        </div> 

                        <div className='coluna'>
                            <TextField
                                id="rua_consumo" 
                                className='input'
                                type="text" 
                                label="Rua"
                                placeholder="Rua"
                                value={rua_consumo}
                                onChange={(e) => setRua_consumo(e.target.value)} 
                                variant="outlined"
                            />
                            <TextField
                                id="bairro_consumo" 
                                className='input'
                                type="text"
                                label="Bairro"
                                placeholder="Bairro"
                                value={bairro_consumo}
                                onChange={(e) => setBairro_consumo(e.target.value)} 
                                variant="outlined"
                            />
                            <TextField
                                id="cidade_consumo" 
                                className='input'
                                type="text" 
                                label="Cidade"
                                placeholder="Cidade"
                                value={cidade_consumo}
                                onChange={(e) => setCidade_consumo(e.target.value)}
                                variant="outlined"  
                            />
                        </div> 
                        
                        <div className='coluna'>    
                            <TextField
                                id="estado_consumo" 
                                className='input'
                                type="text" 
                                label="Estado"
                                placeholder="Estado"
                                value={estado_consumo}
                                onChange={(e) => setEstado_consumo(e.target.value)}
                                variant="outlined"   
                            />
                            <TextField
                                id="nResidencial_Empresarial"  
                                className='input'                          
                                type="text" 
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

export default ContratoEnergia
