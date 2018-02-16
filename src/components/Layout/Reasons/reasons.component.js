import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';
import {Button2} from '../../Commons/Button/button.component';

import {Paragraph} from '../../Styles/Paragraph';
import {Flex} from '../../Styles/Flex';

const colors = {
	primary: '#24b8ca',
	secondary: '#B0E0E6'
};

const ReasonsContainer = styled.div`
width: 100%;
padding-bottom: 30px;
@media (min-width: 768px) {
   padding-top: 100px;
 }
`;

const PairReasonsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%;
`;

const ItemIcon = styled.div`
width: 20%;
@media (min-width: 768px) {
   width: 15%;
 }
`;

const ItemText = styled.div`
width: 80%;
text-align: center;
padding: 10px;
`;


export default class Reasons extends React.Component {
	render(){
		return(
			<ReasonsContainer>
				<Flex>
					<Flex marginBox={'10px'} boxWidth={'90%'} directionLg={'column'} >
						<Flex boxWidth={'80%'} direction={'row'}>
							<ItemIcon>
								<img src={IconA} />
							</ItemIcon>
							<ItemText>
								<Paragraph weight={'bold'} orientation={'left'}>
                              Lorem ipsum
								</Paragraph>
								<Paragraph orientation={'left'}>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</Paragraph>
							</ItemText>
						</Flex>
						<Flex boxWidth={'80%'} direction={'row'}>
							<ItemText>
								<Paragraph weight={'bold'}>
                              Lorem ipsum
								</Paragraph>
								<Paragraph>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</Paragraph>
							</ItemText>
							<ItemIcon>
								<img src={IconB} />
							</ItemIcon>
						</Flex>
					</Flex>
					<Flex marginBox={'10px'} boxWidth={'90%'} directionLg={'column'} >
						<Flex boxWidth={'80%'} direction={'row'}>
							<ItemIcon>
								<img src={IconC} />
							</ItemIcon>
							<ItemText>
								<Paragraph weight={'bold'} orientation={'left'}>
                              Lorem ipsum
								</Paragraph>
								<Paragraph orientation={'left'}>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</Paragraph>
							</ItemText>
						</Flex>
						<Flex boxWidth={'80%'} direction={'row'}>
							<ItemText>
								<Paragraph weight={'bold'}>
                              Lorem ipsum
								</Paragraph>
								<Paragraph>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</Paragraph>
							</ItemText>
							<ItemIcon>
								<img src={IconD} />
							</ItemIcon>
						</Flex>
					</Flex>
				</Flex>
				<Button2>Más</Button2>
			</ReasonsContainer>
		);
	}
}
