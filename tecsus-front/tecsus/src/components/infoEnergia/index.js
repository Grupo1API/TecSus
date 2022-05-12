import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../quadro_concessionaria/style";
import NumberFormat from 'react-number-format';

export default function EditEnergia({ dados }) {
  const classes = useStyles();  
  return (
    <form className={classes.root} >
      <div>
        <TextField
          className={classes.text}
          id="outlined"
          label="CNPJ concessionaria"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cnpj_concessionaria}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          label="Concessionaria"
          variant="outlined"
          fullWidth
          disabled
          value={dados.concessionaria}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
        
          id="outlined"
          type="number"
          label="CNPJ/CPF Unidade"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cpf_cnpj_cliente}
        />
        <TextField
          className={classes.text}
        
          id="outlined-password-input"
          type="text"
          label="Nome Unidade"
          variant="outlined"
          fullWidth
          disabled
          value={dados.nome_cliente}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          id="outlined"
          label="codigo Identificador"
          variant="outlined"
          fullWidth
          disabled
          value={dados.codigo_identificador}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          label="Codigo Fiscal"
          variant="outlined"
          fullWidth
          disabled
          value={dados.codigo_fiscal}
        />
      </div>
      
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Grupo/Subgrupo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.grupo_sub}
        />
        <TextField
          className={classes.text}       
          id="outlined"
          label="Classe/Subclasse"
          variant="outlined"
          fullWidth
          disabled
          value={dados.classe_sub}
        />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="TP Fornecimento"
          variant="outlined"
          fullWidth
          disabled
          value={dados.tp_fornecimento}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="Modalidade Tarifaria"
          variant="outlined"
          fullWidth
          disabled
          value={dados.modalidade_taf}
        />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Tensao Nominal"
          variant="outlined"
          fullWidth
          disabled
          value={dados.tensao_nominal}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="Roteiro Leitura"
          variant="outlined"
          fullWidth
          disabled
          value={dados.roteiro_leitura}
        />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Nª Medidor"
          variant="outlined"
          fullWidth
          disabled
          value={dados.medidor}
        />
        <NumberFormat 
          prefix={'R$ '} 
          id="outlined"
          className={classes.text}  
          floatValue = {true}
          value={dados.valor_medio}
          label="Valor Medio (R$)"
          customInput={TextField}
          fullWidth
          variant="outlined"
      />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Endereço Eletrico"
          variant="outlined"
          fullWidth
          disabled
          value={dados.end_eletrico}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="CPF/CNPJ/CI"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cpf_cnpj_ci}
        />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Cep Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cep_consumo}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="Rua"
          variant="outlined"
          fullWidth
          disabled
          value={dados.rua_consumo}
        />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Bairro Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.bairro_consumo}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="Cidade Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.cidade_consumo}
        />
      </div>
      <div>
        <TextField
          className={classes.text}       
          id="outlined"
          label="Estado Consumo"
          variant="outlined"
          fullWidth
          disabled
          value={dados.estado_consumo}
        />
        <TextField
          className={classes.text}        
          id="outlined"
          type="text"
          label="Nª Residencial/Empresarial"
          variant="outlined"
          fullWidth
          disabled
          value={dados.nResidencial_empresarial}
        />
      </div>
    </form>
  );
}