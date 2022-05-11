import './style.css';
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContaEnergia() {

  const [concessionaria, setConcessionaria] = useState('')
  const [endereco_concessionaria, setEndereco_concessionaria] = useState('')
  const [cep_concessionaria, setCep_concessionaria] = useState('')
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState('')

  const [nome_cliente, setNome_cliente] = useState('')
  const [cnpj_cpf_cliente, setCnpj_cpf_cliente] = useState('')
  const [cep_cliente, setCep_cliente] = useState('')
  const [endereco_cliente, setEndereco_cliente] = useState('')
  
  const [nota_fiscal, setNota_fiscal] = useState('')
  const [valor_total, setValor_total] = useState('')
  const [numero_instalacao, setNumero_instalacao] = useState('')
  const [data_vencimento, setData_vencimento] = useState('')
  const [conta_mes, setConta_mes] = useState('')
  const [bandeira_tarifaria_vigente, setBandeira_tarifaria_vigente] = useState('')
  const [emissao, setEmissao] = useState('')
  const [dias_faturamento, setDias_faturamento] = useState('')

  const [descricao_consumo, setDescricao_consumo] = useState('')
  const [numero_medidor, setNumero_medidor] = useState('')
  const [const_multa, setConst_multa] = useState('')
  const [kwhMes, setKwhMes] = useState('')
  const [valor_total_tusd, setValor_total_tusd] = useState('')
  const [valor_total_te, setValor_total_te] = useState('')
  const [valor_total_bandeira, setValor_total_bandeira] = useState('')

  const [multa, setMulta] = useState('')
  const [cip, setCip] = useState('')

  const [valor_pis, setValor_pis] = useState('')
  const [valor_cofins, setValor_cofins] = useState('')

  const[upload, setUpload]= useState('')

  async function buscaUnidade(){
    try {
        const response = await fetch(`http://localhost:8080/unidades/${cnpj_cpf_cliente}`)
        
        const dados = await response.json()
        setNome_cliente(dados.nome_cliente)
        setEndereco_cliente(`${dados.rua} - ${dados.bairro}`)
        setCep_cliente(dados.cep)
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
        setEndereco_concessionaria(`${dados.rua} - ${dados.bairro}`)
        setCep_concessionaria(dados.cep)
        console.log(dados)

    } catch (error) {
        return console.log(error.message);
    }
  }
  
  async function handleSubmit(event){
    event.preventDefault()
    const dado ={
      concessionaria:concessionaria,
      endereco_concessionaria:endereco_concessionaria,
      cep_concessionaria:cep_concessionaria,
      cnpj_concessionaria:cnpj_concessionaria,
      nome_cliente:nome_cliente,
      cpf_cnpj_cliente:cnpj_cpf_cliente,
      cep_cliente:cep_cliente,
      endereco_cliente:endereco_cliente,
      nota_fiscal:nota_fiscal,
      valor_total:Number(valor_total),
      numero_instalacao:numero_instalacao,
      data_vencimento:formatarData(data_vencimento),
      conta_mes:conta_mes,
      bandeira_tarifaria_vigente:bandeira_tarifaria_vigente,
      emissao:formatarData(emissao),
      num_dias_faturamento:dias_faturamento,
      descricao_consumo:descricao_consumo,
      numero_medidor:numero_medidor,
      const_mult:const_multa,
      quantidade_kwh_mes:kwhMes,
      valor_total_tusd:valor_total_tusd,
      valor_total_te:valor_total_te,
      valor_total_abv:valor_total_bandeira,
      valor_multa:multa,
      valor_cip_contrib_municipal:cip,
      valor_pis:valor_pis,
      valor_cofins:valor_cofins,
    }
    function formatarData(data) {
      const arrayData = data.split('/');   
      const ano = `${arrayData[2]}`
      const mes = `${arrayData[1]}`
      const dia = `${arrayData[0]}`
  
      return `${ano + '-' + mes +'-' + dia}`;
  }

    try {
      await fetch("http://localhost:8080/contadeenergia/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
      },
        body: JSON.stringify(dado)
      })
      
      setConcessionaria('')
      setCnpj_concessionaria('')
      setCep_concessionaria('')
      setEndereco_concessionaria('')
      setNome_cliente('')
      setCnpj_cpf_cliente('')
      setCep_cliente('')
      setEndereco_cliente('')
      setNota_fiscal('')
      setValor_total('')
      setNumero_instalacao('')
      setData_vencimento('')
      setConta_mes('')
      setBandeira_tarifaria_vigente('')
      setEmissao('')
      setDias_faturamento('')
      setDescricao_consumo('')
      setNumero_medidor('')
      setConst_multa('')
      setKwhMes('')
      setValor_total_tusd('')
      setValor_total_te('')
      setValor_total_bandeira('')
      setMulta('')
      setCip('')
      setValor_pis('')
      setValor_cofins('')
      return;
    } catch (error) {
        return console.log(error.message);
    }
  }

  return (
    <div className="c_Energia">
      <Menu/>

      <div className = 'container_energia'>
        <h1>Cadastro de Conta de Energia</h1>
        <div className = 'container-dados'>
          <form onSubmit={handleSubmit}>
            <h2>Dados Concessionaria</h2>
            <div className = 'coluna'>

              <TextField
                id="concessionaria" 
                className='input'
                type="text"
                label="Concessionaria"
                placeholder="Concessionaria"
                value={concessionaria}
                required={true}
                onChange={(e) => setConcessionaria(e.target.value)}
                variant="outlined"
              />
              

             
             <TextField
                id="cnpj_concessionaria" 
                className='input'
                type="text" 
                label="CNPJ Concessionaria"
                placeholder="CNPJ Concessionaria"
                value={cnpj_concessionaria}
                required={true}
                onChange={(e) => setCnpj_concessionaria(e.target.value)}  
                onBlur = {buscaConcessionaria}
                variant="outlined"
              />             

              <TextField
                id="cep_concessionaria"
                className='input'
                type="text"
                label="CEP Concessionaria"
                value={cep_concessionaria}
                disable
                variant="outlined"
              />
            </div>

            <div className = 'coluna'>
              <TextField
                id="endereco"
                className='input' 
                type="text"
                label="Endereço"
                disable
                value={endereco_concessionaria}
                variant="outlined"
              />
            </div>

            <h2>Dados Cliente</h2> 
            <div className = 'coluna'>

              <TextField
                id="cnpj_cpf_cliente"
                className='input'
                type="text" 
                required={true}
                label="CNPJ/CPF"
                placeholder="CNPJ/CPF"
                value={cnpj_cpf_cliente}
                onChange={(e) => setCnpj_cpf_cliente(e.target.value)}
                onBlur = {buscaUnidade}
                variant="outlined"
              />

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
                id="cep_cliente"
                className='input'
                type="text"
                label="CEP Cliente"
                disable
                value={cep_cliente}
                variant="outlined"
              />                               
            </div> 

            <div className = 'coluna'>

              <TextField
                id="endereco_cliente" 
                className='input'
                type="text" 
                label="Endereço Cliente"
                disable
                value={endereco_cliente}
                variant="outlined" 
              />
            </div> 

            <h2>Dados Conta</h2> 
            <div className = 'coluna'>
              <TextField
                id="nota_fiscal" 
                className='input'
                type="text"
                label="Nota fiscal"
                placeholder="Nota fiscal"
                value={nota_fiscal}
                required={true}
                onChange={(e) => setNota_fiscal(e.target.value)}
                variant="outlined" 
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_total"
                className='input'
                floatValue = {true}
                value={valor_total}
                required={true}
                label="Valor total (R$)"
                placeholder="Valor total (R$)"
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total ( floatValue  ) ; 
                } }
                variant="outlined"
              />
              <TextField
                id="numero_instalacao" 
                className='input'
                type="text" 
                label="N° Instalação"
                placeholder="N° Instalação"
                required={true}
                value={numero_instalacao}
                onChange={(e) => setNumero_instalacao(e.target.value)}  
                variant="outlined"  
              />
            </div>

            <div className = 'coluna'>
              <NumberFormat 
                id="data_vencimento"
                className='input'
                type="text" 
                required={true}
                format="##/##/####" 
                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                value={data_vencimento}
                label="Data Vencimento" 
                placeholder="Data Vencimento" 
                customInput={TextField}
                onChange={(e) => setData_vencimento(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="conta_mes"
                className='input'
                type="text" 
                required={true} 
                label="Conta Mês" 
                placeholder="Conta Mês"
                value={conta_mes}
                onChange={(e) => setConta_mes(e.target.value)}
                variant="outlined"   
              />
              <TextField
                id="bandeiraTarifariaVigente" 
                className='input'
                type="text" 
                required={true}
                label="Bandeira Tarifaria" 
                placeholder="Bandeira Tarifaria Vigente"
                value={bandeira_tarifaria_vigente}
                onChange={(e) => setBandeira_tarifaria_vigente(e.target.value)}
                variant="outlined"   
              /> 
            </div>

            <div className = 'coluna'>         
              <NumberFormat 
                id="emissao"
                className='input'
                type="text" 
                required={true}
                format="##/##/####" 
                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                value={emissao}
                label="Data Emissão"
                placeholder="Data Emissão" 
                customInput={TextField}
                onChange={(e) => setEmissao(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="dias_faturamento" 
                className='input'
                type="number" 
                required={true}
                label="N° Dias Faturamento" 
                placeholder="N° Dias Faturamento"
                value={dias_faturamento}
                onChange={(e) => setDias_faturamento(e.target.value)}
                variant="outlined"   
              />            
            </div>

            <p>Descrição do Consumo</p>

            <div className = 'coluna'>
              <TextField
                id="descricao_consumo"
                className='input'
                type="text" 
                label="Descrição"
                placeholder="Descrição"
                value={descricao_consumo}
                onChange={(e) => setDescricao_consumo(e.target.value)}
                variant="outlined"    
              /> 
              <TextField
                id="numero_medidor"
                className='input'
                type="text" 
                required={true}
                label="N° medidor" 
                placeholder="N° medidor"
                value={numero_medidor}
                onChange={(e) => setNumero_medidor(e.target.value)}
                variant="outlined"   
              />
              <TextField
                id="const_multi."
                className='input'
                type="number" 
                label="Const. Multi."  
                placeholder="Const. Multi."
                value={const_multa}
                onChange={(e) => setConst_multa(e.target.value)}
                variant="outlined"   
              />            
            </div>

            <div className = 'coluna'>
              <TextField
                id="kwhMes"
                className='input'
                type="number" 
                label="Qtd Kwh Mês" 
                placeholder="Qtd Kwh Mês"
                value={kwhMes}
                onChange={(e) => setKwhMes(e.target.value)}
                variant="outlined"   
              /> 
               <NumberFormat 
                id="valor_total_tusd" 
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={valor_total_tusd}
                label="Valor Total TUSD"
                placeholder="R$ "
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total_tusd ( floatValue  ) ; 
                } }
                variant="outlined"
              />
              <NumberFormat 
                id="valor_total_te"
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={valor_total_te}
                label="Valor Total TE"
                placeholder="R$"
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total_te ( floatValue  ) ; 
                } }
                variant="outlined"
              />
            </div> 

            <div className = 'coluna'>
              <NumberFormat 
                id="valor_total_bandeira"
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={valor_total_bandeira}
                label="Valor Bandeira Tarifária"
                placeholder="R$ "
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total_bandeira ( floatValue  ) ; 
                } }
                variant="outlined"
              /> 
            </div>

            <p>Itens Financeiros (Valores Totais)</p>

            <div className = 'coluna'>
              <NumberFormat 
                id="multa"
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={multa}
                label="Multa (R$)"
                placeholder="Multa (R$)"
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setMulta ( floatValue  ) ; 
                } }
                variant="outlined"
              />
              <NumberFormat 
                id="cip" 
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={cip}
                label="CIP"
                placeholder="CIP-Contribuição Municipal (R$)"
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setCip ( floatValue  ) ; 
                } }
                variant="outlined"
              />      
            </div>

             <p>Tributos</p>

             <div className = 'coluna'>
              <NumberFormat 
                id="valor_pis" 
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={valor_pis}
                label="Valor PIS"
                placeholder="R$ "
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_pis ( floatValue  ) ; 
                } }
                variant="outlined"
              />
              <NumberFormat 
                id="valor_cofins" 
                className='input'
                prefix={'R$ '} 
                floatValue = {true}
                value={valor_cofins}
                label="Valor COFINS"
                placeholder="R$ "
                customInput={TextField}
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_cofins ( floatValue  ) ; 
                } }
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
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContaEnergia;
