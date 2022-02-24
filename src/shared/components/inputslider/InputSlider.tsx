import { InputRangeSlider } from "./styles";
interface Iprops {
  type: string;
  min: string;
  max: string;
  name: string;
  step: string;
}
export const InputRangeSliderField = ({
  type,
  min,
  max,
  name,
  step,
}: Iprops) => {
  return (
    <InputRangeSlider type={type} min={min} max={max} name={name} step={step} />
  );
};
