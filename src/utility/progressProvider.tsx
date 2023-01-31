import React from 'react'

type props= {
    valueStart: number;
    valueEnd: number;
    children: any;
}
const ProgressProvider: React.FC<props> = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);
  
    return children(value);
  };
  export default ProgressProvider;
  