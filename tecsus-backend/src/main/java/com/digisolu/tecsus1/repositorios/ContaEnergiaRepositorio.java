package com.digisolu.tecsus1.repositorios;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.digisolu.tecsus1.entidades.ContaEnergia;

public interface ContaEnergiaRepositorio extends JpaRepository<ContaEnergia, Long> {
	@Query(value = "SELECT * FROM conta_energia ORDER BY contaenergia_contrato_id DESC, emissao ;", nativeQuery = true)
	List<ContaEnergia> findAllGroupByContratoOrderByEmissao();
}

