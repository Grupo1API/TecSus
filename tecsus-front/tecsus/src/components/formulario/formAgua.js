import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../pages/quadro_agua/style";
import NumberFormat from "react-number-format";

export default function EditClientes({ dados, modalEdit }) {
  const classes = useStyles();
  const [n_fornecimento, setN_fornecimento] = useState(dados.n_fornecimento)
  const [concessionaria, setConcessionaria] = useState(dados.concessionaria)
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState(dados.cnpj_concessionaria)
  const [segmento, setSegmento] = useState(dados.segmento)
  const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState(dados.cpf_cnpj_cliente)
  const [documento, setDocumento] = useState(dados.documento)
  const [dataEmissao, setDataEmissao] = useState(dados.dataEmissao)
  const [nome_cliente, setNome_cliente] = useState(dados.nome_cliente)
  const [cep, setCep] = useState(dados.cep)
  const [codigo_cliente, setCodigo_cliente] = useState(dados.codigo_cliente)
  const [pde_rgi, setPde_rgi] = useState(dados.pde_rgi)
  const [hidrometro, setHidrometro] = useState(dados.hidrometro)
  const [economia, setEconomia] = useState(dados.economia)
  const [tipo_ligacao, setTipo_ligacao] = useState(dados.tipo_ligacao)
  const [data_apresentacao, setData_apresentacao] = useState(dados.data_apresentacao)
  const [proxima_leitura, setProxima_leitura] = useState(dados.proxima_leitura)
  const [condicao_leitura, setCondicao_leitura] = useState(dados.condicao_leitura)
  const [consumo_m3, setConsumo_m3] = useState(dados.consumo_m3)
  const [periodo_consumo, setPeriodo_consumo] = useState(dados.periodo_consumo)
  const [media_consumo, setMedia_consumo] = useState(dados.media_consumo)
  const [subtotal_agua, setSubtotal_agua] = useState(dados.subtotal_agua)
  const [subtotal_esgoto, setSubtotal_esgoto] = useState(dados.subtotal_esgoto)
  const [vtConsumo, setVtConsumo] = useState(dados.vtConsumo)
  const [multa, setMulta] = useState(dados.multa) 
  const [at_monet, setAt_monet] = useState(dados.at_monet)
  const [juros_moradia, setJuros_moradia] = useState(dados.juros_moradia)
  const [taxa_regulacao, setTaxa_regulacao] = useState(dados.taxa_regulacao)
  const [data_vencimento, setData_vencimento] = useState(dados.data_vencimento)


  async function handleUpdate() {
    const data = {
      id:dados.id,
             n_fornecimento:n_fornecimento,
            concessionaria:concessionaria,
            cnpj:cnpj_concessionaria,
            segmento:segmento,
            n_documento:documento,
            data_emissao:dataEmissao,
            nome_cliente:nome_cliente,
            cep:cep,
           
            codigo_cliente:codigo_cliente,
            pde_rgi:pde_rgi,
            hidrometro:hidrometro,
            economia:economia,
            tipo_ligacao:tipo_ligacao,
            data_apresentacao:data_apresentacao,
            proxima_leitura:proxima_leitura,
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
            data_vencimento:data_vencimento
  };
    await fetch(`http://localhost:8080/contadeagua/atualizar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <form className={classes.root} onSubmit={handleUpdate}>
                <div>
                            <TextField
                                id="outlined-required"
                                className='input'
                                type="text"
                                label="Numero de fornecimento" 
                                placeholder="N° Fornecimento" 
                                value={n_fornecimento}
                                onChange={(e) => setN_fornecimento(e.target.value)}
                                variant="outlined" 
                                fullWidth
                            />
                            <TextField
                                id="outlined-required"
                                className='input'
                                type="text"
                                label="CNPJ Concessionaria" 
                                placeholder="CNPJ Concessionaria" 
                                value={cnpj_concessionaria}
                                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                                variant="outlined" 
                                fullWidth
                                
                            />
                    </div>
                    <div>
                            <TextField
                                id="outlined-required"
                                className='input' 
                                type="text" 
                                label="Concessionaria" 
                                value={concessionaria}
                                onChange={(e) => setConcessionaria(e.target.value)}
                                variant="outlined" 
                                fullWidth
                            />                  
                            <TextField
                                id="outlined-required"
                                className='input'
                                type="text" 
                                label="CNPJ/CPF Unidade"
                                placeholder="CNPJ/CPF cliente" 
                                value={cpf_cnpj_cliente}
                                onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
                                fullWidth
                                variant="outlined"
                            />
                    </div> 
                     <div >  
                            <TextField
                                id="outlined-required"
                                className='input'
                                type="text"
                                label="Nome Unidade"
                                fullWidth
                                value={nome_cliente}
                                variant="outlined"
                                onChange={(e) => setNome_cliente(e.target.value)}
                            />



                            <TextField
                                id="outlined-required"
                                className='input'
                                type="number" 
                                fullWidth
                                label="Codigo do Cliente"
                                placeholder="Codigo do Cliente"
                                value={codigo_cliente}
                                onChange={(e) => setCodigo_cliente(e.target.value)} 
                                variant="outlined" 
                                
                            />
                            </div> 
                            <div >  
                            <TextField
                                id="outlined-required"
                                className='input'
                                type="number" 
                                fullWidth
                                label="pde_rgi"
                                placeholder="pde_rgi"
                                value={pde_rgi}
                                onChange={(e) => setPde_rgi(e.target.value)}  
                                variant="outlined"
                                
                            />
                             
                             <TextField
                                id="outlined-required"
                                className='input' 
                                fullWidth
                                type="text" 
                                label="Hidrometro" 
                                placeholder="Hidrometro"
                                value={hidrometro}
                                onChange={(e) => setHidrometro(e.target.value)} 
                                variant="outlined"
                                
                            />
                            </div> 
                            <div >  
                             
                              <TextField
                                id="outlined-required"
                                className='input'  
                                fullWidth
                                type="text" 
                                label="Tipo de ligação" 
                                placeholder="Tipo de ligação" 
                                value={tipo_ligacao}
                                onChange={(e) => setTipo_ligacao(e.target.value)}
                                variant="outlined"   
                                
                            />
                            <TextField
                                 id="outlined-required"
                                 fullWidth
                                className='input'
                                type="number" 
                                label="CEP"
                                value={cep}
                                variant="outlined"
                                onChange={(e) => setCep(e.target.value)}
                                
                            />    
                            </div>
                        <div > 
                            {/* 13 */}   
                            <TextField
                                id="outlined-required"
                                className='input'  
                                type="text"
                                label="Economia" 
                                fullWidth
                                placeholder="Economia"
                                value={economia}
                                onChange={(e) => setEconomia(e.target.value)} 
                                variant="outlined"   
                            />                      
                            {/* 15 */}
                            <NumberFormat 
                                 id="outlined-required"
                                className='input' 
                                type="text"
                            
                                format="##/##/####" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                label="Data Apresentação"
                                placeholder="Data Apresentação"
                                fullWidth
                                customInput={TextField}
                                value={data_apresentacao}
                                onChange={(e) => setData_apresentacao(e.target.value)}
                                variant="outlined"
                            />
                            </div> 
                            <div >  
                            {/* 16 */}
                            <NumberFormat 
                                 id="outlined-required"
                                className='input'
                                type="text"
                               
                                format="##/##/####"
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                label="Proxima leitura"
                                placeholder="Proxima leitura"
                                customInput={TextField}
                                fullWidth
                                value={proxima_leitura}
                                onChange={(e) => setProxima_leitura(e.target.value)} 
                                variant="outlined"
                            />
                            {/* 17 */}
                            <TextField
                                 id="outlined-required"
                                className='input'
                                type="text"  
                                fullWidth
                                label="Condição Leitura" 
                                placeholder="Condição Leitura"
                                value={condicao_leitura}
                                onChange={(e) => setCondicao_leitura(e.target.value)}
                                variant="outlined"    
                            />
                            </div> 
                            <div >  
                            {/* 18 */}
                            <TextField
                                 id="outlined-required"
                                className='input' 
                                type="number" 
                                fullWidth
                                label="Consumo m3 " 
                                placeholder="m3"
                                value={consumo_m3}
                                onChange={(e) => setConsumo_m3(e.target.value)} 
                                variant="outlined"     
                            />
                            {/* 19 */}   
                            <TextField
                                 id="outlined-required"
                                className='input' 
                                fullWidth
                                type="number" 
                                label="Periodo de Consumo"
                                placeholder="Periodo de Consumo"
                                value={periodo_consumo}
                                onChange={(e) => setPeriodo_consumo(e.target.value)}
                                variant="outlined"    
                            />   
                             </div> 

                            <div> 
                            {/* 20 */}
                            <TextField
                                 id="outlined-required"
                                className='input' 
                                type="number"  
                                label="Media de Consumo"
                                fullWidth
                                placeholder="Media de Consumo"
                                value={media_consumo}
                                onChange={(e) => setMedia_consumo(e.target.value)} 
                                variant="outlined"    
                            /> 
                            {/* 21 */}
                            <NumberFormat 
                                 id="outlined-required" 
                                className='input'
                                prefix={'R$ '} 
                                floatValue = {true}
                                value={subtotal_agua}
                                label="Valor total da água" 
                                fullWidth
                                placeholder="R$ "
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setSubtotal_agua ( floatValue  ) ;                                 
                                } }
                                variant="outlined"
                            />
                            </div> 
                            <div >  
                            {/* 22 */}
                            <NumberFormat 
                                 id="outlined-required"
                                className='input'  
                                prefix={'R$ '} 
                                floatValue = {true}
                                value={subtotal_esgoto}
                                label="Valor total esgoto"
                                fullWidth
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
                                 id="outlined-required"
                                className='input'
                               
                                prefix={'R$ '} 
                                floatValue = {true}
                                value={vtConsumo}
                                fullWidth
                                label="Valor total de Consumo"
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setVtConsumo ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                            </div> 
                            <div >  
                            {/* 24 */}
                            <NumberFormat 
                                 id="outlined-required"
                                className='input'  
                                floatValue = {true}
                                prefix={'R$ '}
                                value={multa}
                                label="Multa"
                                placeholder="R$"
                                fullWidth
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setMulta ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            />
                            {/* 25 */}
                            <NumberFormat 
                             id="outlined-required"    
                                className='input'
                                floatValue = {true}
                                prefix={'R$ '}
                                value={at_monet}
                                label="Valor tributos"
                                fullWidth
                                placeholder="R$"
                                customInput={TextField}
                                onValueChange = { ( valores )  =>  { 
                                const  {floatValue}  =  valores ; 
                                setAt_monet ( floatValue  ) ; 
                                } }
                                variant="outlined"
                            /> 
                            </div>
                        <div >  
                            {/* 26 */}                      
                            <NumberFormat
                                 id="outlined-required"
                                className='input'    
                                floatValue = {true}
                                prefix={'R$'}
                                value={juros_moradia}
                                label="Juros Moradia"
                                fullWidth
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
                                 id="outlined-required"
                                className='input'    
                                floatValue = {true}
                                prefix={'R$'}
                                fullWidth
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
                            <div >  
                        
                            {/* 28 */}
                            <NumberFormat 
                                id="outlined-required"
                                className='input'   
                                type="text"
                                format="##/##/####" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                
                                value={data_vencimento}
                                label="Data Vencimento"
                                placeholder="Data Vencimento" 
                                customInput={TextField}
                                onChange={(e) => setData_vencimento(e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        
                        <TextField
                                 id="outlined-required"
                                className='input'
                                type="text" 
                                label="Segmento"
                                onChange={(e) => setSegmento(e.target.value)}
                                value={segmento}
                                variant="outlined" 
                                fullWidth
                            />                                     
                            <TextField
                                id="outlined-required"
                                className='input'                             
                                type="number"
                                fullWidth
                                label="Nª do Documento"
                                placeholder="Nª do Documento"  
                                value={documento}
                                onChange={(e) => setDocumento(e.target.value)}
                                variant="outlined" 
                                
                            />
                            <NumberFormat 
                               id="outlined-required"
                                className='input'
                                type="text" 
                                format="##/##/####" 
                                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                                fullWidth
                                label="Data Emissão"
                                placeholder="Data Emissão"
                                customInput={TextField}
                                value={dataEmissao}
                                onChange={(e) => setDataEmissao(e.target.value)}
                                variant="outlined" 
                                
                            />
                         </div>




      <Button
        onClick={()=>handleUpdate()}
        type="Submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
      >
        EDITAR
      </Button>
    </form>
  );
}