import React from 'react';
import {Link} from 'react-router';

import '../sass/app.scss';

const renderDisplayedComponent = children => React.Children.map(children, child => React.cloneElement(child));

const Header = () => (
    <nav className="header ui fixed menu">
        <div className="ui container">
            <Link to="/" className="header item">Redux - Monday Night Meeting</Link>
            <Link to="/simple" className="item">Simple Redux Demo</Link>
            <Link to="/todo-stateful" className="item">Todo List (Stateful React Components)</Link>
            <Link to="/todo-redux" className="item">Todo List (Redux)</Link>
        </div>
    </nav>
);

export default class App extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="app">
                <Header />
                {renderDisplayedComponent(children)}
            </div>
        );
    }
}