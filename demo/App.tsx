import * as React from "react";
import ReactMde, {ReactMdeTypes, ReactMdeCommands} from "../src";
import * as Showdown from "showdown";

export interface AppState {
    mdeState: ReactMdeTypes.MdeState;
}

export class App extends React.Component<{}, AppState> {

    converter: Showdown.Converter;

    constructor(props) {
        super(props);
        this.state = {
            mdeState: null,
        };
        this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
    }

    handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
        this.setState({mdeState});
    }

    render() {
        return (
            <div className="container">
                <ReactMde
                    onChange={this.handleValueChange}
                    commands={ReactMdeCommands.getDefaultCommands()}
                    editorState={this.state.mdeState}
                    generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                />
            </div>
        );
    }
}
