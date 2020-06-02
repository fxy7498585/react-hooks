import React from 'react'

const MyComponent = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 620;

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, []);
  return width > breakPoint ? <div> this is pc</div> : <div>this is mobile</div>;
}

export default MyComponent;