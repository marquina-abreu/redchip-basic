import React from 'react';
import PropTypes from 'prop-types';
import { ContainerContent, TextEmpty } from '../styles';

const EmptyData = ({ textEmpty }) => (
  <ContainerContent>
    <TextEmpty>  
        No {textEmpty} found
    </TextEmpty>
  </ContainerContent>
);

EmptyData.propTypes = {
  textEmpty: PropTypes.string.isRequired,
};

export default EmptyData;
