import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import hero from '../../../img/hero.jpg';
import  {Flex} from '../../Styles/Flex';
import  {colors} from '../../Styles/Variables';

const HeroStyle = Flex.extend`
text-align: center;
background-image: url(${hero});
background-size: cover;
background-position: center;
height: 80vh;
padding: 48px 40px;
@media (min-width: 768px) {
  font-size: 16px;
  padding: 48px 200px 100px;
    }
@media (min-width: 1280px) {
  font-size: 24px;
  padding: 48px 400px 90px;
    }
`;

const Title = styled.h1 `
font-size: 36px;
font-weight:bold;
letter-spacing:-0.4px;
@media (min-width: 768px) {
  font-size: 72px;
    }
@media (min-width: 1280px) {
  font-size: 96px;
    }
`;

export default class Hero extends React.Component {
	render(){
		return(
			<HeroStyle justify = "flex-end" directionLg="column">
				<Title>Seniors</Title>
				<p>Welcome to the first application that cares about what you care. Find the best caregivers for your elderlies.</p>
			</HeroStyle>
		);
	}
}
