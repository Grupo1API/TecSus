package com.digisolu.tecsus1.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.RepresentationModel;

@Entity
public class Usuarios extends RepresentationModel<Usuarios>{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	@Column
	private String username;
	@Column
	private String email;
	@Column
	private String senha;
	@Column 
	private int acesso;
	//acesso: 1 = administrador, 2 = gestor, 3 = digitador
	
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public int getAcesso() {
		return acesso;
	}
	public void setAcesso(int acesso) {
		this.acesso = acesso;
	}
	
	
	
}
