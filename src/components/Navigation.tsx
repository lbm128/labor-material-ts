import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@prism/dropcloth/dist/components/button/button';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navigation'>
      <div>
        <Button variant='outlined' aria-label='menu' className='swdc-button swdc-button--outlined swdc-mt-[30px]' onClick={handleShowMenu}>Menu</Button>
        <div title='navMenu' className={`swdc-absolute swdc-inset-x-0 swdc-bg-white swdc-p-[15px] swdc-rounded-md swdc-border-2 swdc-w-[250px] swdc-mt-[10px] swdc-mx-auto ${showMenu ? '' : 'swdc-hidden'}`}>
          <div className='swdc-flex swdc-flex-col swdc-gap-[15px] '>
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
