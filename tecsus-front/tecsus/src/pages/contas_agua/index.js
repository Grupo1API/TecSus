import "./style.css";
import Menu from "../../components/menu";
import { useState } from "react";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

<<<<<<< HEAD
function ContaAgua(){
    const [n_fornecimento, setN_fornecimento] = useState('')
    const [concessionaria, setConcessionaria] = useState('')
    const [cnpj_concessionaria, setCnpj_concessionaria] = useState('')
    const [segmento, setSegmento] = useState('')
    const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState('')
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
    const [cep_unidade,setCep_unidade] = useState('')
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
            setNome_cliente(dados.nome_cliente)
            setCep(dados.cep)
            setEndereco(`${dados.rua} - ${dados.bairro}`)
            console.log(dados)
    
        } catch (error) {
            return console.log(error.message);
        }
      } 
      async function buscaConcessionaria(){
        try {
            const response = await fetch(`http://localhost:8080/concessionaria/${cnpj_concessionaria}`)
            const dados = await response.json()
            setConcessionaria(dados.concessionaria)
            setSegmento(dados.segmento)
            console.log(dados)
    
        } catch (error) {
            return console.log(error.message);
        }
      }
    
    async function handleSubmit(event){
        event.preventDefault()
        const dados = {
            n_fornecimento:n_fornecimento,
            concessionaria:concessionaria,
            cnpj:cnpj_concessionaria,
            segmento:segmento,
            n_documento:documento,
            data_emissao:formatarData(dataEmissao),
            nome_cliente:nome_cliente,
            cep:cep,
            endereco:endereco,
            codigo_cliente:codigo_cliente,
            pde_rgi:pde_rgi,
            hidrometro:hidrometro,
            economia:economia,
            cep_unidade:cep_unidade,
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
            setN_fornecimento('')
            setDocumento('')
            setDataEmissao('')
            setNome_cliente('')
            setCep('')
            setEndereco('')
            setCodigo_cliente('')
            setPde_rgi('')
            setHidrometro('')
            setEconomia('')
            setCep_unidade('')
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
=======
function ContaAgua() {
  const [n_fornecimento, setN_fornecimento] = useState("");
  const [concessionaria, setConcessionaria] = useState("");
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState("");
  const [segmento, setSegmento] = useState("");
  const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState("");
  const [documento, setDocumento] = useState("");
  const [dataEmissao, setDataEmissao] = useState();
  const [nome_cliente, setNome_cliente] = useState("");
  const [cepConcessionaria, setCepConcessionaria] = useState("");
  const [codigo_cliente, setCodigo_cliente] = useState("");
  const [pde_rgi, setPde_rgi] = useState("");
  const [hidrometro, setHidrometro] = useState("");
  const [economia, setEconomia] = useState("");
  const [tipo_ligacao, setTipo_ligacao] = useState("");
  const [cep_unidade, setCep_unidade] = useState("");
  const [data_apresentacao, setData_apresentacao] = useState("");
  const [proxima_leitura, setProxima_leitura] = useState("");
  const [condicao_leitura, setCondicao_leitura] = useState("");
  const [consumo_m3, setConsumo_m3] = useState("");
  const [periodo_consumo, setPeriodo_consumo] = useState("");
  const [media_consumo, setMedia_consumo] = useState("");
  const [subtotal_agua, setSubtotal_agua] = useState("");
  const [subtotal_esgoto, setSubtotal_esgoto] = useState("");
  const [vtConsumo, setVtConsumo] = useState("");
  const [multa, setMulta] = useState("");
  const [at_monet, setAt_monet] = useState("");
  const [juros_moradia, setJuros_moradia] = useState("");
  const [taxa_regulacao, setTaxa_regulacao] = useState("");
  const [data_vencimento, setData_vencimento] = useState("");
  const [contratoId, setContratoId] = useState("");

  async function buscaContrato() {
    try {
      const response = await fetch(
        `http://localhost:8080/contratoagua/${n_fornecimento}`
      );
      const dados = await response.json();
      setCnpj_concessionaria(dados.contrato_concessionaria_id.cnpj);
      setConcessionaria(dados.contrato_concessionaria_id.nome);
      setCepConcessionaria(dados.contrato_concessionaria_id.cep);
      setCpf_cnpj_cliente(dados.contrato_unidade_id.cpf_cnpj);
      setNome_cliente(dados.contrato_unidade_id.nome);
      setCep_unidade(dados.contrato_unidade_id.end_cep);
      setCodigo_cliente(dados.codigo_cliente);
      setPde_rgi(dados.pde_rgi);
      setHidrometro(dados.hidrometro);
      setTipo_ligacao(dados.tipo_ligacao);
      setSegmento(dados.contrato_concessionaria_id.segmento);
      setContratoId(dados.id);
    } catch (error) {
      return console.log(error.message);
>>>>>>> main
    }
  }

  //   // function constructor(props) {
  //   //     super(props);
  //   //     this.state = {
  //   //         open: false,
  //   //         files: []
  //   //     };
  //   // }
  //   const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
  //     const byteCharacters = atob(b64Data);
  //     const byteArrays = [];

  //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //       const slice = byteCharacters.slice(offset, offset + sliceSize);

  //       const byteNumbers = new Array(slice.length);
  //       for (let i = 0; i < slice.length; i++) {
  //         byteNumbers[i] = slice.charCodeAt(i);
  //       }

  //       const byteArray = new Uint8Array(byteNumbers);
  //       byteArrays.push(byteArray);
  //     }

  //     const blob = new Blob(byteArrays, { type: contentType });
  //     return blob;
  //   };

  //   function onChange(e) {
  //     let files = e.target.files;
  //     const blobb = new Blob(files, { type: "application/pdf" });
  //     const blobUrl = URL.createObjectURL(blobb);
  //     console.log(blobUrl);
  //     setUpload(blobUrl);
  //     // const contentType = "application/pdf";
  //     // const blobb = b64toBlob(files.name, contentType);
  //     // const blobUrl = URL.createObjectURL(blobb);

  //     let reader = new FileReader();
  //     reader.readAsDataURL(files[0]);

  //     reader.onload = (e) => {
  //       const formData = e.target.result;
  //       const blobb = new Blob(formData, { type: "application/pdf" });
  //       //   const contentType = "application/pdf";
  //       //    = b64toBlob(formData, contentType);
  //       //   setUpload(URL.createObjectURL(blobb));
  //       console.log(blobb);
  //     };
  //   }

  async function carregarArquivo(file) {
    if (file !== undefined) {
      const dado = new FormData();
      dado.append("file", file);
      await fetch("http://localhost:8080/contadeagua/cadastro", {
        method: "POST",
        body: dado,
      }); // rota para fazer o upload no back end
    }
  }

<<<<<<< HEAD
    return(
        <div className="c_Agua">  
            <Menu/>
            <div className='containerContaAgua'>
                <h1 className="titulo">Cadastro de Conta de Água</h1>
                <div className= "cadastro">
                    <form name="cadastro_agua" onSubmit={handleSubmit}>
                        <h2>Dados Contrato</h2>
                        <div className='coluna'>    

                        <TextField
                                id="n_fornecimento" 
                                className='input'
                                type="text"
                                required={true} 
                                label="Numero de fornecimento" 
                                placeholder="N° Fornecimento" 
                                value={n_fornecimento}
                                onChange={(e) => setN_fornecimento(e.target.value)}
                                variant="outlined" 
                            />
                            <TextField
                                id="cnpj_concessionaria" 
                                className='input'
                                type="text"
                                disable
                                label="CNPJ Concessionaria" 
                                placeholder="CNPJ Concessionaria" 
                                value={cnpj_concessionaria}
                                onChange={(e) => setCnpj_concessionaria(e.target.value)}
                                onBlur = {buscaConcessionaria}
                                variant="outlined" 
                                disabled
                            />

                            <TextField
                                id="concessionaria"
                                className='input' 
                                type="text" 
                                onChange={(e) => setConcessionaria(e.target.value)}
                                label="Concessionaria" 
                                disabled
                                value={concessionaria}
                                variant="outlined" 
                                
                            />                  

                            </div> 
                            <div className='coluna'>  
                            <TextField
                                id="cep"
                                className='input'
                                type="number" 
                                label="CEP Concessionaria"
                                disable
                                onChange={(e) => setCep(e.target.value)}
                                value={cep}
                                variant="outlined"
                                disabled
                            />    
                           
                            <TextField
                                id="cnpj_cpf_cliente"
                                className='input'
                                type="text" 
                                disabled
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
                                onChange={(e) => setNome_cliente(e.target.value)}
                                disabled
                                value={nome_cliente}
                                variant="outlined"

                                
                            />

                            </div> 
                            <div className='coluna'>  
                            <TextField
                                id="cep_unidade" 
                                className='input'  
                                type="text" 
                                label="Cep Unidade" 
                                placeholder="Cep unidade" 
                                value={cep_unidade}
                                onChange={(e) => setCep_unidade(e.target.value)}
                                variant="outlined"   
                                disabled
                            />
                            <TextField
                                id="codigo_cliente" 
                                className='input'
                                type="number" 
                                label="Codigo do Cliente"
                                placeholder="Codigo do Cliente"
                                value={codigo_cliente}
                                onChange={(e) => setCodigo_cliente(e.target.value)} 
                                variant="outlined" 
                                disabled
                            />
                            <TextField
                                id="pde_rgi" 
                                className='input'
                                type="number" 
                                label="pde_rgi"
                                placeholder="pde_rgi"
                                value={pde_rgi}
                                onChange={(e) => setPde_rgi(e.target.value)}  
                                variant="outlined"
                                disabled
                            />
                             
                            </div> 
                            <div className='coluna'>  
                            <TextField
                                id="hidrometro"
                                className='input' 
                                type="text" 
                                label="Hidrometro" 
                                placeholder="Hidrometro"
                                value={hidrometro}
                                onChange={(e) => setHidrometro(e.target.value)} 
                                variant="outlined"
                                disabled 
                            />
                            <TextField
                                id="tipo_ligação" 
                                className='input'  
                                type="text" 
                                label="Tipo de ligação" 
                                placeholder="Tipo de ligação" 
                                value={tipo_ligacao}
                                onChange={(e) => setTipo_ligacao(e.target.value)}
                                variant="outlined"   
                                disabled
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
                            </div> 
                        <div className='coluna'>
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
                             </div> 

                            <div className='coluna'> 
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
                            </div> 
                        <div className='coluna'>
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
                            </div>
                        <div className='coluna'>  
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
                        <div className='coluna'>  
                        <TextField
                                id="segmento" 
                                className='input'
                                type="text" 
                                label="Segmento"
                                disable
                                value={segmento}
                                variant="outlined" 
                                
                            />                                     
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
=======
  async function handleSubmit(event) {
    event.preventDefault();
    const dados = {
      n_documento: documento,
      at_monet: at_monet,
      condicao_leitura: condicao_leitura,
      consumo_m3: consumo_m3,
      data_apresentacao: formatarData(data_apresentacao),
      data_emissao: formatarData(dataEmissao),
      data_vencimento: formatarData(data_vencimento),
      economia: economia,
      juros_mora: juros_moradia,
      media_consumo: media_consumo,
      multa: multa,
      periodo: periodo_consumo,
      proxima_leitura: formatarData(proxima_leitura),
      taxa_regulacao: taxa_regulacao,
      tipo_ligacao: tipo_ligacao,
      total_agua: subtotal_agua,
      total_esgoto: subtotal_esgoto,
      valor_total: vtConsumo,
      contaagua_contrato_id: { id: contratoId },
    };

    try {
      await fetch("http://localhost:8080/contadeagua/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      setConcessionaria("");
      setCnpj_concessionaria("");
      setSegmento("");
      setN_fornecimento("");
      setDocumento("");
      setDataEmissao("");
      setNome_cliente("");
      setCepConcessionaria("");
      setCodigo_cliente("");
      setPde_rgi("");
      setHidrometro("");
      setEconomia("");
      setCep_unidade("");
      setTipo_ligacao("");
      setData_apresentacao("");
      setProxima_leitura("");
      setCondicao_leitura("");
      setConsumo_m3("");
      setPeriodo_consumo("");
      setMedia_consumo("");
      setSubtotal_agua("");
      setSubtotal_esgoto("");
      setVtConsumo("");
      setMulta("");
      setAt_monet("");
      setJuros_moradia("");
      setTaxa_regulacao("");
      setData_vencimento("");
      return;
    } catch (error) {
      return console.log(error.message);
    }
  }
  function formatarData(data) {
    const arrayData = data.split("/");
    const ano = `${arrayData[2]}`;
    const mes = `${arrayData[1]}`;
    const dia = `${arrayData[0]}`;

    return `${ano + "-" + mes + "-" + dia}`;
  }

  return (
    <div className="c_Agua">
      <Menu />
      <div className="containerContaAgua">
        <h1 className="titulo">Cadastro de Conta de Água</h1>
        <div className="cadastro">
          <form name="cadastro_agua" onSubmit={handleSubmit}>
            <h2>Dados Contrato</h2>
            <div className="coluna">
              <TextField
                id="n_fornecimento"
                className="input"
                type="text"
                required
                label="Numero de fornecimento"
                placeholder="N° Fornecimento"
                value={n_fornecimento}
                onChange={(e) => setN_fornecimento(e.target.value)}
                onBlur={buscaContrato}
                variant="outlined"
              />
              <TextField
                id="cnpj_concessionaria"
                className="input"
                type="text"
                label="CNPJ Concessionaria"
                value={cnpj_concessionaria}
                variant="outlined"
                disabled
              />

              <TextField
                id="concessionaria"
                className="input"
                type="text"
                label="Concessionaria"
                disabled
                value={concessionaria}
                variant="outlined"
              />
>>>>>>> main
            </div>
            <div className="coluna">
              <TextField
                id="cep"
                className="input"
                type="number"
                label="CEP Concessionaria"
                disabled
                value={cepConcessionaria}
                variant="outlined"
              />

              <TextField
                id="cnpj_cpf_cliente"
                className="input"
                type="text"
                disabled
                label="CNPJ/CPF Unidade"
                placeholder="CNPJ/CPF cliente"
                value={cpf_cnpj_cliente}
                variant="outlined"
              />
              <TextField
                id="nome"
                className="input"
                type="text"
                label="Nome Unidade"
                disabled
                value={nome_cliente}
                variant="outlined"
              />
            </div>
            <div className="coluna">
              <TextField
                id="cep_unidade"
                className="input"
                type="text"
                label="Cep Unidade"
                value={cep_unidade}
                variant="outlined"
                disabled
              />
              <TextField
                id="codigo_cliente"
                className="input"
                type="number"
                label="Codigo do Cliente"
                value={codigo_cliente}
                variant="outlined"
                disabled
              />
              <TextField
                id="pde_rgi"
                className="input"
                type="number"
                label="pde_rgi"
                value={pde_rgi}
                variant="outlined"
                disabled
              />
            </div>
            <div className="coluna">
              <TextField
                id="hidrometro"
                className="input"
                type="text"
                label="Hidrometro"
                value={hidrometro}
                variant="outlined"
                disabled
              />
              <TextField
                id="tipo_ligação"
                className="input"
                type="text"
                label="Tipo de ligação"
                value={tipo_ligacao}
                variant="outlined"
                disabled
              />
              <TextField
                id="segmento"
                className="input"
                type="text"
                label="Segmento"
                disabled
                value={segmento}
                variant="outlined"
              />
            </div>

            <h2>Dados Conta</h2>
            <div className="coluna">
              <TextField
                id="economia"
                className="input"
                type="text"
                label="Economia"
                placeholder="Economia"
                value={economia}
                onChange={(e) => setEconomia(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                id="data_apresentacao"
                className="input"
                type="text"
                required
                format="##/##/####"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                label="Data Apresentação"
                placeholder="Data Apresentação"
                customInput={TextField}
                value={data_apresentacao}
                onChange={(e) => setData_apresentacao(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                id="proxima_leitura"
                className="input"
                type="text"
                required
                format="##/##/####"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                label="Proxima leitura"
                customInput={TextField}
                value={proxima_leitura}
                onChange={(e) => setProxima_leitura(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="coluna">
              <TextField
                id="condicao_leitura"
                className="input"
                type="text"
                label="Condição Leitura"
                placeholder="Condição Leitura"
                value={condicao_leitura}
                onChange={(e) => setCondicao_leitura(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="consumo_m3"
                className="input"
                type="number"
                label="Consumo m3 "
                placeholder="m3"
                value={consumo_m3}
                onChange={(e) => setConsumo_m3(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="periodo_consumo"
                className="input"
                type="number"
                label="Periodo de Consumo"
                placeholder="Periodo de Consumo"
                value={periodo_consumo}
                onChange={(e) => setPeriodo_consumo(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="coluna">
              <TextField
                id="media_consumo"
                className="input"
                type="number"
                label="Media de Consumo"
                placeholder="Media de Consumo"
                value={media_consumo}
                onChange={(e) => setMedia_consumo(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                id="subtotal_agua"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={subtotal_agua}
                label="Valor total da água"
                placeholder="R$ "
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setSubtotal_agua(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="subtotal_esgoto"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={subtotal_esgoto}
                label="Valor total esgoto"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setSubtotal_esgoto(floatValue);
                }}
                variant="outlined"
              />
            </div>
            <div className="coluna">
              <NumberFormat
                id="vtConsumo"
                className="input"
                prefix={"R$ "}
                floatValue={true}
                value={vtConsumo}
                label="Valor total de Consumo"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setVtConsumo(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="multa"
                className="input"
                floatValue={true}
                prefix={"R$ "}
                value={multa}
                label="Multa"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setMulta(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="at_monet"
                className="input"
                floatValue={true}
                prefix={"R$ "}
                value={at_monet}
                label="Valor tributos"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setAt_monet(floatValue);
                }}
                variant="outlined"
              />
            </div>
            <div className="coluna">
              <NumberFormat
                id="juros_moradia"
                className="input"
                floatValue={true}
                prefix={"R$"}
                value={juros_moradia}
                label="Juros Moradia"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setJuros_moradia(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="taxa_regulacao"
                className="input"
                floatValue={true}
                prefix={"R$"}
                value={taxa_regulacao}
                label="Taxa de Regulação"
                placeholder="R$"
                customInput={TextField}
                onValueChange={(valores) => {
                  const { floatValue } = valores;
                  setTaxa_regulacao(floatValue);
                }}
                variant="outlined"
              />
              <NumberFormat
                id="data_vencimento"
                className="input"
                type="text"
                format="##/##/####"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                required
                value={data_vencimento}
                label="Data Vencimento"
                placeholder="Data Vencimento"
                customInput={TextField}
                onChange={(e) => setData_vencimento(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="coluna">
              <TextField
                id="documento"
                className="input"
                type="number"
                label="Nª do Documento"
                placeholder="Nª do Documento"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                variant="outlined"
              />
              <NumberFormat
                id="data_emissao"
                className="input"
                type="text"
                format="##/##/####"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                required
                label="Data Emissão"
                placeholder="Data Emissão"
                customInput={TextField}
                value={dataEmissao}
                onChange={(e) => setDataEmissao(e.target.value)}
                variant="outlined"
              />
            </div>

            <div className="bt-container">
              <input
                className="btn-upload"
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => carregarArquivo(e.target.files[0])}
              />
              <label htmlFor="contained-button-file">
                <Button
                  id="upload"
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload
                </Button>
              </label>
              <button type="submit" className="cadastrar" id="botao_cad">
                ENVIAR
              </button>
              {/* <p>Cadastro realizado com exito</p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContaAgua;
