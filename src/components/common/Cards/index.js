import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteCharacterAction } from '../../../redux/actions/rickAndMortyAction';

import { Card, Row, Col, Button } from 'antd';

import './Cards.scss';

const Cards = ({
  id,
  name,
  status,
  image,
  gender,
  species,
  origin,
  location,
}) => {
  const { Meta } = Card;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCharacterAction(id));
  };

  return (
    <Card
      key={id}
      style={{ width: '100%' }}
      className='characterCard'
      title={<Link to={`./details/${id}`}>{name}</Link>}
      extra={status}
      cover={<img alt={name} src={image} />}
    >
      <Row className='homeContainer'>
        <Col xs={24} xl={11} className='cardGap'>
          <Meta title='Especie' description={species} />
        </Col>
        <Col xs={24} xl={11} className='cardGap'>
          <Meta title='Género' description={gender} />
        </Col>
      </Row>
      <Row className='homeContainer'>
        <Col xs={24} xl={11} className='cardGap'>
          <Meta title='Origen' description={origin?.name} />
        </Col>
        <Col xs={24} xl={11} className='cardGap'>
          <Meta title='Ubicación' description={location?.name} />
        </Col>
      </Row>
      <Row className='homeContainer'>
        <Col xs={24} xl={11} className='cardGap'>
          <Button type='link' onClick={() => handleDelete(id)}>
            Eliminar
          </Button>
        </Col>
        <Col
          xs={24}
          xl={11}
          className='cardGap'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Link to={`./details/edit/${id}/${id}`}>Editar</Link>
        </Col>
      </Row>
    </Card>
  );
};

export default Cards;
