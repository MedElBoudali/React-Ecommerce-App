import React, { useState } from 'react';
import MenuItem from '../../Components/HomePageComponents/MenuItem/MenuItem';
import Grid from '@material-ui/core/Grid';
import './Home.scss';

const Home = () => {
  const [getSections, setSections] = useState([
    {
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1580850963861-5f1e80589f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=553&q=80',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl:
        'https://images.unsplash.com/photo-1579298911698-f23a4d9dc3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]);

  return (
    <div className='Home'>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        {getSections.map(({ id, ...getSections }) => (
          <Grid
            item
            key={id}
            xs={12}
            sm={id > 2 ? 12 : 6}
            md={id > 2 ? 12 : 6}
            lg={id > 3 ? 6 : 4}
            xl={id > 3 ? 6 : 4}>
            <MenuItem {...getSections} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
