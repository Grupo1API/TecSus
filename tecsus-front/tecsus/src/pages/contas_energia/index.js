import './style.css';
import Menu from '../../components/menu'
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContaEnergia() {

  // Dados anteriores
  const [cnpj_cpf_cliente, setCnpj_cpf_cliente] = useState('')
  const [endereco_cliente, setEndereco_cliente] = useState('')
  const [cep_cliente, setCep_cliente] = useState('')
  const [nota_fiscal, setNota_fiscal] = useState('')
  const [valor_total, setValor_total] = useState('')
  const [numero_instalacao, setNumero_instalacao] = useState('')
  const [consumoKwh, setConsumoKwh] = useState('')
  const [data_vencimento, setData_vencimento] = useState('')
  const [conta_mes, setConta_mes] = useState('')
  const [bandeiraTarifaria, setBandeiraTarifaria] = useState('')
  const [emissao, setEmissao] = useState('')
  const [dias_faturamento, setDias_faturamento] = useState('')
  const [descricao_consumo, setDescricao_consumo] = useState('')
  const [numero_medidor, setNumero_medidor] = useState('')
  const [const_multa, setConst_multa] = useState('')
  const [kwhMes, setKwhMes] = useState('')

  // Dados que reperitram (Eu apaguei os repetidos)
  const [concessionaria, setConcessionaria] = useState('')        //marcar como novo no cadastro 
  const [endereco_concessionaria, setEndereco_concessionaria] = useState('')
  const [cep_concessionaria, setCep_concessionaria] = useState('')

  // Novos dados
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
  const [end_eletrico, setEnd_eletrico] = useState('')
  

  const [qtdKwh_tusd, setQtdKwh_tusd] = useState('')
  const [tarifa_aplicada_tusd, setTarifa_aplicada_tusd] = useState('')
  const [valor_fornecimento_tusd, setValor_fornecimento_tusd] = useState('')
  const [valor_total_tusd, setValor_total_tusd] = useState('')

  const [qtdKwh_te, setQtdKwh_te] = useState('')
  const [tarifa_aplicada_te, setTarifa_aplicada_te] = useState('')
  const [valor_fornecimento_te, setValor_fornecimento_te] = useState('')
  const [valor_total_te, setValor_total_te] = useState('')

  const [qtdKwh_bandeira, setQtdKwh_bandeira] = useState('')
  const [tarifa_aplicada_bandeira, setTarifa_aplicada_bandeira] = useState('')
  const [valor_fornecimento_bandeira, setValor_fornecimento_bandeira] = useState('')
  const [valor_total_bandeira, setValor_total_bandeira] = useState('')

  const [multa, setMulta] = useState('')
  const [cip, setCip] = useState('')

  const [base_calculo_pis, setBase_calculo_pis] = useState('')
  const [aliquota_pis, setAliquota_pis] = useState('')
  const [valor_pis, setValor_pis] = useState('')
  const [base_calculo_cofins, setBase_calculo_cofins] = useState('')
  const [aliquota_cofins, setAliquota_cofins] = useState('')
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
      
      // Dados anteriores
      concessionaria:concessionaria,
      endereco_concessionaria:endereco_concessionaria,
      cep_concessionaria:cep_concessionaria,
      cnpj_concessionaria:cnpj_concessionaria,
      nome_cliente:nome_cliente,
      cpf_cnpj_cliente:cnpj_cpf_cliente,
      endereco_cliente:endereco_cliente,
      cep_cliente:cep_cliente,
      nota_fiscal:nota_fiscal,
      valor_total:Number(valor_total),
      numero_instalacao:numero_instalacao,
      consumo_kwh_mes:consumoKwh,
      
      concessionaria_cnpj:cnpj_concessionaria,  

      // Dados repetidos
      nome_unidade:nome_cliente, // Aqui
      cpf_cnpj:cpf_cnpj_cliente, // Aqui

      // Dados novos
      codigo_identificador:codigo_identificador, 
      codigo_fiscal_operacao:codigo_fiscal, 
      grupo_subgrupo:grupo_sub, 
      classe_subclasse:classe_sub, 
      tp_fornecimento:tp_fornecimento, 
      modalidade_tarifaria:modalidade_taf, 
      tensao_nominal:tensao_nominal, 
      roteiro_leitura:roteiro_leitura, 
      num_medidor:medidor, 
      endereco_eletrico:end_eletrico, 

      // Esses estão dando erros no sistema
      
      /*
      cnpj_cpf_ci:cpf_cnpj_ci, 
      local_cep:cep_consumo, 
      local_rua:rua_consumo, 
      local_bairro:bairro_consumo, 
      local_cidade:cidade_consumo, 
      local_estado:estado_consumo, 
      local_numero:nResidencial_empresarial, 
      */

      data_vencimento:formatarData(data_vencimento),
      conta_mes:conta_mes,
      bandeira_tarifaria:bandeiraTarifaria,
      emissao:formatarData(emissao),
      num_dias_faturamento:dias_faturamento,
      descricao_consumo:descricao_consumo,
      numero_medidor:numero_medidor,
      const_mult:const_multa,
      quantidade_kwh_mes:kwhMes,
      quantidade_kwh_tusd:qtdKwh_tusd,
      tarifa_aplicada_tusd:tarifa_aplicada_tusd,
      valor_fornecimento_tusd:valor_fornecimento_tusd,
      valor_total_tusd:valor_total_tusd,
      quantidade_kwh_te:qtdKwh_te,
      tarifa_aplicada_te:tarifa_aplicada_te,
      valor_fornecimento_te:valor_fornecimento_te,
      valor_total_te:valor_total_te,
      quantidade_kwh_abv:qtdKwh_bandeira,
      tarifa_aplicada_abv:tarifa_aplicada_bandeira,
      valor_fornecimento_abv:valor_fornecimento_bandeira,
      valor_total_abv:valor_total_bandeira,
      valor_multa:multa,
      valor_cip_contrib_municipal:cip,
      base_calculo_pis:base_calculo_pis,
      aliquota_pis:aliquota_pis,
      valor_pis:valor_pis,
      base_calculo_cofins:base_calculo_cofins,
      aliquota_cofins:aliquota_cofins,
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
      

      // Implementação dos novos dados
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
      setEnd_eletrico('')
      /*
      setCpf_cnpj_ci('')
      setCep_consumo('')
      setRua_consumo('')
      setBairro_consumo('')
      setCidade_consumo('')
      setEstado_consumo('')
      setNResidencial_empresarial('')
      */

      // Dados que reperitram (Eu apaguei os repetidos)
      setConcessionaria('')
      setEndereco_concessionaria('')
      setCep_concessionaria('')

      // Dados antigos
      setCnpj_cpf_cliente('')
      setEndereco_cliente('')
      setCep_cliente('')
      setNota_fiscal('')
      setValor_total('')
      setNumero_instalacao('')
      setConsumoKwh('')
      setData_vencimento('')
      setConta_mes('')
      setBandeiraTarifaria('')
      setEmissao('')
      setDias_faturamento('')
      setDescricao_consumo('')
      setNumero_medidor('')
      setConst_multa('')
      setKwhMes('')
      setQtdKwh_tusd('')
      setTarifa_aplicada_tusd('')
      setValor_fornecimento_tusd('')
      setValor_total_tusd('')
      setQtdKwh_te('')
      setTarifa_aplicada_te('')
      setValor_fornecimento_te('')
      setValor_total_te('')
      setQtdKwh_bandeira('')
      setTarifa_aplicada_bandeira('')
      setValor_fornecimento_bandeira('')
      setValor_total_bandeira('')
      setMulta('')
      setCip('')
      setBase_calculo_pis('')
      setAliquota_pis('')
      setValor_pis('')
      setBase_calculo_cofins('')
      setAliquota_cofins('')
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
            <h2>Dados do Contrato</h2>

              <div className='coluna'>
              <TextField
                  id="tp_fornecimento" 
                  className='input' 
                  type="text" 
                  required={true}
                  label="TP Fornecimencto"
                  placeholder="TP Fornecimento"
                  value={tp_fornecimento}
                  onChange={(e) => setTp_fornecimento(e.target.value)} 
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
                  onBlur = {buscaConcessionaria}
                  variant="outlined"
              />
              <TextField
                  id="concessionaria" 
                  className='input'
                  type='text'
                  disable
                  label="Concessionária"                                
                  value={concessionaria}
                  variant="outlined"
              /> 

            </div> 

            
            <div className='coluna'>
              <TextField
                  id="cep_concessionaria"
                  className='input'
                  type="text"
                  label="CEP Concessionaria"
                  value={cep_concessionaria}
                  disable
                  variant="outlined"
              />


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
                  id="nome_cliente" 
                  className='input'
                  type="text" 
                  label="Nome Unidade"
                  disable 
                  value={nome_cliente}
                  variant="outlined"
              />                  

            </div> 

            <div className = 'coluna'>
                           

              <TextField
                  id="cep_cliente"
                  className='input'
                  type="text"
                  label="CEP Unidade"
                  disable
                  value={cep_cliente}
                  variant="outlined"
              />
              
              <TextField 
                    id="codigo_identificador" 
                    type="number" 
                    className='input' 
                    required={true}
                    label="Código Identificador"
                    placeholder="Código Identificador" 
                    value={codigo_identificador}
                    variant="outlined"
                    onChange={(e) => setCodigo_identificador(e.target.value)}
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
                      id="modalidade_taf" 
                      className='input' 
                      type="text" 
                      label="Modalidade Tarifaria"
                      placeholder="Modalidade Tarifaria"
                      value={modalidade_taf}
                      onChange={(e) => setModalidade_taf(e.target.value)}  
                      variant="outlined" 
                  />


            </div>

            <div className='coluna'>
                 
                
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

            </div>


            <h2>Dados Conta</h2> 
            <div className = 'coluna'>
              {/* 10 */}
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
              {/* 11 */}
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
              {/* 12 */}
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
              
              {/* 13 */}
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
              {/* 14 */}
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
              {/* 15 */}
              <TextField
                id="bandeiraTarifaria" 
                className='input'
                type="text" 
                required={true}
                label="Bandeira Tarifaria" 
                placeholder="Bandeira Tarifaria"
                value={bandeiraTarifaria}
                onChange={(e) => setBandeiraTarifaria(e.target.value)}
                variant="outlined"   
              /> 
            </div>

            <div className = 'coluna'>  
              {/* 16 */}          
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
              {/* 17 */}
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
              {/* 18 */}
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
              {/* 19 */}
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
              {/* 20 */}
              <TextField
                id="const_multa"
                className='input'
                type="number" 
                label="Const. Multa"  
                placeholder="Const. Multa"
                value={const_multa}
                onChange={(e) => setConst_multa(e.target.value)}
                variant="outlined"   
              />            
            </div>

            <div className = 'coluna'>
              {/* 21 */}
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
               {/* 22 */}
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
              {/* 23 */}
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
              {/* 24 */}
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
              {/* 25 */}
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
              {/* 26 */}
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

              {/* 27 */} 
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

              {/* 28 */}
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