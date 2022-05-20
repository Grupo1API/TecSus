package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digisolu.tecsus1.entidades.Usuarios;

public interface UsuariosRepositorio extends JpaRepository<Usuarios, Long> {

}
