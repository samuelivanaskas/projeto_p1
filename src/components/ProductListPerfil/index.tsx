import Game from '../../models/Game'
import { ProductPerfil } from '../ProductPerfil'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'rosa' | 'rosaclaro'
  games: Game[]
}

const ProductListPerfil = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <ProductPerfil
            key={game.id}
            category={game.category}
            description={game.description}
            infos={game.infos}
            image={game.image}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListPerfil
