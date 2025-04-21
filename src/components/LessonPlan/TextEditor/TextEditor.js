import { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import html2pdf from "html2pdf.js/dist/html2pdf.bundle.min.js";
import './TextEditor.css';


// TODO: Remove disfunctional buttons
export default class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    componentDidMount() {
        if (this.props.lessonPlan) {
            this.setState({
                editorState: EditorState.createWithContent(
                    ContentState.createFromText(this.props.lessonPlan)
                ),
            });
        }
    }

    // Update editorState if lessonPlan prop changes
    componentDidUpdate(prevProps) {
        if (prevProps.lessonPlan !== this.props.lessonPlan) {
            this.setState({
                editorState: this.props.lessonPlan
                    ? EditorState.createWithContent(ContentState.createFromText(this.props.lessonPlan))
                    : EditorState.createEmpty(),
            });
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    saveAsPDF = () => {
        const { editorState } = this.state;
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawContentState);

        const options = {
            margin: 1,
            filename: "LessonPlan.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
        };

        html2pdf().from(htmlContent).set(options).save();
    };

    // Working for .doc
    saveAsDOC = () => {
        const { editorState } = this.state;
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawContentState);

        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml + htmlContent + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, 'LessonPlan.doc');
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = 'LessonPlan.doc';

            //triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);

    };

    render() {
        const { editorState } = this.state;

        return (
            <div className="editWrapper">
                <div className="editBtnsWrapper">
                    {/* Save as PDF Button */}
                    <button className="btn2" onClick={this.saveAsPDF}>Запази като PDF</button>
                    <button className="btn1" onClick={this.saveAsDOC}>Запази като DOC</button>
                </div>

                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}