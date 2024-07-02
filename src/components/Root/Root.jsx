import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='lg:w-[1170px] container mx-auto min-h-[calc(100vh-116px)]'>
                <Header  />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
