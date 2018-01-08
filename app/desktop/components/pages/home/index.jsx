import React from "react";
// import "./home.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchHome } from "desktop/actions/home";

import isMobile from "libs/userAgent";
import Banner from "./banner";
import MobBanner from "mobile/components/pages/home/banner";
import Stock from "./stock";
import Sale from "./sale";
import Doctor from "./doctor";
import Kids from "./kids";
import MobKids from "mobile/components/pages/home/kids";


export class Home extends React.Component {
    componentWillMount() {
        this.props.actions.fetchHome();
    }

    render() {
        return (
            <div className={`home-section`}>
                {!isMobile.any() ? <Banner/> : <MobBanner/>}
                <Stock/>
                <Sale/>
                <Doctor/>
                {!isMobile.any() ? <Kids/> : <MobKids/> }
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchHome}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;