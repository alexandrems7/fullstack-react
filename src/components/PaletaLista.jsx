import React, {useState} from "react";

import { paletas } from "../mocks/paletas.js";
import './PaletaLista.css'




function PaletaLista() {

    const[paletaSelecionada, setPaletaSelecionada] = useState({})

    const adicionarItem = (paletaIndex) => {

        // paletaIndex é a chave, isto é, a paleta que eu selecionei, cliquei

        // caso a paletaSelecionada esteja vazia, ele recebe o valor 0, nisso clicando nela eu vou adicionando +1 a cada clique
        
        const paleta = {[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1}

        //Adiciono em paletaSelecionado, o valor da variável paleta, que é alterada a cada clique que eu der
        setPaletaSelecionada({...paletaSelecionada, ...paleta})
    }

    return <div className="PaletaLista">
    {paletas.map((paleta, index) => (
        
        <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
            <span className="PaletaListaItem__badge">{paletaSelecionada[index] || 0}   </span>
            <div>
                <div className='PaletaListaItem__titulo'>{paleta.titulo}</div>
                <div className='PaletaListaItem__preco'>{paleta.preco.toFixed(2)}</div>
                <div className='PaletaListaItem__descricao'>{paleta.descricao}</div>
                <div className='PaletaListaItem__acoes Acoes'>

                    {/* Dentro do onclick, temos uma função cujo callback ele executa a função adicionar item, passando o index da paleta que selecionei.
                    
                    Perceba, ele captura o index da paleta e passa para a função adicionarItem*/}
                    <button className='Acoes__adicionar Acoes__adicionar--preencher' onClick={() => adicionarItem(index)}>adicionar</button>
                </div>
            </div>
            <img className='PaletaListaItem__foto' src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
        </div>))}
        </div>;
  }
  
  export default PaletaLista;