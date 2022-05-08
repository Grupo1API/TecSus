package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.digisolu.tecsus1.entidades.ContratoEnergia;

public interface ContratoEnergiaRepositorio extends JpaRepository<ContratoEnergia, Long> { 
	ContratoEnergia findByCodigoIdentificador(@RequestParam("codigo_identificador") String codigo_identificador);
}
