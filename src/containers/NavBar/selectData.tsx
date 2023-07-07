type optionProps = {
  value: string;
  label: string;
  defaultValue: boolean;
}

export const selectData: optionProps[] = [
  { value: "else", label: "Ещё", defaultValue: true },
  { value: "one", label: "One", defaultValue: false },
  { value: "two", label: "Two", defaultValue: false },
  { value: "three", label: "Three", defaultValue: false },
];
