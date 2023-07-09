import { AboutContainer } from './styles';

export function About() {
  return (
    <AboutContainer>
      <article>
        <section>
          <h2>📖 Sobre</h2>

          <p>
            O projeto de teste da Ubiratã consiste em exibir dados populacionais
            de regiões que são informadas por meio de uma API. Ao selecionar uma
            região, o usuário visualiza a evolução populacional dessa área ao
            longo dos anos por meio de um gráfico interativo. O objetivo é
            fornecer uma forma simples e visualmente atraente de analisar as
            mudanças demográficas em diferentes regiões.
          </p>

          <p>
            A aplicação foi desenvolvida utilizando React e outras bibliotecas.
            O controle do mapa é feito com React-Leaflet, enquanto os gráficos
            são gerados por meio do uso da biblioteca Recharts. Para assegurar o
            pleno funcionamento de todos os componentes, o código foi
            extensivamente testado. Além disso, o código foi documentado de
            forma abrangente para facilitar a manutenção e fornecer informações
            adicionais sobre as tecnologias utilizadas, bem como instruções de
            configuração. Para obter detalhes mais específicos, consulte o
            arquivo README do sistema.
          </p>
        </section>

        <section>
          <h3>✒️ Autor</h3>

          <p>
            Sou desenvolvedor frontend desde 2019, com experiência em diversos
            frameworks como React, Vue e Jquery. Ao longo dos anos, adquiri
            habilidades sólidas no desenvolvimento de interfaces de usuário
            interativas e responsivas. Além disso, concluí um curso técnico de
            Informática, o que me proporcionou uma base sólida em conceitos e
            práticas de programação. Atualmente, estou cursando graduação em TI
            na UFRN, buscando aprimorar ainda mais minhas habilidades e
            conhecimentos na área.
          </p>

          <p>
            Estou sempre motivado a aprender novas tecnologias e tendências, e
            meu objetivo é contribuir para projetos desafiadores e inovadores no
            campo do desenvolvimento frontend.
          </p>
        </section>
      </article>
    </AboutContainer>
  );
}
