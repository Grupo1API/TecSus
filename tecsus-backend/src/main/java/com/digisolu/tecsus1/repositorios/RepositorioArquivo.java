package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digisolu.tecsus1.adaptadores.AdaptadorArquivo;




public interface RepositorioArquivo extends JpaRepository<AdaptadorArquivo, Long> {
}