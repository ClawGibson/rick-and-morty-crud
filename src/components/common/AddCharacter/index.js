import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addCharacterAction } from '../../../redux/actions/rickAndMortyAction';

import { Modal, Input } from 'antd';

const AddCharacterModal = ({ isOpen, onClose }) => {
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [origin, setOrigin] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();

  const handleOk = () => {
    const newCharacter = {
      id: Math.floor(Math.random() * 50000),
      location: { name: location },
      gender: gender,
      origin: { name: origin },
      status: status,
      species: specie,
    };
    dispatch(addCharacterAction(newCharacter));
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setGender('');
    setLocation('');
    setSpecie('');
    setOrigin('');
    setStatus('');
  };
  return (
    <Modal
      title='Nuevo personaje'
      visible={isOpen}
      onCancel={onClose}
      onOk={handleOk}
    >
      <div className='items'>
        Ubicación
        <Input
          placeholder={'La tierra'}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className='items'>
        Género
        <Input
          placeholder={'Masculino'}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className='items'>
        Especie{' '}
        <Input
          placeholder={'Humano'}
          onChange={(e) => setSpecie(e.target.value)}
        />
      </div>
      <div className='items'>
        Origen{' '}
        <Input
          placeholder={'La tierra'}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div className='items'>
        Estado
        <Input
          placeholder={'Vivo'}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default AddCharacterModal;
