import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchInfoAll } from "./actions/core";

import "./styles/style.scss";


import Header from "./components/core/header";

import Home from "./components/pages/home";
// import Shares from "./pages/shares/Shares";
// import ShareDetail from "./pages/shares/ShareDetail";
// import Contacts from "./pages/contacts/Contacts";
import Footer from "./components/core/footer";


export class App extends React.Component {
    componentWillMount() {
        this.props.actions.fetchInfoAll();
    }

    render() {
        return (
            <BrowserRouter>
                <div className={`root`}>
                    <Header infoAll={this.props.infoAll}/>
                    <section className={`content`}>
                        <Route exact path={`/`} title={`Главная`} component={Home}/>
                        {/*<Route exact path={`/about/shares/:id`} component={ShareDetail} />*/}
                        {/*<Route exact path={`/about/shares`} component={Shares} />*/}
                        {/*<Route exact path={`/contacts`} component={Contacts} />*/}
                    </section>
                    <Footer  infoAll={this.props.infoAll}/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        infoAll: state.core.infoAll
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchInfoAll}, dispatch)
    }
};
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);