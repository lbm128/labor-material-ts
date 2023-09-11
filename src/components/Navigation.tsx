// import { Button } from '@prism/dropcloth/dist/components/button/button';
// import { Menu } from '@prism/dropcloth/dist/components/menu/menu';
// import { MenuContent } from '@prism/dropcloth/dist/components/menu/menuContent';
// import { MenuTrigger } from '@prism/dropcloth/dist/components/menu/menuTrigger';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div>
        {/* <div className='swdc-button swdc-button--outlined swdc-mt-[30px]'>
          <Button variant='outlined' className='swdc-button swdc-button--outlined swdc-mt-[30px]'>Menu</Button>
        </div> */}
        <div className='test-menu swdc-p-[15px]'>
          <div className='swdc-flex swdc-flex-col swdc-gap-[15px]'>
            <div className='nav-link-container'>
              <Link to='/' className='swdc-button swdc-button--filled' data-text='Home'>
                <span>Home</span>
              </Link>
            </div>
            <div className='nav-link-container'>
              <Link to='/labor' className='swdc-button swdc-button--outlined' data-text='Home'>
                <span>Labor</span>
              </Link>
            </div>
            <div className='nav-link-container'>
              <Link to='/material' className='swdc-button swdc-button--filled' data-text='Home'>
                <span>Material</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
