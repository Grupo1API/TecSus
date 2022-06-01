package com.digisolu.tecsus1.repositorios;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.digisolu.tecsus1.entidades.ContaAgua;

public interface ContaAguaRepositorio extends JpaRepository<ContaAgua, Long> {
	@Query(value = "SELECT * FROM conta_agua ORDER BY contaagua_contrato_id DESC, data_emissao ;", nativeQuery = true)
	List<ContaAgua> findAllGroupByContratoOrderByEmissao();
	
}

