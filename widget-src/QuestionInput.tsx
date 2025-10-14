import style from "./style";
import { State } from "./types";

const { widget } = figma;
const { Input } = widget;

const QuestionInput = ({
  state,
  setState
}: {
  state: State;
  setState: (state: State) => void;
}) => {
  return (
    <Input
      width="fill-parent"
      value={state.question}
      onTextEditEnd={(e) => setState({...state, question: e.characters})}
      inputFrameProps={{
        padding: {
          top: 24,
          bottom: 40
        }
      }}
      placeholderProps={{
        ...style.textStyle.input,
        fill: style.color.text.lighter,
        opacity: 1
      }}
      placeholder="What is your question?"
      verticalAlignText="center"
      horizontalAlignText="center"
      {...style.textStyle.input} />
  );
};

export default QuestionInput;