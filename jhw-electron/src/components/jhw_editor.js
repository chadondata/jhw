import React from 'react';

class JHW_Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: ""
        }
        this.onChange = editorState => {
            this.setState({editorState});
            console.log(editorState);
        }
    }

    render() {
        return (
            <p><br /></p>
        );
    }
}

export default JHW_Editor; 