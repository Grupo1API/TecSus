import './style.css'
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContaAgua(){
    const [concessionaria, setConcessionaria] = useState('')
    const [cnpj_concessionaria, setCnpj_concessionaria] = useState('')
    const [segmento, setSegmento] = useState('')
    const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState('')
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
    const[upload, setUpload]= useState('')

    async function buscaUnidade(){
        try {
            const response = await fetch(`http://localhost:8080/unidades/${cpf_cnpj_cliente}`)
            
            const dados = await response.json()
            setNome_cliente(dados.nome)
            setCep(dados.end_cep)            
    
        } catch (error) {
            return console.log(error.message);
        }
      } 
      async function buscaConcessionaria(){
        try {
            const response = await fetch(`http://localhost:8080/concessionaria/${cnpj_concessionaria}`)
            const dados = await response.json()
            setConcessionaria(dados.nome)
            setSegmento(dados.segmento)            
    
        } catch (error) {
            return console.log(error.message);
        }
      }
    
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
            data_vencimento:formatarData(data_vencimento),
            conta_de_agua_arquivo_id:upload,
            // contaagua_contrato_id:
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
                            <TextField
                                id="cnpj_concessionaria" 
                                className='input'
                                type="text"
                                required={true} 
                                label="CNPJ" 
                                placeholder="CNPJ" 
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
                                disabled
                                value={concessionaria}
                                variant="outlined" 
                            />                                                               
                            <TextField
                                id="N° do Fornecimento" 
                                className='input'
                                type="text" 
                                label="N° do Fornecimento"
                                placeholder="N° do Fornecimento" 
                                value={fornecimento}
                                onChange={(e) => setFornecimento(e.target.value)}
                            />

                             <TextField
                                id= 'segmento'
                                label="Segmento"

                                disabled

                                className='input'                                
                                type="text" 

                                value={segmento}
                                variant="outlined" 
                            />
                        </div> 

                        <div className='coluna'>                                         
                            
                            <TextField
                                id="documento" 
                                className='input'                             
                                type="number"
                                required={true}
                                label="Nª do Documento"
                                placeholder="Nª do Documento"  
                                value={documento}
                                onChange={(e) => setDocumento(e.target.value)}
                                variant="outlined" 
                            />
                            
                            <NumberFormat 
                                id="data_emissao"
                                className='input'
                                type="text" 
                                format="##/##/####" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                required={true}
                                label="Data Emissão"
                                placeholder="Data Emissão"
                                customInput={TextField}
                                value={dataEmissao}
                                onChange={(e) => setDataEmissao(e.target.value)}
                                variant="outlined" 
                            />
                        </div>

                        <h2>Dados Cliente</h2> 
                        <div className='coluna'> 
                           
                            <TextField
                                id="cnpj_cpf_cliente"
                                className='input'
                                type="text" 
                                required={true}
                                label="CNPJ/CPF Unidade"
                                placeholder="CNPJ/CPF cliente" 
                                value={cpf_cnpj_cliente}
                                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                                onBlur = {buscaUnidade}
                                variant="outlined"
                            />
                            <TextField
                                id="nome" 
                                className='input'
                                type="text"
                                label="Nome Unidade"
                                disabled
                                value={nome_cliente}
                                variant="outlined"
                            />     
                            
                            <TextField
                                id="cep"
                                className='input'
                                type="number" 
                                label="CEP"
                                disabled
                                value={cep}
                                variant="outlined"
                            />                        
                        </div>

                        <div className='coluna'>
                            
                            <TextField
                                id="codigo_cliente" 
                                className='input'
                                type="number" 
                                required={true}
                                label="Codigo do Cliente"
                                placeholder="Codigo do Cliente"
                                value={codigo_cliente}
                                onChange={(e) => setCodigo_cliente(e.target.value)} 
                                variant="outlined" 
                            />
                            {/* 11 */}
                            <TextField
                                id="pde_rgi" 
                                className='input'
                                type="number" 
                                required={true}
                                label="pde_rgi"
                                placeholder="pde_rgi"
                                value={pde_rgi}
                                onChange={(e) => setPde_rgi(e.target.value)}  
                                variant="outlined"
                            />
                            {/* 12 */}
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
                        </div>

                        <h2>Dados Conta</h2> 
                        <div className='coluna'> 
                            {/* 13 */}   
                            <TextField
                                id="economia"
                                className='input'  
                                type="text"
                                label="Economia" 
                                placeholder="Economia"
                                value={economia}
                                onChange={(e) => setEconomia(e.target.value)} 
                                variant="outlined"   
                            />                       
                            {/* 14 */}
                            <TextField
                                id="tipo_ligação" 
                                className='input'  
                                type="text" 
                                label="Tipo de ligação" 
                                placeholder="Tipo de ligação" 
                                value={tipo_ligacao}
                                onChange={(e) => setTipo_ligacao(e.target.value)}
                                variant="outlined"   
                            />
                            {/* 15 */}
                            <NumberFormat 
                                id="data_apresentacao" 
                                className='input' 
                                type="text"
                                required={true}
                                format="##/##/####" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                label="Data Apresentação"
                                placeholder="Data Apresentação"
                                customInput={TextField}
                                value={data_apresentacao}
                                onChange={(e) => setData_apresentacao(e.target.value)}
                                variant="outlined"
                            />
                        </div> 
                        <div className='coluna'>
                            {/* 16 */}
                            <NumberFormat 
                                id="proxima_leitura"
                                className='input'
                                type="text"
                                required={true}
                                format="##/##/####"
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                label="Proxima leitura"
                                placeholder="Proxima leitura"
                                customInput={TextField}
                                value={proxima_leitura}
                                onChange={(e) => setProxima_leitura(e.target.value)} 
                                variant="outlined"
                            />
                            {/* 17 */}
                            <TextField
                                id="condicao_leitura" 
                                className='input'
                                type="text"  
                                label="Condição Leitura" 
                                placeholder="Condição Leitura"
                                value={condicao_leitura}
                                onChange={(e) => setCondicao_leitura(e.target.value)}
                                variant="outlined"    
                            />
                            {/* 18 */}
                            <TextField
                                id="consumo_m3"
                                className='input' 
                                type="number" 
                                label="Consumo m3 " 
                                placeholder="m3"
                                value={consumo_m3}
                                onChange={(e) => setConsumo_m3(e.target.value)} 
                                variant="outlined"     
                            />
                        </div> 

                        <div className='coluna'> 
                            {/* 19 */}   
                            <TextField
                                id="periodo_consumo"
                                className='input' 
                                type="number" 
                                label="Periodo de Consumo"
                                placeholder="Periodo de Consumo"
                                value={periodo_consumo}
                                onChange={(e) => setPeriodo_consumo(e.target.value)}
                                variant="outlined"    
                            />   
                            {/* 20 */}
                            <TextField
                                id="media_consumo" 
                                className='input' 
                                type="number"  
                                label="Media de Consumo"
                                placeholder="Media de Consumo"
                                value={media_consumo}
                                onChange={(e) => setMedia_consumo(e.target.value)} 
                                variant="outlined"    
                            /> 
                            {/* 21 */}
                            <NumberFormat 
                                id="subtotal_agua" 
                                className='input'
                                required={true} 
                                prefix={'R$ '} 
                                floatValue = {true}
                                value={subtotal_agua}
                                label="Valor total da água" 
                                placeholder="R$ "
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setSubtotal_agua ( floatValue  ) ;                                 
                                } }
                                variant="outlined"
                            />
                        </div> 
                        <div className='coluna'>
                            {/* 22 */}
                            <NumberFormat 
                                id="subtotal_esgoto"
                                className='input'
                                required={true}   
                                prefix={'R$ '} 
                                floatValue = {true}
                                value={subtotal_esgoto}
                                label="Valor total esgoto"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setSubtotal_esgoto ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                            {/* 23 */}
                            <NumberFormat 
                                id="vtConsumo" 
                                className='input'
                                required={true}
                                prefix={'R$ '} 
                                floatValue = {true}
                                value={vtConsumo}
                                label="Valor total de Consumo"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setVtConsumo ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                            {/* 24 */}
                            <NumberFormat 
                                id="multa"
                                className='input'  
                                floatValue = {true}
                                prefix={'R$ '}
                                value={multa}
                                label="Multa"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setMulta ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                        </div> 
                        <div className='coluna'>  
                            {/* 25 */}
                            <NumberFormat 
                                id="at_monet"    
                                className='input'
                                floatValue = {true}
                                prefix={'R$ '}
                                value={at_monet}
                                label="Valor tributos"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setAt_monet ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            /> 
                            {/* 26 */}                      
                            <NumberFormat
                                id="juros_moradia"
                                className='input'    
                                floatValue = {true}
                                prefix={'R$'}
                                value={juros_moradia}
                                label="Juros Moradia"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setJuros_moradia ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                            {/* 27 */}
                            <NumberFormat 
                                id="taxa_regulacao"
                                className='input'    
                                floatValue = {true}
                                prefix={'R$'}
                                value={taxa_regulacao}
                                label="Taxa de Regulação"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setTaxa_regulacao ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                        </div>
                        <div className='coluna'>  
                            {/* 28 */}
                            <NumberFormat 
                                id="data_vencimento"
                                className='input'   
                                type="text"
                                format="##/##/####" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                required={true}
                                value={data_vencimento}
                                label="Data Vencimento"
                                placeholder="Data Vencimento" 
                                customInput={TextField}
                                onChange={(e) => setData_vencimento(e.target.value)}
                                variant="outlined"
                            />
                        </div>  
                               
                        <div className="bt-container">
                            <input
                                accept="file/*"
                                className="btn-upload"
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={e=>setUpload(e.target.value)}
                            />
                            <label htmlFor="contained-button-file">
                                <Button id="upload" variant="contained" color="primary" component="span">
                                Upload
                                </Button>
                            </label>
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