package com.digisolu.tecsus1.repositorios;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.jpa.repository.Query;

import com.digisolu.tecsus1.entidades.ContratoEnergia;

public interface ContratoEnergiaRepositorio extends JpaRepository<ContratoEnergia, Long> { 
	ContratoEnergia findByNumeroInstalacao(@RequestParam("numero_instalacao") String numero_instalacao);
	@Query(value = "SELECT *  "
    		+ "FROM contrato_energia "
    		+ "INNER JOIN cadastro_unidade c "
    		+ "ON contrato_energia.contrato_unidade_id = c.unidade_id  "
    		+ "ORDER BY c.unidade_id",
    nativeQuery = true)
    List<ContratoEnergia> findAllContratoEnergia(@RequestParam ("contrato_unidade_id")Long contrato_unidade_id);
}
