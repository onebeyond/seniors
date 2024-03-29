import { connect } from "react-redux";
import { withRouter } from 'react-router';

import {
	getValue
} from "../../../state/Home/selectors";

import {
	setValue
} from "../../../state/Home/actionCreators";

import Home from './home.component';

const mapStateToProps = (state, ownProps) => ({
	location: ownProps.location,
	value: getValue(state)
});

const mapDispatchToProps = {
	setValue
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
