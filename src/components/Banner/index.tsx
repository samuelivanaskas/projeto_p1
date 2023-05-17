import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/Images/imagem_fundo.png'
import Tag from '../Tag'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque da semana</Tag>
      <div>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
