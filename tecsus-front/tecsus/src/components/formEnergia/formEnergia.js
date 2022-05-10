import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../pages/quadro_energia/style";

export default function EditClientes({ dados, modalEdit }) {
  const classes = useStyles();
  
  const [numero_instalacao, setNumero_instalacao] = useState(dados.numero_instalacao)
  const [concessionaria, setConcessionaria] = useState(dados.concessionaria)
  const [endereco_concessionaria, setEndereco_concessionaria] = useState(dados.endereco_concessionaria)
  const [cep_concessionaria, setCep_concessionaria] = useState(dados.cep_concessionaria)
  const [cnpj_concessionaria, setCnpj_concessionaria] = useState(dados.cnpj_concessionaria)
  const [nome_cliente, setNome_cliente] = useState(dados.nome_cliente)
  const [endereco_cliente, setEndereco_cliente] = useState(dados.endereco_cliente)
  const [cep_cliente, setCep_cliente] = useState(dados.cep_cliente)
  const [nota_fiscal, setNota_fiscal] = useState(dados.nota_fiscal)
  const [valor_total, setValor_total] = useState(dados.valor_total)
  const [consumo_kwh_mes, setConsumo_kwh_mes] = useState(dados.consumo_kwh_mes)
  const [data_vencimento, setData_vencimento] = useState(dados.data_vencimento)
  const [conta_mes, setConta_mes] = useState(dados.conta_mes)
  const [bandeira_tarifaria, setBandeira_tarifaria] = useState(dados.bandeira_tarifaria)
  const [emissao, setEmissao] = useState(dados.emissao)
  const [num_dias_faturamento, setNum_dias_faturamento] = useState(dados.num_dias_faturamento)
  const [descricao_consumo, setDescricao_consumo] = useState(dados.descricao_consumo)
  const [numero_medidor, setNumero_medidor] = useState(dados.numero_medidor)
  const [const_mult, setConst_mult] = useState(dados.const_mult)
  const [quantidade_kwh_mes, setQuantidade_kwh_mes] = useState(dados.quantidade_kwh_mes)
  const [quantidade_kwh_tusd, setQuantidade_kwh_tusd] = useState(dados.quantidade_kwh_tusd)
  const [tarifa_aplicada_tusd, seTarifa_aplicada_tusd] = useState(dados.tarifa_aplicada_tusd)
  const [valor_fornecimento_tusd, setValor_fornecimento_tusd] = useState(dados.valor_fornecimento_tusd)
  const [valor_total_tusd, setValor_total_tusd] = useState(dados.valor_total_tusd)
  const [quantidade_kwh_te, setQuantidade_kwh_te] = useState(dados.quantidade_kwh_te)
  const [tarifa_aplicada_te, setTarifa_aplicada_te] = useState(dados.tarifa_aplicada_te)
  const [valor_fornecimento_te, setValor_fornecimento_te] = useState(dados.valor_fornecimento_te)
  const [valor_total_te, setValor_total_te] = useState(dados.valor_total_te)
  const [quantidade_kwh_abv, setQuantidade_kwh_abv] = useState(dados.quantidade_kwh_abv)
  const [tarifa_aplicada_abv, setTarifa_aplicada_abv] = useState(dados.tarifa_aplicada_abv)
  const [valor_fornecimento_abv, setValor_fornecimento_abv] = useState(dados.valor_fornecimento_abv)
  const [valor_total_abv, setValor_total_abv] = useState(dados.valor_total_abv)
  const [base_calculo_itens, setBase_calculo_itens] = useState(dados.base_calculo_itens)
  const [valor_multa, setValor_multa] = useState(dados.valor_multa)
  const [valor_cip_contrib_municipal, setValor_cip_contrib_municipal] = useState(dados.valor_cip_contrib_municipal)
  const [base_calculo_pis, setBase_calculo_pis] = useState(dados.base_calculo_pis)
  const [aliquota_pis, setAliquota_pis] = useState(dados.aliquota_pis)
  const [valor_pis, setValor_pis] = useState(dados.valor_pis)
  const [base_calculo_cofins, setBase_calculo_cofins] = useState(dados.base_calculo_cofins)
  const [aliquota_cofins, setAliquota_cofins] = useState(dados.aliquota_cofins)
  const [valor_cofins, setValor_cofins]= useState(dados.valor_cofins)
 

  async function handleUpdate() {
    const data = {
      id:dados.id,
      numero_instalacao:numero_instalacao, 
      concessionaria:concessionaria, 
      endereco_concessionaria:endereco_concessionaria, 
      cep_concessionaria:cep_concessionaria, 
      cnpj_concessionaria:cnpj_concessionaria, 
      nome_cliente:nome_cliente, 
      endereco_cliente:endereco_cliente, 
      cep_cliente:cep_cliente, 
      nota_fiscal:nota_fiscal, 
      valor_total:valor_total, 
      consumo_kwh_mes:consumo_kwh_mes, 
      data_vencimento:data_vencimento, 
      conta_mes:conta_mes, 
      bandeira_tarifaria:bandeira_tarifaria, 
      emissao:emissao, 
      num_dias_faturamento:num_dias_faturamento, 
      descricao_consumo:descricao_consumo, 
      numero_medidor:numero_medidor, 
      const_mult:const_mult, 
      quantidade_kwh_mes:quantidade_kwh_mes, 
      quantidade_kwh_tusd:quantidade_kwh_tusd, 
      tarifa_aplicada_tusd:tarifa_aplicada_tusd, 
      valor_fornecimento_tusd:valor_fornecimento_tusd, 
      valor_total_tusd:valor_total_tusd, 
      quantidade_kwh_te:quantidade_kwh_te, 
      tarifa_aplicada_te:tarifa_aplicada_te, 
      valor_fornecimento_te:valor_fornecimento_te, 
      valor_total_te:valor_total_te, 
      quantidade_kwh_abv:quantidade_kwh_abv, 
      tarifa_aplicada_abv:tarifa_aplicada_abv, 
      valor_fornecimento_abv:valor_fornecimento_abv, 
      valor_total_abv:valor_total_abv, 
      base_calculo_itens:base_calculo_itens,
      valor_multa:valor_multa,
      valor_cip_contrib_municipal:valor_cip_contrib_municipal,
      base_calculo_pis:base_calculo_pis,
      aliquota_pis:aliquota_pis,
      valor_pis:valor_pis,
      base_calculo_cofins:base_calculo_cofins,
      aliquota_cofins:aliquota_cofins,
      valor_cofins:valor_cofins,
  };
    await fetch(`http://localhost:8080/contadeenergia/atualizar`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
console.log(dados)
  return (
    <form className={classes.root} onSubmit={handleUpdate}>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Número de Instalação"
          variant="outlined"
          fullWidth
          onChange={(e) => setNumero_instalacao(e.target.value)}
          value={numero_instalacao}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Concessionária"
          variant="outlined"
          fullWidth
          onChange={(e) => setConcessionaria(e.target.value)}
          value={concessionaria}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Endereço"
          variant="outlined"
          fullWidth
          onChange={(e) => setEndereco_concessionaria(e.target.value)}
          value={endereco_concessionaria}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-password-input"
          label="CEP"
          variant="outlined"
          fullWidth
          onChange={(e) => setCep_concessionaria(e.target.value)}
          value={cep_concessionaria}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CNPJ"
          variant="outlined"
          fullWidth
          onChange={(e) => setCnpj_concessionaria(e.target.value)}
          value={cnpj_concessionaria}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nome do Cliente"
          variant="outlined"
          fullWidth
          onChange={(e) => setNome_cliente(e.target.value)}
          value={nome_cliente}
        />
      </div>
      
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Endereço"
          variant="outlined"
          fullWidth
          onChange={(e) => setEndereco_cliente(e.target.value)}
          value={endereco_cliente}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CEP Cliente"
          variant="outlined"
          fullWidth
          onChange={(e) => setCep_cliente(e.target.value)}
          value={cep_cliente}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nota Fiscal"
          variant="outlined"
          fullWidth
          onChange={(e) => setNota_fiscal(e.target.value)}
          value={nota_fiscal}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Total"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_total(e.target.value)}
          value={valor_total}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Consumo Kwh"
          variant="outlined"
          fullWidth
          onChange={(e) => setConsumo_kwh_mes(e.target.value)}
          value={consumo_kwh_mes}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Data de Vencimento"
          variant="outlined"
          fullWidth
          onChange={(e) => setData_vencimento(e.target.value)}
          value={data_vencimento}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Conta Mês Referência"
          variant="outlined"
          fullWidth
          onChange={(e) => setConta_mes(e.target.value)}
          value={conta_mes}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Bandeira Tarifaria"
          variant="outlined"
          fullWidth
          onChange={(e) => setBandeira_tarifaria(e.target.value)}
          value={bandeira_tarifaria}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Data de Emissão"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmissao(e.target.value)}
          value={emissao}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="N° Dias Faturamento"
          variant="outlined"
          fullWidth
          onChange={(e) => setNum_dias_faturamento(e.target.value)}
          value={num_dias_faturamento}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Descrição Consumo"
          variant="outlined"
          fullWidth
          onChange={(e) => setDescricao_consumo(e.target.value)}
          value={descricao_consumo}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="N° Medidor"
          variant="outlined"
          fullWidth
          onChange={(e) => setNumero_medidor(e.target.value)}
          value={numero_medidor}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Const. Multa"
          variant="outlined"
          fullWidth
          onChange={(e) => setConst_mult(e.target.value)}
          value={const_mult}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Qtd Kwh Mês"
          variant="outlined"
          fullWidth
          onChange={(e) => setQuantidade_kwh_mes(e.target.value)}
          value={quantidade_kwh_mes}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Quantidade Kwh"
          variant="outlined"
          fullWidth
          onChange={(e) => setQuantidade_kwh_tusd(e.target.value)}
          value={quantidade_kwh_tusd}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Tarifa Aplicada R$"
          variant="outlined"
          fullWidth
          onChange={(e) => seTarifa_aplicada_tusd(e.target.value)}
          value={tarifa_aplicada_tusd}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Fornercimento R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_fornecimento_tusd(e.target.value)}
          value={valor_fornecimento_tusd}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Total R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_total_tusd(e.target.value)}
          value={valor_total_tusd}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Quantidade Kwh"
          variant="outlined"
          fullWidth
          onChange={(e) => setQuantidade_kwh_te(e.target.value)}
          value={quantidade_kwh_te}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Tarifa Aplicada R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setTarifa_aplicada_te(e.target.value)}
          value={tarifa_aplicada_te}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Fornecimento R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_fornecimento_te(e.target.value)}
          value={valor_fornecimento_te}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Total R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_total_te(e.target.value)}
          value={valor_total_te}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Quantidade Kwh"
          variant="outlined"
          fullWidth
          onChange={(e) => setQuantidade_kwh_abv(e.target.value)}
          value={quantidade_kwh_abv}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Tarifa Aplicada R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setTarifa_aplicada_abv(e.target.value)}
          value={tarifa_aplicada_abv}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Fornecimento R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_fornecimento_abv(e.target.value)}
          value={valor_fornecimento_abv}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Total R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_total_abv(e.target.value)}
          value={valor_total_abv}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Base de calculo"
          variant="outlined"
          fullWidth
          onChange={(e) => setBase_calculo_itens(e.target.value)}
          value={base_calculo_itens}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Multa R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_multa(e.target.value)}
          value={valor_multa}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="CIP - Contribuição Municipal R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_cip_contrib_municipal(e.target.value)}
          value={valor_cip_contrib_municipal}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Base de Calculo"
          variant="outlined"
          fullWidth
          onChange={(e) => setBase_calculo_pis(e.target.value)}
          value={base_calculo_pis}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Aliquota"
          variant="outlined"
          fullWidth
          onChange={(e) => setAliquota_pis(e.target.value)}
          value={aliquota_pis}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor PIS R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_pis(e.target.value)}
          value={valor_pis}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Base do Calculo"
          variant="outlined"
          fullWidth
          onChange={(e) => setBase_calculo_cofins(e.target.value)}
          value={base_calculo_cofins}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Aliquota Cofins"
          variant="outlined"
          fullWidth
          onChange={(e) => setAliquota_cofins(e.target.value)}
          value={aliquota_cofins}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Valor Cofins R$"
          variant="outlined"
          fullWidth
          onChange={(e) => setValor_cofins(e.target.value)}
          value={valor_cofins}
        />
      </div>
      <Button
        //onClick={()=>handleUpdate()}
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
