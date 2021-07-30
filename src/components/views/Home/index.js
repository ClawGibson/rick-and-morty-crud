import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersAction } from '../../../redux/actions/rickAndMortyAction';

import { Row, Col, Button } from 'antd';

import AddCharacterModal from '../../common/AddCharacter';
import Cards from '../../common/Cards';

import './Home.scss';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const axios = require('axios');
  const dispatch = useDispatch();
  const store = useSelector((state) => state.rickAndMortyStore.characters);

  useEffect(() => {
    fetchCharacters();
    return () => {
      setCharacters([]);
    };
  }, []);

  useEffect(() => {
    fetchCharacters();
    characters.length > 0 && dispatch(fetchCharactersAction(characters));
    setCharacters(store);
  }, [page]);

  useEffect(() => {
    setCharacters(store);
    return () => {
      setCharacters([]);
    };
  }, [store]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_AXIOS_URL}/?page=${page}`
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddCharacterModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <Row className='buttonsArea'>
        <Col xs={24} xl={4} className='buttonsArea__button'>
          <Button onClick={() => setPage(page - 1)}>Anterior</Button>
        </Col>
        <Col xs={24} xl={4} className='buttonsArea__button'>
          <Button onClick={() => setPage(page + 1)}>Siguiente</Button>
        </Col>
        <Col xs={24} xl={4} className='buttonsArea__button'>
          <Button type='primary' onClick={() => setIsModalVisible(true)}>
            Nuevo
          </Button>
        </Col>
      </Row>
      <Row className='homeContainer'>
        {store?.length > 0 ? (
          store?.map((character) => (
            <Col xs={24} xl={5} className='cardGap'>
              <Cards key={character.id} {...character} />
            </Col>
          ))
        ) : (
          <Button type='primary' onClick={() => setPage(page + 1)}>
            Cargar datos
          </Button>
        )}
      </Row>
    </>
  );
};

export default Home;
