package com.digisolu.tecsus1;

import com.digisolu.tecsus1.entidades.Usuarios;
import com.digisolu.tecsus1.repositorios.UsuariosRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App implements CommandLineRunner {
	
	@Autowired
	private UsuariosRepositorio repoUsuarios;
	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		Usuarios user1 = new Usuarios();
		user1.setUsername("admin");
		user1.setEmail("admin@admin");
		user1.setSenha("admin");
		user1.setAcesso(1);
		
		repoUsuarios.save(user1);
	}

}
