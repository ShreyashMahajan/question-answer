import {useState} from "react";
import {QuestionOption} from "../../Modals/QuestionOption";

interface ComponentProps {
  option: QuestionOption;
  optionType: string;
  optionId: number;
  onChangeOption: (option: QuestionOption) => void;
}

const OptionComp: React.FC<ComponentProps> = ({
  option,
  optionType,
  optionId,
  onChangeOption,
}) => {
  //   const [input, setInput] = useState<string>();
  const [currentOption, setCurrentOption] = useState<QuestionOption>(option);
  const handleOnChange = (e: any) => {
    const updatedOption = {
      ...option,
      selected: true,
      optionvalue: optionType !== "Radio" ? e.target.value : option.optionvalue,
    };
    onChangeOption(updatedOption);
    setCurrentOption(updatedOption);
  };
  return (
    <div className="option">
      <input
        type={optionType}
        name={`${optionId}`}
        onChange={handleOnChange}
        checked={currentOption.selected}
        value={currentOption.optionvalue}
      />
      <label>{currentOption.optionvalue}</label>
    </div>
  );
};

export {OptionComp};
