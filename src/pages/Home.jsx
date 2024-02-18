import { Box } from '@chakra-ui/react';
import img from '../icons/auto.jpg';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 50,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  title2: {
    marginTop: 500,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  }
};

export default function Home() {
  return (
    <Box
      style={styles.container}
      bgImage={img}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <h1 style={styles.title}>
        welcome, take a ride in the car of your dreams{' '}
     
      </h1>
      <NavLink style={styles.title2} to="/catalog"> lets go...</NavLink>
    </Box>
  );
}
