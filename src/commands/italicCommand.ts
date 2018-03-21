import {Command} from "../types";
import {insertBeforeAndAfter} from "../util/MarkdownUtil";

export const italicCommand: Command = {
    icon: "italic",
    tooltip:
        "Add italic text",
    execute:
        (getMarkdownState, setMarkdownState) => {
            setMarkdownState(insertBeforeAndAfter(getMarkdownState(), "_"));
        },
};