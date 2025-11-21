import React from "react";

class Button extends React.Component {
  render() {
    const { children, className = "", ...props } = this.props;

    return (
      <button type="button" className={`${className}`} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
