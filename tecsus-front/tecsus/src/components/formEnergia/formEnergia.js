import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../../style/style";
import NumberFormat from "react-number-format";
import baseURL from "../../utils";

export default function EditEnergia({ dados, modalEdit }) {
  const classes = useStyles();

  const concessionaria = dados.contrato_concessionaria_id.nome;
  const cnpj_concessionaria = dados.contrato_concessionaria_id.cnpj;
  const nome_cliente = dados.contrato_unidade_id.nome;
  const cpf_cnpj_cliente = dados.contrato_unidade_id.cpf_cnpj;
  const [codigo_identificador, setCodigo_identificador] = useState(
    dados.codigo_identificador
  );
  const [codigo_fiscal, setCodigo_fiscal] = useState(
    dados.codigo_fiscal_operacao
  );
  const [grupo_sub, setGrupo_sub] = useState(dados.grupo_subgrupo);
  const [classe_sub, setClasse_sub] = useState(dados.classe_subclasse);
  const [tp_fornecimento, setTp_fornecimento] = useState(dados.tp_fornecimento);
  const [modalidade_taf, setModalidade_taf] = useState(
    dados.modalidade_tarifaria
  );
  const [tensao_nominal, setTensao_nominal] = useState(dados.tensao_nominal);
  const [roteiro_leitura, setRoteiro_leitura] = useState(dados.roteiro_leitura);
  const [medidor, setMedidor] = useState(dados.num_medidor);
  const [valor_medio, setValor_medio] = useState(dados.valor_medio);
  const [end_eletrico, setEnd_eletrico] = useState(dados.endereco_eletrico);
  const [cpf_cnpj_ci, setCpf_cnpj_ci] = useState(dados.cnpj_cpf_ci);
  const [cep_consumo, setCep_consumo] = useState(dados.local_cep);
  const [rua_consumo, setRua_consumo] = useState(dados.local_rua);
  const [bairro_consumo, setBairro_consumo] = useState(dados.local_bairro);
  const [cidade_consumo, setCidade_consumo] = useState(dados.local_cidade);
  const [estado_consumo, setEstado_consumo] = useState(dados.local_estado);
  const [nResidencial_empresarial, setNResidencial_empresarial] = useState(
    dados.local_numero
  );
  const [consumo_medio, setConsumo_medio] = useState(dados.media_consumo_kwm)

  async function handleUpdate() {
    const data = {
      id: dados.id,
      concessionaria: concessionaria,
      concessionaria_cnpj: cnpj_concessionaria,
      nome_unidade: nome_cliente,
      cpf_cnpj: cpf_cnpj_cliente,
      codigo_identificador: codigo_identificador,
      codigo_fiscal_operacao: codigo_fiscal,
      grupo_subgrupo: grupo_sub,
      classe_subclasse: classe_sub,
      tp_fornecimento: tp_fornecimento,
      modalidade_tarifaria: modalidade_taf,
      tensao_nominal: tensao_nominal,
      roteiro_leitura: roteiro_leitura,
      num_medidor: medidor,
      valor_medio: valor_medio,
      endereco_eletrico: end_eletrico,
      cnpj_cpf_ci: cpf_cnpj_ci,
      local_cep: cep_consumo,
      local_rua: rua_consumo,
      local_bairro: bairro_consumo,
      local_cidade: cidade_consumo,
      local_estado: estado_consumo,
      local_numero: nResidencial_empresarial,
      media_consumo_kwm: consumo_medio
    };

    await fetch(`${baseURL}/contratoenergia/atualizar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <form className={classes.root} onSubmit={handleUpdate}>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="CNPJ concessionaria"
          variant="outlined"
          fullWidth
          disabled
          value={cnpj_concessionaria}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Concessionaria"
          variant="outlined"
          fullWidth
          disabled
          value={concessionaria}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="number"
          label="CNPJ/CPF Unidade"
          variant="outlined"
          fullWidth
          disabled
          value={cpf_cnpj_cliente}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined-password-input"
          type="text"
          label="Nome Unidade"
          variant="outlined"
          fullWidth
          disabled
          value={nome_cliente}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="codigo Identificador"
          variant="outlined"
          fullWidth
          onChange={(e) => setCodigo_identificador(e.target.value)}
          value={codigo_identificador}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Codigo Fiscal"
          variant="outlined"
          fullWidth
          onChange={(e) => setCodigo_fiscal(e.target.value)}
          value={codigo_fiscal}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="Grupo/Subgrupo"
          variant="outlined"
          fullWidth
          onChange={(e) => setGrupo_sub(e.target.value)}
          value={grupo_sub}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Classe/Subclasse"
          variant="outlined"
          fullWidth
          onChange={(e) => setClasse_sub(e.target.value)}
          value={classe_sub}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="TP Fornecimento"
          variant="outlined"
          fullWidth
          onChange={(e) => setTp_fornecimento(e.target.value)}
          value={tp_fornecimento}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Modalidade Tarifaria"
          variant="outlined"
          fullWidth
          onChange={(e) => setModalidade_taf(e.target.value)}
          value={modalidade_taf}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Tensao Nominal"
          variant="outlined"
          fullWidth
          onChange={(e) => setTensao_nominal(e.target.value)}
          value={tensao_nominal}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Roteiro Leitura"
          variant="outlined"
          fullWidth
          onChange={(e) => setRoteiro_leitura(e.target.value)}
          value={roteiro_leitura}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="Nª Medidor"
          variant="outlined"
          fullWidth
          onChange={(e) => setMedidor(e.target.value)}
          value={medidor}
        />
        <NumberFormat
          prefix={"R$ "}
          id="outlined"
          className={classes.text}
          floatValue={true}
          value={valor_medio}
          label="Valor Medio (R$)"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setValor_medio(floatValue);
          }}
          fullWidth
          variant="outlined"
        />
        <NumberFormat
          prefix={"R$ "}
          id="consumo medio"
          className="input"
          required={true}
          floatValue={true}
          value={consumo_medio}
          label="Consumo Médio (Kwh)"
          placeholder="Consumo Médio (Kwh)"
          customInput={TextField}
          onValueChange={(valores) => {
            const { floatValue } = valores;
            setConsumo_medio(floatValue);
          }}
          variant="outlined"
        /> 
        <TextField
          className={classes.text}
          id="outlined"
          label="Endereço Eletrico"
          variant="outlined"
          fullWidth
          onChange={(e) => setEnd_eletrico(e.target.value)}
          value={end_eletrico}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="CPF/CNPJ/CI"
          variant="outlined"
          fullWidth
          onChange={(e) => setCpf_cnpj_ci(e.target.value)}
          value={cpf_cnpj_ci}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Cep Consumo"
          variant="outlined"
          fullWidth
          onChange={(e) => setCep_consumo(e.target.value)}
          value={cep_consumo}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Rua"
          variant="outlined"
          fullWidth
          onChange={(e) => setRua_consumo(e.target.value)}
          value={rua_consumo}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          label="Bairro Consumo"
          variant="outlined"
          fullWidth
          onChange={(e) => setBairro_consumo(e.target.value)}
          value={bairro_consumo}
        />
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Cidade Consumo"
          variant="outlined"
          fullWidth
          onChange={(e) => setCidade_consumo(e.target.value)}
          value={cidade_consumo}
        />
        <TextField
          className={classes.text}
          id="outlined"
          label="Estado Consumo"
          variant="outlined"
          fullWidth
          onChange={(e) => setEstado_consumo(e.target.value)}
          value={estado_consumo}
        />
      </div>
      <div className={classes.campo}>
        <TextField
          className={classes.text}
          id="outlined"
          type="text"
          label="Nª Residencial/Empresarial"
          variant="outlined"
          fullWidth
          onChange={(e) => setNResidencial_empresarial(e.target.value)}
          value={nResidencial_empresarial}
        />
      </div>
      <Button
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
