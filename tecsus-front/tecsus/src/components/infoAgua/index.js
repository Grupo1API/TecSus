import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../quadro_unidade/style";
import NumberFormat from 'react-number-format';

export default function EditAgua({ dados, modalEdit }) {
    const classes = useStyles();

  return (
    <form className={classes.root} >
      <div>
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="CNPJ Concessionaria"  
            value={dados.cnpj_concessionaria}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text"
            label="Concessionaria"             
            value={dados.concessionaria}
            fullWidth
            variant="outlined"  
        /> 
        </div>
        <div>
        <TextField
            id="outlined"
            className={classes.text} 
            type="text" 
            label="CNPJ/CPF Unidade"
            value={dados.cpf_cnpj_cliente}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Nome Cliente" 
            value={dados.nome_cliente}
            fullWidth
            variant="outlined" 
        />       
    </div>
        
    <div >
        
        <TextField
            id="outlined"
            className={classes.text} 
            type="text" 
            label="Cod.Cliente"  
            value={dados.codigo_cliente}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined"       
            className={classes.text}                        
            type="text" 
            label="PDE/RGI"
            value={dados.pde_rgi} 
            fullWidth
            variant="outlined" 
        />                            
    </div> 

    <div >
        <TextField
            id="outlined"
            className={classes.text}                                
            type="text" 
            label="Hidrometro" 
            value={dados.hidrometro}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined"
            className={classes.text}  
            type="text" 
            label="Tipo de Ligação"  
            value={dados.tipo_ligacao}
            fullWidth
            variant="outlined" 
        />
    </div>
    <div>
        <TextField
            id="outlined" 
            className={classes.text} 
            type="text" 
            label="Tipo de Fornecimento"
            value={dados.tipo_fornecimento} 
            fullWidth
            variant="outlined" 
        />   
        <TextField
            id="outlined" 
            className={classes.text} 
            type="text" 
            label="Numero de Fornecimento"
            value={dados.n_fornecimento} 
            fullWidth
            variant="outlined"
        />                       
    </div> 

    <div>        
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
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Nome Consumidor"
            value={dados.nome_consumo}
            fullWidth
            variant="outlined" 
        />
    </div>
    <div>                                     
        <TextField
            id="outlined" 
            className={classes.text}
            type="text"  
            label="CPF/CNPJ/CI"
            value={dados.cpf_cnpj_ci} 
            fullWidth
            variant="outlined"  
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text"  
            label="CEP"
            value={dados.cep_consumo}
            
            fullWidth
            variant="outlined"
        />
    </div> 
    <div>                           
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Rua"
            
            value={dados.rua_consumo}
            fullWidth
            variant="outlined"
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Bairro"
            
            value={dados.bairro_consumo}
            fullWidth
            variant="outlined"
        />
    </div>
    <div>
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Cidade"
            
            value={dados.cidade_consumo}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Estado"
            
            value={dados.estado_consumo}
            fullWidth
            variant="outlined"
        />
    </div> 
    <div >                                 
        <TextField
            id="outlined" 
            className={classes.text}                            
            type="text" 
            label="Nª Residencial/Empresarial"
            value={dados.nResidencial_empresarial}
            
            fullWidth
            variant="outlined"
        />
    </div>
    </form>
  );
}
