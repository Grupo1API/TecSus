import React, { useState } from 'react';
import './style.css'
import Menu from '../../components/menu'
import NumberFormat from 'react-number-format';

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
                            <input 
                                id="concessionaria" 
                                type="text"
                                required={true} 
                                placeholder="Concessionaria" 
                                value={concessionaria}
                                onChange={(e) => setConcessionaria(e.target.value)}
                            />
                            <input 
                                id="cnpj_concessionaria" 
                                type="text" 
                                required={true}
                                placeholder="CNPJ Concessionaria" 
                                value={cnpj_concessionaria}
                                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                            />
                            <input 
                                id="nome_cliente" 
                                type="text" 
                                required={true}
                                placeholder="Nome Cliente" 
                                value={nome_cliente}
                                onChange={(e) => setNome_cliente(e.target.value)}
                            />
                            
                        </div> 
                        <div className='coluna'>
                            <input 
                                id="cnpj_cpf_cliente" 
                                type="text"
                                required={true} 
                                placeholder="CNPJ/CPF cliente" 
                                value={cpf_cnpj_cliente}
                                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                            />
                            <input 
                                id="codigo_cliente" 
                                type="text" 
                                required={true}
                                placeholder="Cod.Cliente" 
                                value={codigo_cliente}
                                onChange={(e) => setCodigo_cliente(e.target.value)}
                            />
                            <input 
                                id="pde_rgi"                              
                                type="text" 
                                required={true}
                                placeholder="PDE/RGI"
                                value={pde_rgi}
                                onChange={(e) => setPde_rgi(e.target.value)} 
                            />
                            
                        </div> 
                        <div className='coluna'>
                            <input 
                                id="hidrometro"                              
                                type="text" 
                                required={true}
                                placeholder="Hidrometro"  
                                value={hidrometro}
                                onChange={(e) => setHidrometro(e.target.value)}
                            />
                            <input 
                                id="tipo_ligacao"  
                                type="text" 
                                placeholder="Tipo de Ligação" 
                                value={tipo_ligacao}
                                onChange={(e) => setTipo_ligacao(e.target.value)} 
                            />
                            <input 
                                id="Tipo_fornecimento" 
                                type="text" 
                                placeholder="Tipo de Fornecimento"
                                value={tipo_fornecimento}
                                onChange={(e) => setTipo_fornecimento(e.target.value)}  
                            />                           
                        </div> 
                        <div className='coluna'>
                            <input 
                                id="n_fornecimento" 
                                type="text" 
                                placeholder="Numero de Fornecimento"
                                value={n_fornecimento}
                                onChange={(e) => setN_fornecimento(e.target.value)}  
                            />
                            <input 
                                id="valor_medio" 
                                type="number" 
                                required={true}
                                placeholder="Valor Médio"
                                value={valor_medio}
                                onChange={(e) => setValor_medio(e.target.value)}  
                            />
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="valor_medio"   
                                floatValue = {true}
                                value={valor_medio}
                                required={true}
                                placeholder="Valor Medio (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setValor_medio ( floatValue  ) ;                                 
                                } }
                            />
                        </div>
                        <p>Local de Consumo</p>
                        <div className='coluna'>                              
                            <input 
                                id="nome_consumo" 
                                type="text" 
                                required={true}
                                placeholder="Nome"
                                value={nome_consumo}
                                onChange={(e) => setNome_consumo(e.target.value)}   
                            />
                            <input 
                                id="cpf_cnpj_ci" 
                                type="text" 
                                required={true} 
                                placeholder="CPF/CNPJ/CI"
                                value={cpf_cnpj_ci}
                                onChange={(e) => setCpf_cnpj_ci(e.target.value)} 
                            />
                            <input 
                                id="cep_consumo" 
                                type="text" 
                                required={true} 
                                placeholder="CEP"
                                value={cep_consumo}
                                onChange={(e) => setCep_consumo(e.target.value)}
                            />
                        </div> 
                        <div className='coluna'>                           
                            <input 
                                id="rua_consumo" 
                                type="text" 
                                placeholder="Rua"
                                value={rua_consumo}
                                onChange={(e) => setRua_consumo(e.target.value)} 
                            />
                            <input 
                                id="bairro_consumo" 
                                type="text" 
                                placeholder="Bairro"
                                value={bairro_consumo}
                                onChange={(e) => setBairro_consumo(e.target.value)} 
                            />
                            <input 
                                id="cidade_consumo" 
                                type="text" 
                                placeholder="Cidade"
                                value={cidade_consumo}
                                onChange={(e) => setCidade_consumo(e.target.value)}   
                            />
                        </div> 
                        <div className='coluna'>                           
                            <input 
                                id="estado_consumo" 
                                type="text" 
                                placeholder="Estado"
                                value={estado_consumo}
                                onChange={(e) => setEstado_consumo(e.target.value)}
                            />
                            <input 
                                id="nResidencial_Empresarial"                             
                                type="text" 
                                placeholder="Nª Residencial/Empresarial" 
                                value={nResidencial_empresarial}
                                onChange={(e) => setNResidencial_empresarial(e.target.value)}
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