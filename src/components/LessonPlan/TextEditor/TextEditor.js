import { EditorState, ContentState } from "draft-js";
import { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class TextEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: props.lessonPlan
                ? EditorState.createWithContent(ContentState.createFromText(props.lessonPlan))
                : EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    render() { 
        const {editorState} = this.state;

        return(
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
            />
        );
    }
}