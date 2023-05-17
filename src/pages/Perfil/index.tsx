import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import ProductListPerfil from '../../components/ProductListPerfil'
import Game from '../../models/Game'
import imagePizza from '../../assets/Images/image_3.png'

const comidaitaliana: Game[] = [
  {
    id: 1,
    category: 'Comida Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    title: 'Pizza Marguerita',
    image: imagePizza
  },
  {
    id: 2,
    category: 'Comida Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    title: 'Pizza Marguerita',
    image: imagePizza
  },
  {
    id: 3,
    category: 'Comida Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    title: 'Pizza Marguerita',
    image: imagePizza
  },
  {
    id: 4,
    category: 'Comida Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    title: 'Pizza Marguerita',
    image: imagePizza
  },
  {
    id: 5,
    category: 'Comida Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    title: 'Pizza Marguerita',
    image: imagePizza
  },
  {
    id: 6,
    category: 'Comida Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    title: 'Pizza Marguerita',
    image: imagePizza
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <ProductListPerfil
      games={comidaitaliana}
      title="Comida Italiana"
      background="rosa"
    />
  </>
)

export default Perfil
