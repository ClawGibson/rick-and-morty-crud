import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  addCurrentCharacterAction,
  editCharacterAction,
} from '../../../redux/actions/rickAndMortyAction';

import { Row, Input, Button } from 'antd';

import './Details.scss';

const Details = () => {
  const [details, setDetails] = useState(null);
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [origin, setOrigin] = useState('');
  const [status, setStatus] = useState('');

  const axios = require('axios');
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchDetails(params.id);
    return () => {
      setDetails(null);
    };
  }, [params.id]);

  useEffect(() => {
    details !== null && dispatch(addCurrentCharacterAction(details));
  }, [details]);

  const fetchDetails = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_AXIOS_URL}/${id}`
    );
    setDetails(response.data);
  };

  const handleSave = () => {
    const currentCopy = { ...details };
    currentCopy.gender = (gender !== '' && gender) || currentCopy.gender;
    currentCopy.location =
      (location !== '' && { name: location }) || currentCopy.location;
    currentCopy.origin =
      (origin !== '' && { name: origin }) || currentCopy.origin;
    currentCopy.species = (specie !== '' && specie) || currentCopy.species;
    currentCopy.status = (status !== '' && status) || currentCopy.status;
    dispatch(editCharacterAction(currentCopy));
  };

  return (
    <Row className='detailsContainer'>
      <Row style={{ width: '100%', height: '30%', justifyContent: 'center' }}>
        <img src={details?.image} alt={details?.name} />
      </Row>
      {Object.values(params).length > 1 ? (
        <Row className='detailsContainer__information'>
          <div className='title'>{details?.name}</div>
          <div className='items'>
            Ubicación
            <Input
              placeholder={details?.location?.name}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className='items'>
            Género
            <Input
              placeholder={details?.gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className='items'>
            Especie{' '}
            <Input
              placeholder={details?.species}
              onChange={(e) => setSpecie(e.target.value)}
            />
          </div>
          <div className='items'>
            Origen{' '}
            <Input
              placeholder={details?.origin?.name}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
          <div className='items'>
            Estado
            <Input
              placeholder={details?.status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <Button type='primary' onClick={handleSave}>
            Guardar
          </Button>
        </Row>
      ) : (
        <Row className='detailsContainer__information'>
          <div className='title'>{details?.name}</div>
          <div>Ubicación: {details?.location?.name}</div>
          <div>Género: {details?.gender}</div>
          <div>Especie: {details?.species}</div>
          <div>Origen: {details?.origin?.name}</div>
          <div>Estado: {details?.status}</div>
        </Row>
      )}
    </Row>
  );
};

export default Details;
