package com.digisolu.tecsus1.modelos;

import java.util.List;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.digisolu.tecsus1.controles.UsuariosControle;
import com.digisolu.tecsus1.entidades.Usuarios;

@Component
public class AdicionadorLinkUsuario implements AdicionadorLink<Usuarios> {
	
	@Override
	public void adicionarLink(List<Usuarios> lista) {
		for (Usuarios usuario : lista) {
			long id = usuario.getUser_id();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder
							.methodOn(UsuariosControle.class)
							.obterUsuario(id))
					.withSelfRel();
			usuario.add(linkProprio);
		}
	}
	
	@Override
	public void adicionarLink(Usuarios objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(UsuariosControle.class)
						.obterUsuarios())
				.withRel("Lista de Usuários cadastrados");
		objeto.add(linkProprio);
	}

}
