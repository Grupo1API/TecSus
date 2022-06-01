package com.digisolu.tecsus1.repositorios;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.jpa.repository.Query;

import com.digisolu.tecsus1.entidades.ContratoAgua;

public interface ContratoAguaRepositorio extends JpaRepository<ContratoAgua, Long>{
	ContratoAgua findByNumeroFornecimento(@RequestParam("n_fornecimento") String n_fornecimento);
	@Query(value = "SELECT contrato_agua_id, codigo_cliente, hidrometro, local_bairro, local_cep,"
    		+ "local_cidade, local_cnpj, local_estado, local_nome, local_numero, local_rua, "
    		+ "n_fornecimento, pde_rgi, tipo_fornecimento, tipo_ligacao, valor_medio,"
    		+ "contrato_concessionaria_id, contrato_unidade_id "
    		+ "FROM contrato_agua "
    		+ "INNER JOIN cadastro_unidade "
    		+ "WHERE cadastro_unidade.unidade_id= contrato_agua.contrato_unidade_id "
    		+ "ORDER BY cadastro_unidade.unidade_id",
    nativeQuery = true)
	List<ContratoAgua> findAllContratoAgua();
}
