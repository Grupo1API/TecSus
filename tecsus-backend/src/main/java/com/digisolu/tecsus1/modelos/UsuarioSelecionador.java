package com.digisolu.tecsus1.modelos;

import java.util.List;
import org.springframework.stereotype.Component;
import com.digisolu.tecsus1.entidades.Usuarios;

@Component
public class UsuarioSelecionador {
	public Usuarios selecionar(List<Usuarios> usuarios, Long id) {
		Usuarios selecionado = null;
		for (Usuarios usuario : usuarios) {
			if (usuario.getUser_id() == id) {
				selecionado = usuario;
			}
		}
		return selecionado;
	}
}
