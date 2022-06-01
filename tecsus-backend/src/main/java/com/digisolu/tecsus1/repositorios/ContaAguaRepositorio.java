package com.digisolu.tecsus1.repositorios;


import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.digisolu.tecsus1.entidades.ContaAgua;

public interface ContaAguaRepositorio extends JpaRepository<ContaAgua, Long> {
}

