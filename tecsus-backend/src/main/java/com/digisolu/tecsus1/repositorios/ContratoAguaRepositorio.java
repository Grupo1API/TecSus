package com.digisolu.tecsus1.repositorios;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.jpa.repository.Query;

import com.digisolu.tecsus1.entidades.ContratoAgua;

public interface ContratoAguaRepositorio extends JpaRepository<ContratoAgua, Long>{
	ContratoAgua findByNumeroFornecimento(@RequestParam("n_fornecimento") String n_fornecimento);
	@Query(value = "SELECT * "
    		+ "FROM contrato_agua "
    		+ "INNER JOIN cadastro_unidade "
    		+ "WHERE cadastro_unidade.unidade_id= contrato_agua.contrato_unidade_id "
    		+ "ORDER BY cadastro_unidade.unidade_id",
    nativeQuery = true)
	List<ContratoAgua> findAllContratoAgua(@RequestParam ("unidade_id")Long unidade_id);
}
