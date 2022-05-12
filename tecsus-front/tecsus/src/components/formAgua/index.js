import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../quadro_unidade/style";
import NumberFormat from 'react-number-format';

export default function EditAgua({ dados, modalEdit }) {
    const classes = useStyles();
    const [concessionaria, setConcessionaria] = useState(dados.concessionaria)        //marcar como novo no cadastro 
    const [cnpj_concessionaria, setCnpj_concessionaria] = useState(dados.cnpj_concessionaria) //marcar como novo no cadastro
    const [nome_cliente, setNome_cliente] = useState(dados.nome_cliente)
    const [cpf_cnpj_cliente, setCpf_cnpj_cliente] = useState(dados.cpf_cnpj_cliente)    
    const [codigo_cliente, setCodigo_cliente] = useState(dados.codigo_cliente)
    const [pde_rgi, setPde_rgi] = useState(dados.pde_rgi)
    const [hidrometro, setHidrometro] = useState(dados.hidrometro)
    const [tipo_ligacao, setTipo_ligacao] = useState(dados.tipo_ligacao)
    const [tipo_fornecimento, setTipo_fornecimento] = useState(dados.tipo_fornecimento)
    const [n_fornecimento, setN_fornecimento] = useState(dados.n_fornecimento)
    const [valor_medio, setValor_medio] = useState(dados.valor_medio)
    const [nome_consumo, setNome_consumo] = useState(dados.nome_consumo)
    const [cpf_cnpj_ci, setCpf_cnpj_ci] = useState(dados.cpf_cnpj_ci)
    const [cep_consumo, setCep_consumo] = useState(dados.cep_consumo)
    const [rua_consumo, setRua_consumo] = useState(dados.rua_consumo)
    const [bairro_consumo, setBairro_consumo] = useState(dados.bairro_consumo)
    const [cidade_consumo, setCidade_consumo] = useState(dados.cidade_consumo)
    const [estado_consumo, setEstado_consumo] = useState(dados.estado_consumo)
    const [nResidencial_empresarial, setNResidencial_empresarial] = useState(dados.nResidencial_empresarial)
 

  async function handleUpdate() {
    const data = {
        id:dados.id,
        unidade_nome:nome_cliente,
        concessionaria:concessionaria, 
        concessionaria_cnpj:cnpj_concessionaria,
        unidade_cnpj:cpf_cnpj_cliente, 
        codigo_cliente:codigo_cliente, 
        pde_rgi:pde_rgi, 
        hidrometro:hidrometro, 
        tipo_ligacao:tipo_ligacao, 
        tipo_fornecimento:tipo_fornecimento, 
        n_fornecimento:n_fornecimento, 
        valor_medio:valor_medio, 
        local_nome:nome_consumo, 
        local_cnpj:cpf_cnpj_ci, 
        local_cep:cep_consumo, 
        local_rua:rua_consumo, 
        local_bairro:bairro_consumo, 
        local_cidade:cidade_consumo, 
        local_estado:estado_consumo, 
        local_numero:nResidencial_empresarial,  
  };
    await fetch(`http://localhost:8080/contratoagua/atualizar`, {
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
            id="outlined" 
            className={classes.text}
            type="text" 
            label="CNPJ Concessionaria"  
            value={cnpj_concessionaria}
            onChange={(e) => setCnpj_concessionaria(e.target.value)}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text"
            label="Concessionaria"             
            value={concessionaria}
            onChange={(e) => setConcessionaria(e.target.value)}
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
            value={cpf_cnpj_cliente}
            onChange={(e) => setCpf_cnpj_cliente(e.target.value)}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Nome Cliente" 
            onChange={(e) => setNome_cliente(e.target.value)}
            value={nome_cliente}
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
            value={codigo_cliente}
            onChange={(e) => setCodigo_cliente(e.target.value)}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined"       
            className={classes.text}                        
            type="text" 
            label="PDE/RGI"
            value={pde_rgi}
            onChange={(e) => setPde_rgi(e.target.value)} 
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
            value={hidrometro}
            onChange={(e) => setHidrometro(e.target.value)}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined"
            className={classes.text}  
            type="text" 
            label="Tipo de Ligação"  
            value={tipo_ligacao}
            onChange={(e) => setTipo_ligacao(e.target.value)}
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
            value={tipo_fornecimento}
            onChange={(e) => setTipo_fornecimento(e.target.value)} 
            fullWidth
            variant="outlined" 
        />   
        <TextField
            id="outlined" 
            className={classes.text} 
            type="text" 
            label="Numero de Fornecimento"
            value={n_fornecimento}
            onChange={(e) => setN_fornecimento(e.target.value)} 
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
            value={valor_medio}
            label="Valor Medio (R$)"
            customInput={TextField} 
            onValueChange = { ( valores )  =>  { 
            const  {floatValue}  =  valores ; 
            setValor_medio ( floatValue  ) ;                                 
            } }
            fullWidth
            variant="outlined"
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Nome Consumidor"
            value={nome_consumo}
            onChange={(e) => setNome_consumo(e.target.value)}
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
            value={cpf_cnpj_ci}
            onChange={(e) => setCpf_cnpj_ci(e.target.value)} 
            fullWidth
            variant="outlined"  
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text"  
            label="CEP"
            value={cep_consumo}
            onChange={e=>setCep_consumo(e.target.value)}
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
            onChange={e=>setRua_consumo(e.target.value)}
            value={rua_consumo}
            fullWidth
            variant="outlined"
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Bairro"
            onChange={e=>setBairro_consumo(e.target.value)}
            value={bairro_consumo}
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
            onChange={e=>setCidade_consumo(e.target.value)}
            value={cidade_consumo}
            fullWidth
            variant="outlined" 
        />
        <TextField
            id="outlined" 
            className={classes.text}
            type="text" 
            label="Estado"
            onChange={e=>setEstado_consumo(e.target.value)}
            value={estado_consumo}
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
            value={nResidencial_empresarial}
            onChange={(e) => setNResidencial_empresarial(e.target.value)}
            fullWidth
            variant="outlined"
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
