import React from 'react';

function consoleData (Component) {
    class ConsoleData extends React.Component{
        componentDidMount() {
            console.log(this.props);
        }
        componentWillUnmount(){
            console.log('unmount');
        }
        componentWillReceiveProps(nexProps) {
            console.log('prevProps', this.props);
            console.log('nextProps', nexProps);
        }

        render() {
            return <Component {...this.props} />;
        }

    }

    ConsoleData.displayName = `ConsoleData(${Component.displayName || Component.name || 'Component'})`;
    return ConsoleData;
}


export default consoleData;