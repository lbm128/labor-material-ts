import { Link } from 'react-router-dom';
import { Menu, MenuTrigger, MenuContent, Button, Input } from '@prism/dropcloth';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Menu placement='bottom-start'>
        <MenuTrigger asChild className='swdc-button swdc-button--outlined swdc-mt-[30px]'>
          <Button variant='outlined'>Menu</Button>
        </MenuTrigger>
        <MenuContent className='test-menu swdc-p-[15px]'>
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
        </MenuContent>
      </Menu>
    </div>
  );
};

export default Navigation;
