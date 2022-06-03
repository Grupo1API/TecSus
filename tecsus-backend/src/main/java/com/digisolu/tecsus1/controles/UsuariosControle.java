package com.digisolu.tecsus1.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.digisolu.tecsus1.entidades.Usuarios;
import com.digisolu.tecsus1.modelos.AdicionadorLinkUsuario;
import com.digisolu.tecsus1.modelos.UsuarioAtualizador;
import com.digisolu.tecsus1.modelos.UsuarioSelecionador;
import com.digisolu.tecsus1.repositorios.UsuariosRepositorio;

@CrossOrigin
@RestController
public class UsuariosControle {
	@Autowired
	private UsuariosRepositorio repositorio;
	@Autowired
	private UsuarioSelecionador selecionador;
	@Autowired
	private AdicionadorLinkUsuario adicionadorLink;

	@GetMapping("/usuarios")
	public ResponseEntity<List<Usuarios>> obterUsuarios() {
		List<Usuarios> usuarios = repositorio.findAll();
		if (usuarios.isEmpty()) {
			ResponseEntity<List<Usuarios>> resposta = new ResponseEntity<>(usuarios, HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(usuarios);
			ResponseEntity<List<Usuarios>> resposta = new ResponseEntity<>(usuarios, HttpStatus.OK);
			return resposta;
		}
	}

	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuarios> obterUsuario(@PathVariable long id) {
		List<Usuarios> usuarios = repositorio.findAll();
		Usuarios usuario = selecionador.selecionar(usuarios, id);
		if (usuario == null) {
			ResponseEntity<Usuarios> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(usuario);
			ResponseEntity<Usuarios> resposta = new ResponseEntity<Usuarios>(usuario, HttpStatus.FOUND);
			return resposta;
		}
	}

	@PostMapping("/cadastrarusuario")
	public ResponseEntity<?> cadastrarUsuario(@RequestBody Usuarios usuario) {
		HttpStatus status = HttpStatus.CONFLICT;
		if (usuario.getUser_id() == null) {
			repositorio.save(usuario);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@PutMapping("/usuario/atualizar")
	public ResponseEntity<?> atualizarUsuario(@RequestBody Usuarios atualizacao) {
		HttpStatus status = HttpStatus.CONFLICT;
		Usuarios usuario = repositorio.getById(atualizacao.getUser_id());
		if (usuario != null) {
			UsuarioAtualizador atualizador = new UsuarioAtualizador();
			atualizador.atualizar(usuario, atualizacao);
			repositorio.save(usuario);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@DeleteMapping("/usuario/excluir")
	public ResponseEntity<?> excluirUsuario(@RequestBody Usuarios exclusao) {
		Usuarios usuario = repositorio.getById(exclusao.getUser_id());
		repositorio.delete(usuario);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
