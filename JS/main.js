var c = 1

function monta_tabuleiro(num_linhas){
			$('#tabuleiro').empty()
			for(i = 0; i < num_linhas; i++){

				var tds = monta_tds(i, num_linhas)


				
				$("#tabuleiro").append("<tr>"+tds+"</tr>")
			}

		}

		function monta_tds(i, num_linhas){
			var tds = "";
				if(i % 2 == 0){
					for(j = 0; j < num_linhas; j++){
						if(j % 2 == 0){
							tds += '<td id="'+c+'"></td>';
						}else{
							tds += '<td id="'+c+'" class="quadrado-preto">'
								if(i <= 1){
									tds += "<div class ='peca vermelha'></div>"
								}
								if(i >= num_linhas-2){
									tds += "<div class ='peca azul'></div>"
								}
								
								tds += "</tds>"
						}
						c+=1
					}
				}else{
					for(j = 0; j < num_linhas; j++){
						if(j % 2 == 0){
								tds += '<td id="'+c+'" class="quadrado-preto">'
								if(i <= 1){
									tds += "<div class ='peca vermelha'></div>"
								}
								if(i >= num_linhas-2){
									tds += "<div class ='peca azul'></div>"
								}
								
								tds += "</tds>"
							}else{
								tds += '<td id="'+c+'"></td>';
							}
							c+=1
					}

				}
				return tds
		}

function movimenta_peca(quadrado, peca_selecionada){
			quadrado.append(peca_selecionada.clone())
			peca_selecionada.remove()
			peca_selecionada = false
		}

function troca_jogador_font(jogador){
	$('#player').text(jogador)
	if(jogador == 'Vermelho'){
		$('#player').removeClass('fonte-azul')
		$('#player').addClass('fonte-vermelha')
	}else{
		$('#player').removeClass('fonte-vermelha')
		$('#player').addClass('fonte-azul')
	}
}

function muda_pontuacao_front(){
	$('#pontos-vermelho').text(vermelho_pontuacao)
	$('#pontos-azul').text(azul_pontuacao)
}

function valida_regras(quadrado, peca_posicao, peca_selecionada){
			//movimentação normal
			if (peca_selecionada.css('background-color')== 'rgb(255, 0, 0)' && (quadrado.attr('id')==peca_posicao+9 || quadrado.attr('id') == peca_posicao+7) && is_primeiro_jogador) {
				troca_jogador_font('Azul')
				is_primeiro_jogador = false
				return true
			}
			else if(peca_selecionada.css('background-color')== 'rgb(0, 0, 255)' && (quadrado.attr('id')==peca_posicao-9 || quadrado.attr('id') == peca_posicao-7) && !is_primeiro_jogador){
				troca_jogador_font('Vermelho')
				is_primeiro_jogador = true
				return true
			}
			//movimentação de ataque
			else if(peca_selecionada.css('background-color') == 'rgb(255, 0, 0)' && 
				($('#'+(peca_posicao+9)).children().css('background-color') == 'rgb(0, 0, 255)' && 
				quadrado.attr('id')==peca_posicao+18 ) ||
				($('#'+(peca_posicao+7)).children().css('background-color') == 'rgb(0, 0, 255)' && 
				quadrado.attr('id')==peca_posicao+14 ))
			{

				come_peca('vermelho', quadrado, peca_posicao);
				muda_pontuacao_front()
				return true

			}
			else if(peca_selecionada.css('background-color') == 'rgb(0, 0, 255)' && 
				($('#'+(peca_posicao-9)).children().css('background-color') == 'rgb(255, 0, 0)' && 
				quadrado.attr('id')==peca_posicao-18 ) ||
				($('#'+(peca_posicao-7)).children().css('background-color') == 'rgb(255, 0, 0)' && 
				quadrado.attr('id')==peca_posicao-14 ))
			{
				come_peca('azul', quadrado, peca_posicao)
				muda_pontuacao_front()
				return true
				
			
		}

		}

function come_peca(cor_jogador, quadrado, peca_posicao){
			if(cor_jogador == 'vermelho' && ($('#'+(peca_posicao+9)).children().css('background-color') == 'rgb(0, 0, 255)' && quadrado.attr('id')==peca_posicao+18 ))
			{	
				vermelho_pontuacao += 1
				$('#'+(peca_posicao+9)).children().remove()
			}
			else if (cor_jogador == 'vermelho' && ($('#'+(peca_posicao+7)).children().css('background-color') == 'rgb(0, 0, 255)' && quadrado.attr('id')==peca_posicao+14 ))
			{	
				vermelho_pontuacao += 1
				$('#'+(peca_posicao+7)).children().remove()
			}
			else if(cor_jogador == 'azul' && ($('#'+(peca_posicao-9)).children().css('background-color') == 'rgb(255, 0, 0)' && quadrado.attr('id')==peca_posicao-18 ))
			{	
				azul_pontuacao += 1
				$('#'+(peca_posicao-9)).children().remove()
			}
			else if (cor_jogador == 'azul' && ($('#'+(peca_posicao-7)).children().css('background-color') == 'rgb(255, 0, 0)' && quadrado.attr('id')==peca_posicao-14 ))
			{	
				azul_pontuacao += 1
				$('#'+(peca_posicao-7)).children().remove()
			}
		}
