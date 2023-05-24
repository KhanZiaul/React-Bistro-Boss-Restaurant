import { Helmet } from 'react-helmet-async'
import image1 from '../../../assets/menu/banner3.jpg'
import image2 from '../../../assets/menu/dessert-bg.jpeg'
import image3 from '../../../assets/menu/pizza-bg.jpg'
import image4 from '../../../assets/menu/salad-bg.jpg'
import image5 from '../../../assets/menu/soup-bg.jpg'
import useMenuData from '../../../Hooks/useMenuData/useMenuData';
import Cover from '../../Shared/Cover/Cover'
import OrderFood from '../Shared/OrderFood.jsx/OrderFood';

const Menu = () => {

    const [allMenu] = useMenuData()

    const offered = allMenu?.filter(popular => popular.category === 'offered')
    const dessert = allMenu?.filter(popular => popular.category === 'dessert')
    const pizza = allMenu?.filter(popular => popular.category === 'pizza')
    const salad = allMenu?.filter(popular => popular.category === 'salad')
    const soup = allMenu?.filter(popular => popular.category === 'soup')

    return (
        <div>

            <Helmet>
                <title>MENU | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Offered */}

            <Cover image={image1} title='OUR MENU' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>

            <OrderFood title={"TODAY'S OFFER"} items={offered} subTitle={"--- Don't miss ---"}></OrderFood>

            {/* Dessert */}

            <Cover image={image2} title='dessert' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>

            <OrderFood items={dessert}></OrderFood>

            {/* Pizza */}

            <Cover image={image3} title='pizza' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>

            <OrderFood items={pizza}></OrderFood>

            {/* Salad */}

            <Cover image={image4} title='salad' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>

            <OrderFood items={salad}></OrderFood>

            {/* Soup */}

            <Cover image={image5} title='soup' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>

            <OrderFood items={soup}></OrderFood>

        </div>
    );
};

export default Menu;