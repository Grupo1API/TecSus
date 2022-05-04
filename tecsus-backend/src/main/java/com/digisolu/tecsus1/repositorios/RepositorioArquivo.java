package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digisolu.tecsus1.entidades.Arquivo;



public interface RepositorioArquivo extends JpaRepository<Arquivo, Long> {
}