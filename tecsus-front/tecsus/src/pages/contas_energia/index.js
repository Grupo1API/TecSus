import React, { useState } from 'react';
import './style.css';
import Menu from '../../components/menu'

import NumberFormat from 'react-number-format';

function ContaEnergia() {

  const [concessionaria, setConcessionaria] = useState('')
  const [endereco_concessionaria, setEndereco_concessionaria] = useState('')
  const [cep_concessionaria, setCep_concessionaria] = useState('')
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState('')
  const [nome_cliente, setNome_cliente] = useState('')
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

  async function handleSubmit(event){
    event.preventDefault()
    const dado ={
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
      
      setConcessionaria('')
      setEndereco_concessionaria('')
      setCep_concessionaria('')
      setCnpj_concessionaria('')
      setNome_cliente('')
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
            <h2>Dados Concessionaria</h2>
            <div className = 'coluna'>
              <input 
                type="text" 
                id="numero_instalacao" 
                placeholder="N° Instalação"
                required={true}
                value={numero_instalacao}
                onChange={(e) => setNumero_instalacao(e.target.value)}  
              />
              <input 
                type="text" 
                id="concessionaria" 
                placeholder="Concessionaria"
                value={concessionaria}
                required={true}
                onChange={(e) => setConcessionaria(e.target.value)}  
              />
              <input 
                type="text" 
                id="cnpj_concessionaria" 
                placeholder="CNPJ Concessionaria"
                value={cnpj_concessionaria}
                required={true}
                onChange={(e) => setCnpj_concessionaria(e.target.value)}  
              />              
            </div>
            <div className = 'coluna'>
              <input 
                type="text" 
                id="endereco" 
                placeholder="Endereço"
                value={endereco_concessionaria}
                onChange={(e) => setEndereco_concessionaria(e.target.value)}  
              />
              <input 
                type="text" 
                id="cep_concessionaria" 
                placeholder="CEP Concessionaria"
                value={cep_concessionaria}
                onChange={(e) => setCep_concessionaria(e.target.value)}  
              />
              <input 
                type="text" 
                id="nome_cliente" 
                placeholder="Nome Cliente"
                value={nome_cliente}
                required={true}
                onChange={(e) => setNome_cliente(e.target.value)}
              />
            </div>
            <div className = 'coluna'>
              <input 
                type="text" 
                id="cnpj_cpf_cliente"
                placeholder="CNPJ/CPF"
                value={cnpj_cpf_cliente}
                onChange={(e) => setCnpj_cpf_cliente(e.target.value)}
              />
              <input 
                type="text" 
                id="cep_cliente" 
                placeholder="CEP Cliente"
                value={cep_cliente}
                required={true}
                onChange={(e) => setCep_cliente(e.target.value)}  
              /> 
              <input 
              type="text" 
              id="endereco_cliente" 
              placeholder="Endereço Cliente"
              value={endereco_cliente}
              onChange={(e) => setEndereco_cliente(e.target.value)}  
              />                                    
            </div>          
            <h2>Dados Conta</h2> 
            <div className = 'coluna'>
              <input 
                type="text" 
                id="nota_fiscal" 
                placeholder="Nota fiscal"
                value={nota_fiscal}
                required={true}
                onChange={(e) => setNota_fiscal(e.target.value)}
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_total"
                floatValue = {true}
                value={valor_total}
                required={true}
                placeholder="Valor total (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total ( floatValue  ) ; 
                } }
              />
               <input 
                type="number" 
                id="consumoKwh"
                required={true} 
                placeholder="Consumo Kwh"
                value={consumoKwh}
                onChange={(e) => setConsumoKwh(e.target.value)}
              />              

            </div>
            <div className = 'coluna'>
              <NumberFormat 
                type="text" 
                id="data_vencimento"
                required={true}
                format="##/##/####" 
                value={data_vencimento}
                onChange={(e) => setData_vencimento(e.target.value)}
                placeholder="Data Vencimento" 
                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
              />
              <input 
                type="text" 
                id="conta_mes"
                required={true} 
                placeholder="Conta Mês"
                value={conta_mes}
                onChange={(e) => setConta_mes(e.target.value)}
              />
              <input 
                type="text" 
                id="bandeiraTarifaria" 
                required={true}
                placeholder="Bandeira Tarifaria"
                value={bandeiraTarifaria}
                onChange={(e) => setBandeiraTarifaria(e.target.value)}
              />      
            </div>
            <div className = 'coluna'>        
              <NumberFormat 
                type="text" 
                id="emissao"
                required={true}
                format="##/##/####" 
                value={emissao}
                onChange={(e) => setEmissao(e.target.value)}
                placeholder="Data Emissão" 
                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
              />
              <input 
                type="number" 
                required={true}
                id="dias_faturamento" 
                placeholder="N° Dias Faturamento"
                value={dias_faturamento}
                onChange={(e) => setDias_faturamento(e.target.value)}
              />              
            </div>

            <p>Descrição do Consumo</p>

            <div className = 'coluna'>
              <input 
                type="text" 
                id="descricao_consumo" 
                placeholder="Descrição"
                value={descricao_consumo}
                onChange={(e) => setDescricao_consumo(e.target.value)}
              />
              <input 
                type="text" 
                id="numero_medidor" 
                required={true}
                placeholder="N° medidor"
                value={numero_medidor}
                onChange={(e) => setNumero_medidor(e.target.value)}
              />
              <input 
                type="number" 
                id="const_multa" 
                placeholder="Const. Multa"
                value={const_multa}
                onChange={(e) => setConst_multa(e.target.value)}
              />              
            </div>
            <div className = 'coluna'>
              <input 
                type="number" 
                id="kwhMes" 
                placeholder="Qtd Kwh Mês"
                value={kwhMes}
                onChange={(e) => setKwhMes(e.target.value)}
              />
            </div>           
            <p>Descrição do Produto TUSD - Consumo </p>

            <div className = 'coluna'>
              <input 
                type="number" 
                id="qtdKwh_tusd" 
                placeholder="Quantidades kWh"
                value={qtdKwh_tusd}
                onChange={(e) => setQtdKwh_tusd(e.target.value)}
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="tarifa_aplicada_tusd"
                floatValue = {true}
                value={tarifa_aplicada_tusd}
                placeholder="Taria Aplicada (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setTarifa_aplicada_tusd ( floatValue  ) ; 
                } }
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_fornecimento_tusd" 
                floatValue = {true}
                value={valor_fornecimento_tusd}
                placeholder="Valor do Fornecimento (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_fornecimento_tusd ( floatValue  ) ; 
                } }
              />
              
              
            </div>
            <div className = 'coluna'>
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_total_tusd" 
                floatValue = {true}
                value={valor_total_tusd}
                placeholder="Valor Total (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total_tusd ( floatValue  ) ; 
                } }
              />
            </div>

            <p>Descrição do Produto TE - Consumo </p>

            <div className = 'coluna'>
              <input 
                type="number" 
                id="qtdKwh_te" 
                placeholder="Quantidades kWh"
                value={qtdKwh_te}
                onChange={(e) => setQtdKwh_te(e.target.value)}
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="tarifa_aplicada_te"  
                floatValue = {true}
                value={tarifa_aplicada_te}
                placeholder="Taria Aplicada (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setTarifa_aplicada_te ( floatValue  ) ; 
                } }
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_fornecimento_te"  
                floatValue = {true}
                value={valor_fornecimento_te}
                placeholder="Valor do Fornecimento (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_fornecimento_te ( floatValue  ) ; 
                } }
              />
              
            </div>
            <div className = 'coluna'>
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_total_te"
                floatValue = {true}
                value={valor_total_te}
                placeholder="Valor Total (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total_te ( floatValue  ) ; 
                } }
              />
            </div>

            <p>Descrição do Produto Adicional bandeiras vigentes </p>

            <div className = 'coluna'>
              <input 
                type="number" 
                id="qtdKwh_bandeira" 
                placeholder="Quantidades kWh"
                value={qtdKwh_bandeira}
                onChange={(e) => setQtdKwh_bandeira(e.target.value)}
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="tarifa_aplicada_bandeira"
                floatValue = {true}
                value={tarifa_aplicada_bandeira}
                placeholder="Taria Aplicada (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setTarifa_aplicada_bandeira ( floatValue  ) ; 
                } }
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_fornecimento_bandeira"
                floatValue = {true}
                value={valor_fornecimento_bandeira}
                placeholder="Valor do Fornecimento (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_fornecimento_bandeira ( floatValue  ) ; 
                } }
              />
              
            </div>
            <div className = 'coluna'>
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_total_bandeira"
                floatValue = {true}
                value={valor_total_bandeira}
                placeholder="Valor Total (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_total_bandeira ( floatValue  ) ; 
                } }
              />
            </div>

            <p>Itens Financeiros (Valores Totais)</p>

            <div className = 'coluna'>
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
                <NumberFormat 
                prefix={'R$ '} 
                id="cip" 
                floatValue = {true}
                value={cip}
                placeholder="CIP-Contribuição Municipal (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setCip ( floatValue  ) ; 
                } }
              />      
            </div>

            <p>Tributos (PIS)</p>

            <div className = 'coluna'>
              <input 
                type="number" 
                id="base_calculo_pis" 
                placeholder="Base de Calculo"
                value={base_calculo_pis}
                onChange={(e) => setBase_calculo_pis(e.target.value)}
              />
              <input 
                type="number" 
                id="aliquota_pis" 
                placeholder="Aliquota"
                value={aliquota_pis}
                onChange={(e) => setAliquota_pis(e.target.value)}
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_pis" 
                floatValue = {true}
                value={valor_pis}
                placeholder="Valor (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_pis ( floatValue  ) ; 
                } }
              />
            </div>

            <p>Tributos (COFINS)</p>

            <div className = 'coluna'>
              <input 
                type="number" 
                id="base_calculo_cofins" 
                placeholder="Base de Calculo"
                value={base_calculo_cofins}
                onChange={(e) => setBase_calculo_cofins(e.target.value)}
              />
              <input 
                type="number" 
                id="aliquota_cofins" 
                placeholder="Aliquota"
                value={aliquota_cofins}
                onChange={(e) => setAliquota_cofins(e.target.value)}
              />
              <NumberFormat 
                prefix={'R$ '} 
                id="valor_cofins"  
                floatValue = {true}
                value={valor_cofins}
                placeholder="Valor (R$)"
                onValueChange = { ( valores )  =>  { 
                  const  {floatValue}  =  valores ; 
                  setValor_cofins ( floatValue  ) ; 
                } }
              />
            </div>
            
            <div className="bt-container">
                <button type='button' className="cadastrar" id="upload">UPLOAD</button>
                <button type="submit" className="cadastrar" id="botao_cad">ENVIAR</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContaEnergia;
