import './style.css'
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';

function ContaAgua(){
    const [concessionaria, setConcessionaria] = useState('')
    const [cnpj_concessionaria, setCnpj_concessionaria] = useState('')
    const [segmento, setSegmento] = useState('')
    const [fornecimento, setFornecimento] = useState('')
    const [documento, setDocumento] = useState('')
    const [dataEmissao, setDataEmissao] = useState()
    const [nome_cliente, setNome_cliente] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [codigo_cliente, setCodigo_cliente] = useState('')
    const [pde_rgi, setPde_rgi] = useState('')
    const [hidrometro, setHidrometro] = useState('')
    const [economia, setEconomia] = useState('')
    const [tipo_ligacao, setTipo_ligacao] = useState('')
    const [data_apresentacao, setData_apresentacao] = useState('')
    const [proxima_leitura, setProxima_leitura] = useState('')
    const [condicao_leitura, setCondicao_leitura] = useState('')
    const [consumo_m3, setConsumo_m3] = useState('')
    const [periodo_consumo, setPeriodo_consumo] = useState('')
    const [media_consumo, setMedia_consumo] = useState('')
    const [subtotal_agua, setSubtotal_agua] = useState('')
    const [subtotal_esgoto, setSubtotal_esgoto] = useState('')
    const [vtConsumo, setVtConsumo] = useState('')
    const [multa, setMulta] = useState('')
    const [at_monet, setAt_monet] = useState('')
    const [juros_moradia, setJuros_moradia] = useState('')
    const [taxa_regulacao, setTaxa_regulacao] = useState('')
    const [data_vencimento, setData_vencimento] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        const dados = {
            concessionaria:concessionaria,
            cnpj:cnpj_concessionaria,
            segmento:segmento,
            n_fornecimento:fornecimento,
            n_documento:documento,
            data_emissao:formatarData(dataEmissao),
            nome_cliente:nome_cliente,
            cep:cep,
            endereco:endereco,
            codigo_cliente:codigo_cliente,
            pde_rgi:pde_rgi,
            hidrometro:hidrometro,
            economia:economia,
            tipo_ligacao:tipo_ligacao,
            data_apresentacao:formatarData(data_apresentacao),
            proxima_leitura:formatarData(proxima_leitura),
            condicao_leitura:condicao_leitura,
            consumo_m3:consumo_m3,
            periodo:periodo_consumo,
            media_m3:media_consumo,
            subtotal_agua:subtotal_agua,
            subtotal_esgoto:subtotal_esgoto,
            valor_total:vtConsumo,
            multa:multa,
            at_monet:at_monet,
            juros_mora:juros_moradia,
            taxa_regulacao:taxa_regulacao,
            data_vencimento:formatarData(data_vencimento)
        }


        try {
            await fetch("http://localhost:8080/contadeagua/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
            },
                body: JSON.stringify(dados),
            })
            
            setConcessionaria('')
            setCnpj_concessionaria('')
            setSegmento('')
            setFornecimento('')
            setDocumento('')
            setDataEmissao('')
            setNome_cliente('')
            setCep('')
            setEndereco('')
            setCodigo_cliente('')
            setPde_rgi('')
            setHidrometro('')
            setEconomia('')
            setTipo_ligacao('')
            setData_apresentacao('')
            setProxima_leitura('')
            setCondicao_leitura('')
            setConsumo_m3('')
            setPeriodo_consumo('')
            setMedia_consumo('')
            setSubtotal_agua('')
            setSubtotal_esgoto('')
            setVtConsumo('')
            setMulta('')
            setAt_monet('')
            setJuros_moradia('')
            setTaxa_regulacao('')
            setData_vencimento('')
            return;
        } catch (error) {
            return console.log(error.message);
        }
    }
    function formatarData(data) {
        const arrayData = data.split('/');   
        const ano = `${arrayData[2]}`
        const mes = `${arrayData[1]}`
        const dia = `${arrayData[0]}`
    
        return `${ano + '-' + mes +'-' + dia}`;
    }

    return(
        <div className="c_Agua">  
            <Menu/>
            <div className='containerContaAgua'>
                <h1 className="titulo">Cadastro de Conta de Água</h1>
                <div className= "cadastro">
                    <form name="cadastro_agua" onSubmit={handleSubmit}>
                        <h2>Dados Concessionaria</h2>
                        <div className='coluna'>
                            <input 
                                id="concessionaria" 
                                type="text" 
                                required={true}
                                placeholder="Concessionaria " 
                                value={concessionaria}
                                onChange={(e) => setConcessionaria(e.target.value)}
                            />
                            <input 
                                id="cnpj_concessionaria" 
                                type="text" 
                                placeholder="CNPJ " 
                                value={cnpj_concessionaria}
                                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                            />
                            <input 
                                id="segmento" 
                                type="text" 
                                placeholder="Segmento " 
                                value={segmento}
                                onChange={(e) => setSegmento(e.target.value)}
                            />
                            
                            
                        </div> 
                        <div className='coluna'>
                            <input 
                                id="fornecimento" 
                                type="number"
                                required={true} 
                                placeholder="Fornecimento" 
                                value={fornecimento}
                                onChange={(e) => setFornecimento(e.target.value)}
                            />
                            <input 
                                id="documento"                              
                                type="number"
                                required={true} 
                                placeholder="Nª do Documento"  
                                value={documento}
                                onChange={(e) => setDocumento(e.target.value)}
                            />
                            <NumberFormat 
                                type="text" 
                                format="##/##/####" 
                                required={true}
                                value={dataEmissao}
                                onChange={(e) => setDataEmissao(e.target.value)}
                                placeholder="Data Emissão " 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                            />
                        </div>

                        <h2>Dados Cliente</h2> 
                        <div className='coluna'>                            
                            <input 
                                id="nome" 
                                type="text"
                                required={true} 
                                placeholder="Nome Cliente "
                                value={nome_cliente}
                                onChange={(e) => setNome_cliente(e.target.value)}  
                            />
                            <input 
                                id="cep" 
                                type="number" 
                                placeholder="CEP"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}  
                            />
                            <input 
                                id="endereco" 
                                type="text" 
                                placeholder="Endereço"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}  
                            />
                        </div> 
                        <div className='coluna'>
                            <input 
                                id="codigo_cliente" 
                                type="number" 
                                required={true}
                                placeholder="Codigo do Cliente"
                                value={codigo_cliente}
                                onChange={(e) => setCodigo_cliente(e.target.value)}  
                            />
                            <input 
                                id="pde_rgi" 
                                required={true}
                                type="number" 
                                placeholder="pde_rgi"
                                value={pde_rgi}
                                onChange={(e) => setPde_rgi(e.target.value)}  
                            />
                            <input 
                                id="hidrometro" 
                                type="text" 
                                required={true}
                                placeholder="Hidrometro"
                                value={hidrometro}
                                onChange={(e) => setHidrometro(e.target.value)}  
                            />
                            
                        </div>
                        <h2>Dados Conta</h2> 
                        <div className='coluna'>                           
                            <input 
                                id="economia" 
                                type="text" 
                                placeholder="Economia"
                                value={economia}
                                onChange={(e) => setEconomia(e.target.value)}   
                            />
                            <input 
                                id="tipo_ligação" 
                                type="text" 
                                placeholder="Tipo de ligação" 
                                value={tipo_ligacao}
                                onChange={(e) => setTipo_ligacao(e.target.value)} 
                            />
                            <NumberFormat 
                                type="text"
                                id="data_apresentacao"  
                                format="##/##/####" 
                                required={true}
                                value={data_apresentacao}
                                onChange={(e) => setData_apresentacao(e.target.value)}
                                placeholder="Data Apresentação" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                            />
                        </div> 
                        <div className='coluna'>
                            <NumberFormat 
                                type="text"
                                id="proxima_leitura"  
                                format="##/##/####"
                                required={true} 
                                value={proxima_leitura}
                                onChange={(e) => setProxima_leitura(e.target.value)}
                                placeholder="Proxima leitura" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                            />
                            
                            <input 
                                id="condicao_leitura" 
                                type="text"  
                                placeholder="Condição Leitura"
                                value={condicao_leitura}
                                onChange={(e) => setCondicao_leitura(e.target.value)}
                            />
                            <input 
                                id="consumo_m3" 
                                type="number" 
                                placeholder="Consumo(m3)"
                                value={consumo_m3}
                                onChange={(e) => setConsumo_m3(e.target.value)} 
                            />
                        </div> 
                        <div className='coluna'>                           
                            <input 
                                id="periodo_consumo" 
                                type="number" 
                                placeholder="Periodo de Consumo"
                                value={periodo_consumo}
                                onChange={(e) => setPeriodo_consumo(e.target.value)} 
                            />
                            <input 
                                id="media_consumo" 
                                type="number"  
                                placeholder="Media de Consumo"
                                value={media_consumo}
                                onChange={(e) => setMedia_consumo(e.target.value)} 
                            />
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="subtotal_agua"  
                                floatValue = {true}
                                value={subtotal_agua}
                                required={true}
                                placeholder="Valor total da água (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setSubtotal_agua ( floatValue  ) ;                                 
                                } }
                            />
                        </div> 
                        <div className='coluna'>
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="subtotal_esgoto"   
                                floatValue = {true}
                                value={subtotal_esgoto}
                                required={true}
                                placeholder="Valor total esgoto (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setSubtotal_esgoto ( floatValue  ) ; 
                                } }
                            />
                            
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="vtConsumo"   
                                floatValue = {true}
                                value={vtConsumo}
                                required={true}
                                placeholder="Valor total de Consumo (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setVtConsumo ( floatValue  ) ; 
                                } }
                            />
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="multa"    
                                floatValue = {true}
                                value={multa}
                                placeholder="Multa (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setMulta ( floatValue  ) ; 
                                } }
                            />
                        </div> 
                        <div className='coluna'>   
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="at_monet"    
                                floatValue = {true}
                                value={at_monet}
                                placeholder="Valor tributos (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setAt_monet ( floatValue  ) ; 
                                } }
                            />                       
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="juros_moradia"    
                                floatValue = {true}
                                value={juros_moradia}
                                placeholder="Juros Moradia (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setJuros_moradia ( floatValue  ) ; 
                                } }
                            />
                            <NumberFormat 
                                prefix={'R$ '} 
                                id="taxa_regulacao"    
                                floatValue = {true}
                                value={taxa_regulacao}
                                placeholder="Taxa de Regulação (R$)"
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setTaxa_regulacao ( floatValue  ) ; 
                                } }
                            />
                        </div>
                        <div className='coluna'>  
                            <NumberFormat 
                                type="text"
                                id="data_vencimento"  
                                format="##/##/####" 
                                required={true}
                                value={data_vencimento}
                                onChange={(e) => setData_vencimento(e.target.value)}
                                placeholder="Data Vencimento" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                            />
                        </div>  
                               
                        <div className="bt-container">
                            <button type='button' className="cadastrar" id="upload">UPLOAD</button>
                            <button type="submit" className="cadastrar" id="botao_cad">ENVIAR</button>
                            {/* <p>Cadastro realizado com exito</p> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContaAgua